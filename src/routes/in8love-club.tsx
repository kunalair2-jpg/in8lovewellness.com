import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Check } from "lucide-react";

export const Route = createFileRoute("/in8love-club")({
  head: () => ({
    meta: [
      { title: "In8Love Club Membership | In8Love Wellness" },
      { name: "description", content: "Monthly wellness memberships with unlimited adjustments, priority booking, and shop discounts." },
      { property: "og:url", content: "/in8love-club" },
    ],
    links: [{ rel: "canonical", href: "/in8love-club" }],
  }),
  component: Club,
});

const TIERS = [
  { name: "Starter", price: "$129", features: ["1 adjustment / month", "10% shop discount", "Newsletter access"] },
  { name: "Wellness", price: "$249", features: ["2 adjustments / month", "1 add-on service / month", "15% shop discount", "Priority booking"], featured: true },
  { name: "Elite", price: "$449", features: ["Unlimited adjustments", "Priority booking", "20% shop discount", "Quarterly consult with Dr. Reynolds"] },
];

function Club() {
  return (
    <PageShell>
      <PageHero eyebrow="Membership" title="The In8Love Club" subtitle="Healing is a journey, not an event. Members get consistent, deeper care for less." />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x grid md:grid-cols-3 gap-6 max-w-5xl">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`p-8 rounded-sm border ${t.featured ? "border-sage bg-sage-light/20 shadow-[0_12px_40px_rgba(143,168,124,0.18)]" : "border-pebble bg-cream"}`}
            >
              {t.featured && <div className="text-xs uppercase tracking-widest text-terracotta mb-3">Most Loved</div>}
              <h3 className="text-2xl mb-2">{t.name}</h3>
              <div className="text-4xl mb-1" style={{ fontFamily: "var(--font-display)" }}>{t.price}<span className="text-sm text-stone">/month</span></div>
              <ul className="space-y-2 my-7 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="w-4 h-4 text-sage-dark mt-1 shrink-0" />{f}</li>
                ))}
              </ul>
              <Link to="/booknow" className={t.featured ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}>Join {t.name}</Link>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
