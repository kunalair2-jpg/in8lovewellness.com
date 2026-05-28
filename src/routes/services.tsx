import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import imgChiro from "@/assets/svc-chiropractic.jpg";
import imgAcu from "@/assets/svc-acupuncture.jpg";
import imgDecomp from "@/assets/svc-decompression.jpg";
import imgOzone from "@/assets/svc-ozone.jpg";
import imgCup from "@/assets/svc-cupping.jpg";
import imgLaser from "@/assets/svc-laser.jpg";
import imgCranial from "@/assets/svc-cranial.jpg";
import imgPed from "@/assets/svc-pediatric.jpg";
import imgNet from "@/assets/svc-net.jpg";

const IMG: Record<string, string> = {
  chiropractic: imgChiro, acupuncture: imgAcu, decompression: imgDecomp,
  ozone: imgOzone, cupping: imgCup, laser: imgLaser, cranial: imgCranial,
  pediatric: imgPed, net: imgNet,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | In8Love Wellness" },
      { name: "description", content: "Nine holistic therapies — chiropractic, acupuncture, spinal decompression, ozone, fire cupping, laser, cranial release, pediatric, and NET." },
      { property: "og:title", content: "Services | In8Love Wellness" },
      { property: "og:description", content: "Explore every healing modality offered at In8Love Wellness in West LA." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What We Offer"
        title="Every Path to Healing"
        subtitle="Nine modalities, one philosophy: support your body's innate ability to heal."
      />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article key={s.slug} className="group border border-pebble bg-warm-white rounded-sm overflow-hidden hover:shadow-[0_8px_32px_rgba(44,43,40,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={IMG[s.img]} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl mb-2">{s.name}</h3>
                <p className="text-charcoal/70 text-sm mb-5">{s.blurb}</p>
                <Link to="/booknow" className="text-link inline-flex items-center gap-2">Learn More <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
