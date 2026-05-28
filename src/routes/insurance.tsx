import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance | In8Love Wellness" },
      { name: "description", content: "Insurance, HSA, FSA, and self-pay rates at In8Love Wellness in West LA." },
      { property: "og:url", content: "/insurance" },
    ],
    links: [{ rel: "canonical", href: "/insurance" }],
  }),
  component: Insurance,
});

function Insurance() {
  return (
    <PageShell>
      <PageHero eyebrow="Coverage" title="Understanding Your Coverage" subtitle="Most major PPO plans accepted. HSA & FSA eligible." />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x max-w-3xl">
          <div className="border border-pebble bg-cream rounded-sm p-8 mb-8">
            <h3 className="mb-4">Verify Your Coverage</h3>
            <p className="text-sm text-charcoal/75 mb-6">Tell us your insurance and we'll respond within one business day.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input className="w-full border border-pebble bg-warm-white px-4 py-3 rounded-sm" placeholder="Your name" />
              <input type="email" className="w-full border border-pebble bg-warm-white px-4 py-3 rounded-sm" placeholder="Email" />
              <input className="w-full border border-pebble bg-warm-white px-4 py-3 rounded-sm" placeholder="Insurance provider & plan" />
              <button type="submit" className="btn-primary w-full">Check My Coverage</button>
            </form>
          </div>
          <div className="border border-sage bg-sage-light/30 rounded-sm p-6">
            <h3 className="text-xl mb-2">HSA & FSA Eligible</h3>
            <p className="text-sm text-charcoal/75">All services and most shop items qualify for HSA/FSA spending.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
