import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Calendar, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/booknow")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | In8Love Wellness" },
      { name: "description", content: "Book your first visit with Dr. Tanya Reynolds at In8Love Wellness in West LA." },
      { property: "og:title", content: "Book Now | In8Love Wellness" },
      { property: "og:description", content: "Reserve your appointment today." },
      { property: "og:url", content: "/booknow" },
    ],
    links: [{ rel: "canonical", href: "/booknow" }],
  }),
  component: BookNow,
});

function BookNow() {
  const [agreed, setAgreed] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Reserve Your Visit"
        title="Book an Appointment"
        subtitle="Three simple steps. Personalized care from your first visit."
      />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x max-w-3xl">
          <div className="border border-terracotta/40 bg-terracotta-light/40 rounded-sm p-6 mb-8">
            <h3 className="text-xl mb-3">Cancellation Policy</h3>
            <p className="text-sm text-charcoal/80 mb-4">All appointments are final sale and non-refundable. We ask for 24 hours notice for rescheduling whenever possible.</p>
            <label className="flex items-start gap-3 cursor-pointer text-sm">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 accent-sage-dark" />
              <span>I understand and agree to the cancellation policy.</span>
            </label>
          </div>

          {agreed ? (
            <div className="border border-pebble bg-cream rounded-sm p-10 text-center">
              <Calendar className="w-10 h-10 mx-auto text-sage-dark mb-4" />
              <h3 className="mb-3">Select a Date & Time</h3>
              <p className="text-charcoal/70 mb-6">Our booking widget will appear here. For now, please call us to schedule.</p>
              <a href="tel:+13104773335" className="btn-primary">Call (310) 477-3335</a>
              <ul className="mt-10 text-left text-sm space-y-3 max-w-md mx-auto">
                {["New patient intake (60–90 min)", "Digital X-rays available on-site", "What to wear: comfortable clothing", "Free street parking on Motor Ave"].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Check className="w-4 h-4 text-sage-dark mt-1" />{t}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center text-stone py-12 border border-dashed border-pebble rounded-sm">
              <Clock className="w-8 h-8 mx-auto mb-3 opacity-60" />
              <p className="text-sm">Please acknowledge the policy above to reveal the calendar.</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link to="/quiz" className="text-link">Not sure which service is right for you? Take the quiz →</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
