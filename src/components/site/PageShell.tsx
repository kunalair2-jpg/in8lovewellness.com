import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBookBar } from "./MobileBookBar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1 pt-[72px] pb-14 lg:pb-0">{children}</main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="section-y" style={{ background: "var(--fog)" }}>
      <div className="container-x text-center max-w-3xl">
        <div className="eyebrow justify-center mb-6 inline-flex">{eyebrow}</div>
        <h1 className="mb-6">{title}</h1>
        {subtitle && <p className="text-stone text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
