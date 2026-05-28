import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown, Star, Clipboard, ScanLine, Leaf, TrendingUp, ChevronLeft, ChevronRight, Plus, Minus, MessageCircle, MapPin } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SITE, SERVICES } from "@/lib/site";

import hero from "@/assets/hero.jpg";
import doctor from "@/assets/doctor.jpg";
import ctaBanner from "@/assets/cta-banner.jpg";
import imgChiro from "@/assets/svc-chiropractic.jpg";
import imgAcu from "@/assets/svc-acupuncture.jpg";
import imgDecomp from "@/assets/svc-decompression.jpg";
import imgOzone from "@/assets/svc-ozone.jpg";
import imgCup from "@/assets/svc-cupping.jpg";
import imgLaser from "@/assets/svc-laser.jpg";
import imgCranial from "@/assets/svc-cranial.jpg";
import imgPed from "@/assets/svc-pediatric.jpg";
import imgNet from "@/assets/svc-net.jpg";

const SERVICE_IMG: Record<string, string> = {
  chiropractic: imgChiro, acupuncture: imgAcu, decompression: imgDecomp,
  ozone: imgOzone, cupping: imgCup, laser: imgLaser, cranial: imgCranial,
  pediatric: imgPed, net: imgNet,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "In8Love Wellness | Holistic Chiropractic Care in Los Angeles" },
      { name: "description", content: "Structural chiropractic care, acupuncture, and holistic therapies in West LA. Helping your body remember how to heal itself. Book your first visit." },
      { property: "og:title", content: "In8Love Wellness | Holistic Chiropractic Care in Los Angeles" },
      { property: "og:description", content: "Premium wellness clinic in West LA — chiropractic, acupuncture, spinal decompression and more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "In8Love Wellness",
        image: "/og.jpg",
        telephone: "+13104773335",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3459 Motor Ave",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          postalCode: "90034",
          addressCountry: "US",
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "500" },
      }),
    }],
  }),
  component: Home,
});

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustBar />
      <Services />
      <AboutDoctor />
      <Process />
      <QuizCTA />
      <Reviews />
      <BookingBanner />
      <FAQ />
      <NewsletterHours />
      <WhatsAppButton />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="In8Love Wellness clinic" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(245,240,232,0.96) 0%, rgba(245,240,232,0.78) 45%, rgba(245,240,232,0.1) 100%)" }} />
      </div>
      <div className="container-x relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="eyebrow mb-6 animate-fade-up">West Los Angeles Holistic Wellness</div>
          <h1 className="mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Heal Naturally.<br />
            <span className="accent-italic text-sage-dark">Live Fully.</span>
          </h1>
          <p className="text-lg text-charcoal/75 max-w-xl mb-9 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Structural chiropractic care, Eastern medicine, and holistic therapies — designed to help your body remember how to heal itself.
          </p>
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <Link to="/booknow" className="btn-primary">Book Your First Visit <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/services" className="btn-secondary">Explore Services</Link>
          </div>
          <div className="flex items-center gap-3 text-sm text-charcoal/70 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex gap-0.5 text-gold">
              {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span>500+ Five-Star Reviews · Serving LA Since 2007</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sage-dark animate-bounce z-10">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}

function TrustBar() {
  const items = "Google 5-Star Rated · 15+ Years Experience · 9 Holistic Services · Trusted by 2,000+ LA Patients · Accepting New Patients";
  return (
    <div className="overflow-hidden py-3.5" style={{ background: "var(--sage-dark)" }}>
      <div className="flex whitespace-nowrap animate-marquee text-warm-white text-[13px] tracking-[0.1em]">
        {[0,1,2,3].map(i => (
          <span key={i} className="mx-6">{items} · </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="section-y" style={{ background: "var(--warm-white)" }}>
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow justify-center inline-flex mb-5">What We Offer</div>
            <h2>Every Path to Healing,<br /><span className="accent-italic">Under One Roof</span></h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to="/services"
                className="group relative block aspect-square overflow-hidden rounded-sm"
              >
                <img src={SERVICE_IMG[s.img]} alt={s.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-soft-black/85 via-soft-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-warm-white text-2xl mb-1">{s.name}</h3>
                    <p className="text-warm-white/75 text-sm">{s.blurb}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-warm-white translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shrink-0" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="text-link">See All Services →</Link>
        </div>
      </div>
    </section>
  );
}

function AboutDoctor() {
  return (
    <section className="section-y" style={{ background: "var(--cream)" }}>
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="lg:col-span-5 relative">
            <img src={doctor} alt="Dr. Tanya Reynolds" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" />
            <svg className="absolute -bottom-6 -right-4 w-24 h-24 text-sage opacity-70" viewBox="0 0 100 100" fill="none">
              <path d="M50 10 Q70 30 60 50 Q50 70 30 60 Q10 50 20 30 Q30 10 50 10Z" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.1" />
              <path d="M50 10 Q50 50 50 90" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">Meet Your Doctor</div>
            <h2 className="mb-7">Healing Beyond Pain</h2>
            <blockquote className="accent-italic text-2xl text-sage-dark border-l-2 border-gold pl-6 mb-7 leading-snug">
              "Your body innately knows how to heal itself — you just need the right support."
            </blockquote>
            <p className="text-charcoal/75 mb-4">
              Dr. Tanya Reynolds founded In8Love Wellness in 2007 after her own recovery from a serious car accident and cervical dysplasia revealed what conventional medicine couldn't offer: a path back to wholeness through structural correction and holistic care.
            </p>
            <p className="text-charcoal/75 mb-8">
              For nearly two decades, she's guided 2,000+ Angelenos through deep, measurable transformation — combining science-backed chiropractic with Eastern medicine and emotional release work.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-5 py-2 rounded-full bg-sage-light text-sage-dark text-sm tracking-wide">15+ Years Experience</div>
              <div className="px-5 py-2 rounded-full bg-terracotta-light text-charcoal text-sm tracking-wide">2,000+ Patients Helped</div>
            </div>
            <Link to="/about" className="text-link">Dr. Reynolds' Story →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  { icon: Clipboard, title: "Deep Evaluation", desc: "A 60-minute intake to understand your history, lifestyle, and goals." },
  { icon: ScanLine, title: "Digital X-Rays On-Site", desc: "Precise spinal imaging — no referrals, no waiting rooms." },
  { icon: Leaf, title: "Your Care Plan", desc: "A personalized, results-driven protocol tailored to your body." },
  { icon: TrendingUp, title: "Ongoing Transformation", desc: "Track measurable progress every step of the way." },
];

function Process() {
  return (
    <section className="section-y" style={{ background: "var(--fog)" }}>
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow justify-center inline-flex mb-5">Your Journey</div>
            <h2>What to Expect at In8Love</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] border-t border-dashed border-pebble" />
          {STEPS.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative bg-warm-white/40 lg:bg-transparent text-center p-2">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-5 relative z-10" style={{ background: "var(--warm-white)", border: "1px solid var(--gold-light)" }}>
                  <s.icon className="w-6 h-6 text-sage-dark" />
                </div>
                <div className="text-gold mb-2 text-sm tracking-[0.2em]">0{i + 1}</div>
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-charcoal/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuizCTA() {
  return (
    <section className="section-y relative overflow-hidden" style={{ background: "var(--terracotta-light)" }}>
      <svg className="absolute -left-20 -bottom-10 w-96 h-96 text-terracotta opacity-10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 5 Q65 25 60 45 Q80 35 90 55 Q70 65 75 85 Q55 75 45 95 Q35 75 15 85 Q20 65 5 55 Q25 45 20 25 Q35 35 50 5Z" />
      </svg>
      <div className="container-x relative text-center max-w-2xl">
        <Reveal>
          <h3 className="text-3xl md:text-4xl mb-4">Not Sure Which Treatment Is Right for You?</h3>
          <p className="text-charcoal/75 mb-8">Answer 3 quick questions and we'll point you in the right direction.</p>
          <Link to="/quiz" className="btn-primary">Take the 2-Minute Quiz →</Link>
        </Reveal>
      </div>
    </section>
  );
}

const REVIEWS = [
  { name: "Sarah M.", area: "Culver City", text: "After years of chronic back pain, Dr. Reynolds finally helped me understand what was actually happening in my body. Six months in and I feel like myself again." },
  { name: "James L.", area: "Santa Monica", text: "The combination of chiropractic and acupuncture changed my life. The team treats you like family from the moment you walk in." },
  { name: "Priya R.", area: "Beverly Hills", text: "I came in skeptical and left a believer. The digital X-rays showed me exactly what was misaligned and the care plan worked." },
  { name: "Michael T.", area: "Mar Vista", text: "Best decision I made for my health this year. Spinal decompression saved me from surgery." },
];

function Reviews() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => Math.min(i + 1, REVIEWS.length - 1));
  const prev = () => setIdx((i) => Math.max(i - 1, 0));
  return (
    <section className="section-y" style={{ background: "var(--cream)" }}>
      <div className="container-x">
        <Reveal>
          <div className="text-center mb-12">
            <div className="eyebrow justify-center inline-flex mb-5">What Patients Say</div>
            <h2 className="mb-6">Real Stories, Real Results</h2>
            <div className="inline-flex items-center gap-3 text-sm">
              <div className="flex gap-0.5 text-gold">
                {[0,1,2,3,4].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-medium text-lg">5.0</span>
              <span className="text-stone">· Based on 500+ Google Reviews</span>
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${idx * (100 / 3)}%)` }}>
              {REVIEWS.map((r, i) => (
                <div key={i} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                  <div className="bg-warm-white border border-pebble rounded-sm p-8 h-full">
                    <div className="flex gap-0.5 text-gold mb-4">
                      {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="accent-italic text-charcoal/80 mb-6 leading-relaxed">"{r.text}"</p>
                    <div className="text-sm">
                      <div className="font-medium text-charcoal">{r.name}</div>
                      <div className="text-stone">{r.area}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            <button onClick={prev} aria-label="Previous" className="w-11 h-11 rounded-full border border-sage flex items-center justify-center hover:bg-sage-light"><ChevronLeft className="w-4 h-4 text-sage-dark" /></button>
            <button onClick={next} aria-label="Next" className="w-11 h-11 rounded-full border border-sage flex items-center justify-center hover:bg-sage-light"><ChevronRight className="w-4 h-4 text-sage-dark" /></button>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/testimonials" className="btn-secondary">Read All Reviews</Link>
        </div>
      </div>
    </section>
  );
}

function BookingBanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={ctaBanner} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "rgba(26,25,23,0.65)" }} />
      <div className="container-x relative text-center max-w-2xl">
        <h2 className="text-warm-white mb-5">Your Healing Starts With <span className="accent-italic">One Appointment</span></h2>
        <p className="text-warm-white/80 mb-8 text-lg">New patients welcome. Personalized care from day one.</p>
        <Link to="/booknow" className="btn-primary mb-6">Book Now — Free to Consult</Link>
        <p className="text-warm-white/70 text-sm flex items-center justify-center gap-2 flex-wrap">
          <a href={SITE.phoneHref} className="hover:text-sage-light">{SITE.phone}</a>
          <span>·</span>
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{SITE.address}</span>
        </p>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Do you accept insurance?", a: "We accept most major PPO plans and offer competitive self-pay rates. We're happy to verify your coverage before your first visit — just call us or fill out the insurance form." },
  { q: "What happens at my first visit?", a: "Your first visit is 60–90 minutes. We review your health history, perform a thorough exam, take digital X-rays on-site if needed, and discuss a personalized care plan." },
  { q: "How often will I need to come in?", a: "It depends on your condition and goals. Most patients begin with 1–2 visits per week, then transition to maintenance care as healing progresses." },
  { q: "Can I combine multiple services?", a: "Absolutely. Many patients benefit from combining chiropractic with acupuncture, decompression, or laser therapy. Dr. Reynolds will recommend the right combination for you." },
  { q: "What conditions do you treat?", a: "Back pain, sciatica, headaches, scoliosis, herniated discs, sports injuries, posture issues, TMJ, stress-related tension, and much more." },
  { q: "Do you treat children?", a: "Yes — our pediatric chiropractic care is gentle and tailored for infants, toddlers, and adolescents." },
  { q: "Is parking available?", a: "Yes, free street parking is available on Motor Ave and the surrounding side streets." },
  { q: "What is your cancellation policy?", a: "All appointments are final sale and non-refundable. We ask for 24 hours notice for rescheduling whenever possible." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y" style={{ background: "var(--warm-white)" }}>
      <div className="container-x max-w-3xl">
        <Reveal>
          <div className="text-center mb-12">
            <div className="eyebrow justify-center inline-flex mb-5">Questions</div>
            <h2>Frequently Asked</h2>
          </div>
        </Reveal>
        <div className="divide-y divide-pebble border-y border-pebble">
          {FAQS.map((item, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-lg" style={{ fontFamily: "var(--font-display)" }}>{item.q}</span>
                {open === i ? <Minus className="w-4 h-4 text-sage-dark shrink-0" /> : <Plus className="w-4 h-4 text-sage-dark shrink-0" />}
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? 240 : 0 }}
              >
                <p className="text-charcoal/75 pb-6 pr-8">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(f => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}

function NewsletterHours() {
  return (
    <section className="section-y" style={{ background: "var(--cream)" }}>
      <div className="container-x grid md:grid-cols-2 gap-12">
        <Reveal>
          <div>
            <div className="eyebrow mb-5">Visit Us</div>
            <h3 className="mb-6">Hours & Location</h3>
            <div className="space-y-1 mb-6 text-sm">
              {SITE.hours.map(([day, hrs]) => (
                <div key={day} className="flex justify-between border-b border-pebble py-2">
                  <span>{day}</span>
                  <span className={hrs === "Closed" ? "text-stone" : "text-charcoal"}>{hrs}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-stone">{SITE.address}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="bg-warm-white border border-pebble p-8 md:p-10 rounded-sm">
            <div className="eyebrow mb-5">Stay Connected</div>
            <h3 className="mb-4">Join the Wellness Circle</h3>
            <p className="text-charcoal/75 mb-6 text-sm">Monthly insights on holistic healing, posture, and Eastern medicine — straight to your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input type="email" required placeholder="your@email.com" className="border border-pebble bg-warm-white px-4 py-3 rounded-sm focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/15" />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/13104773335?text=Hi! I'd like to learn more about In8Love Wellness."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 right-5 lg:bottom-6 lg:right-6 z-30 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      style={{ background: "var(--sage-dark)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-warm-white" />
    </a>
  );
}
