import { Link } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileBookBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 h-14" style={{ background: "var(--charcoal)" }}>
      <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-warm-white text-sm border-r border-warm-white/10">
        <Phone className="w-4 h-4" /> Call
      </a>
      <Link to="/booknow" className="flex items-center justify-center gap-2 text-warm-white text-sm" style={{ background: "var(--terracotta)" }}>
        <Calendar className="w-4 h-4" /> Book Appointment
      </Link>
    </div>
  );
}
