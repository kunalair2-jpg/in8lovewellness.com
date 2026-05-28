import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | In8Love Wellness" },
      { name: "description", content: "Get in touch with In8Love Wellness in West Los Angeles." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <PageHero eyebrow="Get In Touch" title="Reach Our Clinic" subtitle="Questions about a treatment? Insurance? We typically respond within one business day." />
      <section className="section-y" style={{ background: "var(--warm-white)" }}>
        <div className="container-x grid md:grid-cols-2 gap-12 max-w-5xl">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <input className="w-full border border-pebble bg-warm-white px-4 py-3 rounded-sm focus:border-sage focus:outline-none" placeholder="Your name" required />
            <input type="email" className="w-full border border-pebble bg-warm-white px-4 py-3 rounded-sm focus:border-sage focus:outline-none" placeholder="Email" required />
            <input type="tel" className="w-full border border-pebble bg-warm-white px-4 py-3 rounded-sm focus:border-sage focus:outline-none" placeholder="Phone" />
            <select className="w-full border border-pebble bg-warm-white px-4 py-3 rounded-sm focus:border-sage focus:outline-none">
              <option>Which service are you interested in?</option>
              <option>Chiropractic Care</option>
              <option>Acupuncture</option>
              <option>Spinal Decompression</option>
              <option>Other / Not sure</option>
            </select>
            <textarea rows={5} className="w-full border border-pebble bg-warm-white px-4 py-3 rounded-sm focus:border-sage focus:outline-none" placeholder="How can we help?" />
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
          <div>
            <h3 className="mb-4">Visit Us</h3>
            <p className="text-charcoal/75 mb-2">3459 Motor Ave</p>
            <p className="text-charcoal/75 mb-6">Los Angeles, CA 90034</p>
            <p className="text-sm mb-1"><strong>Phone:</strong> <a href="tel:+13104773335" className="text-sage-dark">(310) 477-3335</a></p>
            <p className="text-sm mb-6"><strong>Email:</strong> <a href="mailto:in8love@in8lovewellness.com" className="text-sage-dark">in8love@in8lovewellness.com</a></p>
            <div className="aspect-video w-full bg-fog rounded-sm border border-pebble overflow-hidden">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=3459+Motor+Ave,+Los+Angeles,+CA+90034&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-stone mt-4">Free street parking available on Motor Ave and surrounding side streets.</p>
            <div className="mt-6">
              <Link to="/booknow" className="btn-secondary">Book an Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
