import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Conditions We Treat | In8Love Wellness" },
      { name: "description", content: "From back pain to migraines — explore the conditions we treat at In8Love Wellness." },
      { property: "og:url", content: "/conditions" },
    ],
    links: [{ rel: "canonical", href: "/conditions" }],
  }),
  component: Conditions,
});

const CONDITIONS = [
  "Back Pain", "Sciatica", "Headaches & Migraines", "Scoliosis", "Herniated Discs",
  "Neck Pain", "TMJ", "Sports Injuries", "Posture Issues", "Pregnancy Discomfort",
  "Carpal Tunnel", "Plantar Fasciitis", "Vertigo", "Whiplash", "Stress & Tension",
  "Pediatric Concerns",
];

function Conditions() {
  return (
    <PageShell>
      <PageHero eyebrow="How We Help" title="Conditions We Treat" subtitle="If you're not sure whether we can help, just ask. We're happy to listen." />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
          {CONDITIONS.map((c) => (
            <Link to="/booknow" key={c} className="border border-pebble bg-cream rounded-sm p-6 hover:border-sage hover:bg-sage-light/30 transition-colors">
              <h3 className="text-xl">{c}</h3>
              <p className="text-sm text-stone mt-1">Learn how we approach treatment →</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
