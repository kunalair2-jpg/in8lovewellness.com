import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Find Your Treatment | In8Love Wellness Quiz" },
      { name: "description", content: "Two-minute quiz to find the right holistic therapy for you." },
      { property: "og:url", content: "/quiz" },
    ],
    links: [{ rel: "canonical", href: "/quiz" }],
  }),
  component: Quiz,
});

const STEPS = [
  { q: "What are you experiencing?", opts: ["Back / neck pain", "Headaches or stress", "Recovery from injury", "General wellness"] },
  { q: "How long has it been going on?", opts: ["Less than a month", "1–6 months", "More than 6 months", "Years"] },
  { q: "What's your wellness goal?", opts: ["Pain relief", "Long-term healing", "Energy & vitality", "Emotional balance"] },
];

const RESULT: Record<number, string> = {
  0: "Chiropractic Care + Spinal Decompression",
  1: "Acupuncture + Cranial Facial Release",
  2: "Laser Therapy + Chiropractic Care",
  3: "Acupuncture + NET",
};

function Quiz() {
  const [step, setStep] = useState(0);
  const [first, setFirst] = useState<number | null>(null);
  const done = step >= STEPS.length;
  return (
    <PageShell>
      <PageHero eyebrow="2-Minute Quiz" title="Find Your Path to Healing" />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x max-w-2xl">
          {!done && (
            <>
              <div className="h-1 bg-pebble rounded-full overflow-hidden mb-10">
                <div className="h-full bg-sage transition-all" style={{ width: `${(step / STEPS.length) * 100}%` }} />
              </div>
              <h2 className="mb-8 text-center">{STEPS[step].q}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {STEPS[step].opts.map((o, i) => (
                  <button
                    key={o}
                    onClick={() => { if (step === 0) setFirst(i); setStep(step + 1); }}
                    className="border border-pebble bg-cream p-6 text-left rounded-sm hover:border-sage hover:bg-sage-light/30 transition-colors"
                  >
                    {o}
                  </button>
                ))}
              </div>
            </>
          )}
          {done && (
            <div className="text-center border border-pebble bg-cream rounded-sm p-10">
              <div className="eyebrow justify-center inline-flex mb-5">Your Recommendation</div>
              <h2 className="mb-4">{RESULT[first ?? 0]}</h2>
              <p className="text-charcoal/75 mb-8">Based on your answers, Dr. Reynolds recommends starting with these services.</p>
              <Link to="/booknow" className="btn-primary">Book This Combination <ArrowRight className="w-4 h-4" /></Link>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
