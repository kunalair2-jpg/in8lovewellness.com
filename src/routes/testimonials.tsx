import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | In8Love Wellness" },
      { name: "description", content: "Real stories from In8Love Wellness patients across Los Angeles." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const REVIEWS = [
  { name: "Sarah M.", area: "Culver City", text: "After years of chronic back pain, Dr. Reynolds finally helped me understand what was actually happening in my body. Six months in and I feel like myself again." },
  { name: "James L.", area: "Santa Monica", text: "The combination of chiropractic and acupuncture changed my life. The team treats you like family from the moment you walk in." },
  { name: "Priya R.", area: "Beverly Hills", text: "I came in skeptical and left a believer. The digital X-rays showed me exactly what was misaligned and the care plan worked." },
  { name: "Michael T.", area: "Mar Vista", text: "Best decision I made for my health this year. Spinal decompression saved me from surgery." },
  { name: "Elena B.", area: "Venice", text: "I bring my whole family here now. Even my two-year-old loves Dr. Reynolds." },
  { name: "David K.", area: "West Hollywood", text: "The NET sessions unlocked something I didn't know I was holding. Profound work." },
];

function Testimonials() {
  return (
    <PageShell>
      <PageHero eyebrow="Patient Stories" title="Real Stories, Real Results" subtitle="Over 500 five-star reviews from across Los Angeles." />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x columns-1 md:columns-2 lg:columns-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="break-inside-avoid border border-pebble bg-cream rounded-sm p-7 mb-6">
              <div className="flex gap-0.5 text-gold mb-3">
                {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="accent-italic text-charcoal/80 leading-relaxed mb-5">"{r.text}"</p>
              <div className="text-sm font-medium">{r.name} <span className="text-stone font-normal">— {r.area}</span></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/booknow" className="btn-primary">Ready to Write Your Own Story?</Link>
        </div>
      </section>
    </PageShell>
  );
}
