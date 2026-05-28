import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop | In8Love Wellness" },
      { name: "description", content: "Posture tools, wellness equipment, and supplements curated by Dr. Reynolds." },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

const PRODUCTS = [
  { name: "Posture Reset Block", price: "$48", category: "Posture Tools" },
  { name: "Cervical Traction Pillow", price: "$72", category: "Wellness Equipment" },
  { name: "Organic Magnesium Cream", price: "$36", category: "Wellness" },
  { name: "Linen Treatment Tee", price: "$58", category: "Apparel" },
  { name: "Foam Roller — Long", price: "$45", category: "Posture Tools" },
  { name: "Ceramic Cupping Set", price: "$92", category: "Wellness Equipment" },
];

function Shop() {
  return (
    <PageShell>
      <PageHero eyebrow="Curated Goods" title="Products for Better Living" subtitle="Tested in the clinic. Loved by patients." />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group border border-pebble bg-cream rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(44,43,40,0.08)] transition-all duration-300">
              <div className="aspect-square bg-fog flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-stone/60" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-sage-dark mb-2">{p.category}</div>
                <h3 className="text-xl mb-1">{p.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg">{p.price}</span>
                  <button className="text-sm border border-sage text-sage-dark px-4 py-2 hover:bg-sage-light rounded-sm transition-colors">Add to Cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/booknow" className="text-link">Members save 10–20%. Learn more about In8Love Club →</Link>
        </div>
      </section>
    </PageShell>
  );
}
