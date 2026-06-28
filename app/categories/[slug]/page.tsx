import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HomeHeader } from "@/components/home/HomeHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { categoryHubs, getCategory, getGuide } from "@/content/library";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryHubs.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/categories/${category.slug}` }
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const hubGuides = category.guides.map(getGuide).filter(Boolean);

  return (
    <>
      <HomeHeader />
      <main id="main-content">
        <section className="page-hero" aria-labelledby="category-title">
          <div className="container page-hero-inner">
            <RevealOnScroll>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Topics", href: "/categories" },
                  { label: category.title }
                ]}
              />
              <p className="eyebrow">Topic hub</p>
              <h1 id="category-title">{category.title}</h1>
              <p className="page-hero-intro">{category.intro}</p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="section section-paper">
          <div className="container hub-layout">
            <div className="hub-main">
              <RevealOnScroll>
                <h2>Start with these guides</h2>
                <div className="index-grid index-grid-tight">
                  {hubGuides.map((guide) => (
                    guide && (
                      <Link className="index-card" href={`/guides/${guide.slug}`} key={guide.slug}>
                        <span className="guide-category">{guide.category}</span>
                        <h3>{guide.title}</h3>
                        <p>{guide.description}</p>
                        <span className="card-cta">Read guide</span>
                      </Link>
                    )
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            <aside className="article-aside">
              <div className="article-aside-card">
                <p className="aside-label">Start here</p>
                <Link href="/weight-loss-after-40">Weight Loss After 40</Link>
                <Link href="/how-we-review">How We Review</Link>
                {category.commercialHref && (
                  <Link href={category.commercialHref}>Compare related options</Link>
                )}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
