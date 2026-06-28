import Image from "next/image";
import Link from "next/link";
import { HomeHeader } from "@/components/home/HomeHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Callout } from "@/components/layout/Callout";
import type { ArticleImage, ContentSubsection, Guide } from "@/content/library";
import { site } from "@/lib/design-tokens";

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </>
  );
}

function ArticleFigure({
  image,
  priority = false,
  ratio
}: {
  image: ArticleImage;
  priority?: boolean;
  ratio: "wide" | "standard";
}) {
  return (
    <figure className={`article-figure article-figure-${ratio}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes="(max-width: 720px) 100vw, (max-width: 1080px) 90vw, 760px"
        className="article-figure-img"
      />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

function Subsection({ sub }: { sub: ContentSubsection }) {
  return (
    <div className="article-subsection">
      <h3>{sub.heading}</h3>
      <Prose paragraphs={sub.body} />
      {sub.bullets && (
        <ul className="prose-list">
          {sub.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {sub.image && <ArticleFigure image={sub.image} ratio="standard" />}
      {sub.callout && (
        <Callout title={sub.callout.title} tone={sub.callout.tone ?? "sage"}>
          <p>{sub.callout.body}</p>
        </Callout>
      )}
    </div>
  );
}

export function ArticleLayout({ guide }: { guide: Guide }) {
  const url =
    guide.slug === "weight-loss-after-40"
      ? `${site.url}/weight-loss-after-40`
      : `${site.url}/guides/${guide.slug}`;
  const imageUrl = guide.heroImage
    ? `${site.url}${guide.heroImage.src}`
    : `${site.url}${site.ogImage}`;
  const datePublished = guide.datePublished ?? `${guide.updated}-01-01`;
  const dateModified = guide.dateModified ?? `${guide.updated}-01-01`;

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      url,
      mainEntityOfPage: url,
      image: imageUrl,
      datePublished,
      dateModified,
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url
        },
        {
          "@type": "ListItem",
          position: 2,
          name: guide.slug === "weight-loss-after-40" ? "Start Here" : "Guides",
          item: guide.slug === "weight-loss-after-40" ? url : `${site.url}/guides`
        },
        ...(guide.slug === "weight-loss-after-40"
          ? []
          : [
              {
                "@type": "ListItem",
                position: 3,
                name: guide.title,
                item: url
              }
            ])
      ]
    }
  ];

  if (guide.medicalAbout && guide.medicalAbout.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      url,
      name: guide.title,
      description: guide.description,
      inLanguage: "en-US",
      lastReviewed: dateModified,
      reviewedBy: {
        "@type": "Organization",
        name: `${site.name} Editorial Team`
      },
      about: guide.medicalAbout.map((name) => ({
        "@type": "Thing",
        name
      })),
      audience: {
        "@type": "PeopleAudience",
        audienceType: "Women over 40",
        suggestedGender: "female",
        suggestedMinAge: 40
      }
    });
  }

  if (guide.faqs && guide.faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
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
          <section className="article-hero" aria-labelledby="article-title">
            <div className="container article-hero-inner">
              <RevealOnScroll>
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    guide.slug === "weight-loss-after-40"
                      ? { label: "Start Here" }
                      : { label: "Guides", href: "/guides" },
                    ...(guide.slug === "weight-loss-after-40" ? [] : [{ label: guide.title }])
                  ]}
                />
                <p className="article-kicker">{guide.category}</p>
                <h1 id="article-title">{guide.title}</h1>
                <p className="article-dek">{guide.description}</p>
                <div className="article-byline" aria-label="Article details">
                  <span>{site.name} Editorial Team</span>
                  <span>{guide.readTime}</span>
                  <span>Updated {guide.updated}</span>
                  <span>{guide.funnel}</span>
                </div>
              </RevealOnScroll>
            </div>
          </section>

          {guide.heroImage && (
            <div className="container article-hero-media">
              <ArticleFigure image={guide.heroImage} priority ratio="wide" />
            </div>
          )}

          <section className="section section-paper">
            <div className="container article-shell">
              <RevealOnScroll className="article-body">
                {guide.lead && (
                  <div className="article-lead">
                    <Prose paragraphs={guide.lead} />
                  </div>
                )}

                <Callout title="Medical note" tone="navy">
                  <p>
                    This guide is for education only and is not medical advice.
                    Talk with a qualified healthcare professional before changing
                    your diet, exercise, medication, or supplement routine.
                  </p>
                </Callout>

                {guide.keyTakeaways && guide.keyTakeaways.length > 0 && (
                  <div className="key-takeaways" aria-label="Key takeaways">
                    <p className="key-takeaways-label">Key takeaways</p>
                    <ul>
                      {guide.keyTakeaways.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {guide.sections.map((section) => (
                  <section className="article-section" key={section.heading}>
                    <h2>{section.heading}</h2>
                    <Prose paragraphs={section.body} />
                    {section.bullets && (
                      <ul className="prose-list">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {section.image && (
                      <ArticleFigure image={section.image} ratio="wide" />
                    )}
                    {section.callout && (
                      <Callout title={section.callout.title} tone={section.callout.tone ?? "sage"}>
                        <p>{section.callout.body}</p>
                      </Callout>
                    )}
                    {section.subsections?.map((sub) => (
                      <Subsection sub={sub} key={sub.heading} />
                    ))}
                  </section>
                ))}

                {guide.faqs && guide.faqs.length > 0 && (
                  <section className="article-section article-faq" aria-labelledby="faq-title">
                    <h2 id="faq-title">Frequently asked questions</h2>
                    <dl>
                      {guide.faqs.map((faq) => (
                        <div className="faq-item" key={faq.question}>
                          <dt>{faq.question}</dt>
                          <dd>{faq.answer}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                )}

                {guide.sources && guide.sources.length > 0 && (
                  <section className="article-section article-sources" aria-labelledby="sources-title">
                    <h2 id="sources-title">Sources</h2>
                    <p className="article-sources-note">
                      We reference reputable health organizations and peer-reviewed
                      research. Links open in a new tab.
                    </p>
                    <ul>
                      {guide.sources.map((source) => (
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

              <aside className="article-aside" aria-label="Related reading">
                <div className="article-aside-card">
                  <p className="aside-label">Related reading</p>
                  {guide.related.map((item) => (
                    <Link href={item.href} key={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="article-aside-card">
                  <p className="aside-label">Our standards</p>
                  <p>
                    Guides are written to be practical, non-shaming, and careful
                    about health claims.
                  </p>
                  <Link href="/editorial-policy">Read the editorial policy</Link>
                  <Link href="/medical-disclaimer">Read the medical disclaimer</Link>
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
