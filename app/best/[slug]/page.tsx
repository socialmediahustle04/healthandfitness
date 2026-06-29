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

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </>
  );
}

export default async function BestPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getBestPage(slug);
  if (!page) notFound();
  const url = `${site.url}/best/${page.slug}`;

  const jsonLd: Record<string, unknown>[] = [
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

  if (page.products && page.products.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: page.title,
      itemListElement: page.products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${site.url}/go/${product.affiliateSlug}`
      }))
    });
  }

  if (page.faqs && page.faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    });
  }

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

                {page.lead && page.lead.length > 0 && (
                  <div className="article-lead">
                    <Prose paragraphs={page.lead} />
                  </div>
                )}

                <section className="article-section">
                  <h2>What we evaluate</h2>
                  <div className="criteria-list">
                    {page.criteria.map((criterion) => (
                      <span key={criterion}>{criterion}</span>
                    ))}
                  </div>
                </section>

                {page.products && page.products.length > 0 && (
                  <section className="article-section" aria-label="Products compared">
                    <h2>The options, compared</h2>
                    <div className="product-list">
                      {page.products.map((product) => (
                        <article className="product-card" key={product.affiliateSlug}>
                          <h3>{product.name}</h3>
                          <p className="product-summary">{product.oneLineSummary}</p>
                          <p className="product-meta">
                            <span className="product-meta-label">Who it may suit</span>
                            {product.whoItIsFor}
                          </p>

                          <div className="product-columns">
                            <div>
                              <p className="product-list-label">Pros</p>
                              <ul className="prose-list">
                                {product.pros.map((pro) => (
                                  <li key={pro}>{pro}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="product-list-label">Considerations</p>
                              <ul className="prose-list">
                                {product.considerations.map((con) => (
                                  <li key={con}>{con}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <p className="product-meta">
                            <span className="product-meta-label">Ingredients and approach</span>
                            {product.keyIngredientsOrApproach}
                          </p>
                          <p className="product-meta">
                            <span className="product-meta-label">Price</span>
                            {product.priceNote}
                          </p>
                          <p className="product-meta">
                            <span className="product-meta-label">Refunds</span>
                            {product.refundNote}
                          </p>

                          <a
                            className="product-cta"
                            href={`/go/${product.affiliateSlug}`}
                            target="_blank"
                            rel="sponsored nofollow noopener"
                          >
                            Check the official {product.name} page
                          </a>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                {page.sections.map((section) => (
                  <section className="article-section" key={section.heading}>
                    <h2>{section.heading}</h2>
                    <Prose paragraphs={section.body} />
                    {section.callout && (
                      <Callout title={section.callout.title} tone={section.callout.tone ?? "sage"}>
                        <p>{section.callout.body}</p>
                      </Callout>
                    )}
                  </section>
                ))}

                {page.faqs && page.faqs.length > 0 && (
                  <section className="article-section article-faq" aria-labelledby="best-faq-title">
                    <h2 id="best-faq-title">Frequently asked questions</h2>
                    <dl>
                      {page.faqs.map((faq) => (
                        <div className="faq-item" key={faq.question}>
                          <dt>{faq.question}</dt>
                          <dd>{faq.answer}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                )}

                {page.sources && page.sources.length > 0 && (
                  <section className="article-section article-sources" aria-labelledby="best-sources-title">
                    <h2 id="best-sources-title">Sources</h2>
                    <p className="article-sources-note">
                      We reference reputable health and consumer-protection
                      organizations. Links open in a new tab.
                    </p>
                    <ul>
                      {page.sources.map((source) => (
                        <li key={source.url}>
                          <a href={source.url} target="_blank" rel="noopener noreferrer">
                            {source.label}
                          </a>
                          <span className="source-publisher">{source.publisher}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
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
