import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/conditions", label: "Conditions" },
  { to: "/journal", label: "Journal" },
  { to: "/shop", label: "Shop" },
  { to: "/in8love-club", label: "Membership" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(245,240,232,0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 1px 0 var(--pebble)" : "none",
        }}
      >
        <div className="container-x flex items-center justify-between h-[72px]">
          <Link to="/" className="font-display text-[22px] font-medium tracking-tight text-charcoal" style={{ fontFamily: "var(--font-display)" }}>
            IN8LOVE <span className="text-sage-dark">WELLNESS</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[13px] tracking-[0.06em] text-charcoal/80 hover:text-sage-dark transition-colors"
                activeProps={{ className: "text-sage-dark border-b border-sage" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a href={SITE.phoneHref} className="text-[13px] text-sage-dark tracking-wide hover:underline">
              {SITE.phone}
            </a>
            <Link to="/booknow" className="btn-primary pulse-cta">Book Now</Link>
          </div>

          <button className="lg:hidden p-2 -mr-2" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6 text-charcoal" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        style={{ background: "var(--soft-black)" }}
      >
        <div className="flex items-center justify-between p-6">
          <span className="text-warm-white text-lg" style={{ fontFamily: "var(--font-display)" }}>IN8LOVE</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="w-7 h-7 text-warm-white" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-6 mt-12">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-warm-white text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-4 px-6">
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-warm-white/80">
            <Phone className="w-4 h-4" /> {SITE.phone}
          </a>
          <Link to="/booknow" onClick={() => setOpen(false)} className="btn-primary w-full max-w-xs justify-center">Book Now</Link>
        </div>
      </div>
    </>
  );
}
