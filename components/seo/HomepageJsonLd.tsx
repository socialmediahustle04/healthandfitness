import { categoryCards, latestGuides } from "@/content/homepage";

const siteUrl = "https://healthandfitness.com";

export function HomepageJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Quiet Proof Wellness",
      url: siteUrl,
      description:
        "Evidence-informed weight-loss guidance for women over 40."
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Quiet Proof Wellness",
      url: siteUrl,
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
