import Link from "next/link";
import { HomeHeader } from "@/components/home/HomeHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

type IndexCard = {
  title: string;
  description: string;
  href: string;
  meta?: string;
};

type IndexLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: IndexCard[];
  breadcrumbLabel: string;
};

export function IndexLayout({
  eyebrow,
  title,
  intro,
  cards,
  breadcrumbLabel
}: IndexLayoutProps) {
  return (
    <>
      <HomeHeader />
      <main id="main-content">
        <section className="page-hero" aria-labelledby="index-title">
          <div className="container page-hero-inner">
            <RevealOnScroll>
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: breadcrumbLabel }]} />
              <p className="eyebrow">{eyebrow}</p>
              <h1 id="index-title">{title}</h1>
              <p className="page-hero-intro">{intro}</p>
            </RevealOnScroll>
          </div>
        </section>
        <section className="section section-paper">
          <div className="container index-grid">
            {cards.map((card, index) => (
              <RevealOnScroll as="div" delay={(index % 3) * 80} key={card.href}>
                <Link className="index-card" href={card.href}>
                  {card.meta && <span className="guide-category">{card.meta}</span>}
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <span className="card-cta">Read more</span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
