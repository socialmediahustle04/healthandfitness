import { categoryCards, latestGuides } from "@/content/homepage";
import { site } from "@/lib/design-tokens";

const siteUrl = site.url;

export function HomepageJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: siteUrl,
      description: site.description
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${site.ogImage}`,
        width: 1200,
        height: 630
      },
      sameAs: []
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Featured weight-loss after 40 guides",
      itemListElement: [...categoryCards, ...latestGuides]
        .slice(0, 10)
        .map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: `${siteUrl}${item.href}`
        }))
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
