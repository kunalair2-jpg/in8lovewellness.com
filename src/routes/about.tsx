import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import doctor from "@/assets/doctor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Tanya Reynolds | In8Love Wellness" },
      { name: "description", content: "Meet Dr. Tanya Reynolds — founder of In8Love Wellness and a leader in holistic chiropractic care in Los Angeles since 2007." },
      { property: "og:title", content: "About Dr. Tanya Reynolds | In8Love Wellness" },
      { property: "og:description", content: "The story behind In8Love Wellness." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={doctor} alt="Dr. Tanya Reynolds" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/60 to-transparent" />
        <div className="container-x relative h-full flex items-center">
          <div className="max-w-xl">
            <div className="eyebrow mb-5">Meet Dr. Reynolds</div>
            <h1>Built on a Belief That Your Body Already Knows How to Heal</h1>
          </div>
        </div>
      </section>
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x max-w-3xl">
          <p className="accent-italic text-2xl text-sage-dark mb-10 leading-snug">
            "After my own recovery from a serious car accident and cervical dysplasia, I understood — viscerally — that the body holds the blueprint for its own healing."
          </p>
          <p className="mb-5 text-charcoal/80">Dr. Tanya Reynolds founded In8Love Wellness in 2007 with one conviction: holistic care isn't an alternative to medicine — it's a return to the way the body was designed to function.</p>
          <p className="mb-5 text-charcoal/80">For nearly two decades, she has trained continuously in structural correction, Eastern medicine, cranial work, and emotional release techniques. Each modality she offers, she has personally tested, refined, and integrated into a unified philosophy of care.</p>
          <p className="mb-10 text-charcoal/80">Today, In8Love serves over 2,000 Angelenos — from professional athletes to new mothers to children — all seeking the same thing: a path back to wholeness.</p>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {["Physical Health", "Emotional Health", "Structural Correction"].map(p => (
              <div key={p} className="border border-pebble bg-cream rounded-sm p-6 text-center">
                <h3 className="text-xl">{p}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/booknow" className="btn-primary">Book with Dr. Reynolds</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
