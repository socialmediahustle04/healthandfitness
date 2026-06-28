import { HomeHeader } from "@/components/home/HomeHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import type { ReactNode } from "react";

type TrustPageLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function TrustPageLayout({
  eyebrow,
  title,
  intro,
  children
}: TrustPageLayoutProps) {
  return (
    <>
      <HomeHeader />
      <main id="main-content">
        <section className="page-hero" aria-labelledby="page-hero-title">
          <div className="container page-hero-inner">
            <RevealOnScroll>
              <p className="eyebrow">{eyebrow}</p>
              <h1 id="page-hero-title">{title}</h1>
              <p className="page-hero-intro">{intro}</p>
            </RevealOnScroll>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
