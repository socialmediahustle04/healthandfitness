import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HomeHeader } from "@/components/home/HomeHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Callout } from "@/components/layout/Callout";
import { bestPages, getBestPage } from "@/content/library";
import { site } from "@/lib/design-tokens";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return bestPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getBestPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/best/${page.slug}` }
  };
}

export default async function BestPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getBestPage(slug);
  if (!page) notFound();
  const url = `${site.url}/best/${page.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.description,
      url,
      mainEntityOfPage: url,
      image: `${site.url}${site.ogImage}`,
      datePublished: "2026-01-01",
      dateModified: "2026-01-01",
      author: {
        "@type": "Organization",
        name: `${site.name} Editorial Team`
      },
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}${site.ogImage}`,
          width: 1200,
          height: 630
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Best Picks", item: `${site.url}/best` },
        { "@type": "ListItem", position: 3, name: page.title, item: url }
      ]
    }
  ];

  return (
    <>
      <HomeHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <article>
          <section className="article-hero" aria-labelledby="best-title">
            <div className="container article-hero-inner">
              <RevealOnScroll>
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Best Picks", href: "/best" },
                    { label: page.title }
                  ]}
                />
                <p className="article-kicker">Comparison framework</p>
                <h1 id="best-title">{page.title}</h1>
                <p className="article-dek">{page.intro}</p>
                <div className="article-byline">
                  <span>{site.name} Editorial Team</span>
                  <span>Updated 2026</span>
                  <span>Affiliate disclosure included</span>
                </div>
              </RevealOnScroll>
            </div>
          </section>

          <section className="section section-paper">
            <div className="container article-shell">
              <RevealOnScroll className="article-body">
                <Callout title="Affiliate disclosure" tone="terracotta">
                  <p>{page.disclosure}</p>
                </Callout>

                <section className="article-section">
                  <h2>What we evaluate</h2>
                  <div className="criteria-list">
                    {page.criteria.map((criterion) => (
                      <span key={criterion}>{criterion}</span>
                    ))}
                  </div>
                </section>

                {page.sections.map((section) => (
                  <section className="article-section" key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.callout && (
                      <Callout title={section.callout.title} tone={section.callout.tone ?? "sage"}>
                        <p>{section.callout.body}</p>
                      </Callout>
                    )}
                  </section>
                ))}
              </RevealOnScroll>

              <aside className="article-aside">
                <div className="article-aside-card">
                  <p className="aside-label">Before comparing</p>
                  <Link href="/weight-loss-after-40">Read the 40+ guide</Link>
                  <Link href="/how-we-review">See how we review</Link>
                  <Link href="/advertising-disclosure">Advertising disclosure</Link>
                </div>
              </aside>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
