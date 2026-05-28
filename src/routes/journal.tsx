import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal | In8Love Wellness" },
      { name: "description", content: "Articles on holistic healing, posture, nutrition, and Eastern medicine." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

const POSTS = [
  { title: "The Truth About Posture in the Age of Phones", category: "Spinal Health", excerpt: "Why your neck is paying the price — and what to do about it.", date: "May 2026" },
  { title: "What Acupuncture Actually Does to Your Nervous System", category: "Eastern Medicine", excerpt: "A modern look at an ancient practice.", date: "April 2026" },
  { title: "Three Foods That Quietly Inflame Your Spine", category: "Nutrition", excerpt: "Eating for structural health is simpler than you think.", date: "April 2026" },
  { title: "Why Stress Lives in Your Shoulders", category: "Wellness Lifestyle", excerpt: "And how to coax it back out.", date: "March 2026" },
];

function Journal() {
  return (
    <PageShell>
      <PageHero eyebrow="Field Notes" title="The Journal" subtitle="Practical, science-backed writing on holistic healing." />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((p) => (
            <article key={p.title} className="border border-pebble bg-cream rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(44,43,40,0.08)] transition-all duration-300">
              <div className="aspect-[4/3] bg-fog" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-sage-dark mb-3">{p.category}</div>
                <h3 className="text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-charcoal/70 mb-4">{p.excerpt}</p>
                <div className="text-xs text-stone">{p.date} · 5 min read</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
