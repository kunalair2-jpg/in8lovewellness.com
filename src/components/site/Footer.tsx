import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", color: "rgba(253,250,244,0.72)" }}>
      <div className="container-x py-20">
        <div className="mb-14">
          <div className="text-warm-white text-2xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
            IN8LOVE WELLNESS
          </div>
          <p className="accent-italic text-warm-white/60 text-lg">Your Body. Your Healing. Your Journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="text-warm-white text-xs uppercase tracking-[0.15em] mb-5">Visit</h4>
            <p className="flex items-start gap-2 mb-2 text-sm"><MapPin className="w-4 h-4 mt-1 shrink-0 text-sage-light" />{SITE.address}</p>
            <p className="flex items-center gap-2 mb-2 text-sm"><Phone className="w-4 h-4 text-sage-light" /><a href={SITE.phoneHref} className="hover:text-sage-light">{SITE.phone}</a></p>
            <p className="flex items-center gap-2 mb-5 text-sm"><Mail className="w-4 h-4 text-sage-light" /><a href={`mailto:${SITE.email}`} className="hover:text-sage-light">{SITE.email}</a></p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 border border-warm-white/20 rounded-sm flex items-center justify-center hover:border-sage-light hover:text-sage-light"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 border border-warm-white/20 rounded-sm flex items-center justify-center hover:border-sage-light hover:text-sage-light"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-warm-white text-xs uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="hover:text-sage-light">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-warm-white text-xs uppercase tracking-[0.15em] mb-5">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-sage-light">About Dr. Reynolds</Link></li>
              <li><Link to="/conditions" className="hover:text-sage-light">Conditions We Treat</Link></li>
              <li><Link to="/journal" className="hover:text-sage-light">Journal</Link></li>
              <li><Link to="/testimonials" className="hover:text-sage-light">Testimonials</Link></li>
              <li><Link to="/insurance" className="hover:text-sage-light">Insurance</Link></li>
              <li><Link to="/in8love-club" className="hover:text-sage-light">In8Love Club</Link></li>
              <li><Link to="/contact" className="hover:text-sage-light">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-warm-white text-xs uppercase tracking-[0.15em] mb-5">Join the Wellness Circle</h4>
            <p className="text-sm mb-4">Monthly insights on holistic healing, posture, and Eastern medicine — straight to your inbox.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent border border-warm-white/25 px-4 py-3 text-sm text-warm-white placeholder:text-warm-white/40 focus:border-sage-light focus:outline-none rounded-sm"
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm-white/10">
          <h4 className="text-warm-white text-xs uppercase tracking-[0.15em] mb-4">Hours</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1 text-sm max-w-2xl">
            {SITE.hours.map(([day, hrs]) => (
              <div key={day} className="flex justify-between py-1 border-b border-warm-white/5">
                <span>{day}</span>
                <span className={hrs === "Closed" ? "text-warm-white/40" : ""}>{hrs}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-warm-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-warm-white/50">
          <span>© {new Date().getFullYear()} In8Love Wellness. All Rights Reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-sage-light">Privacy</a>
            <a href="#" className="hover:text-sage-light">Terms</a>
            <a href="/sitemap.xml" className="hover:text-sage-light">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
