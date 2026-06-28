import type { Metadata } from "next";
import { IndexLayout } from "@/components/layout/IndexLayout";
import { guides } from "@/content/library";

export const metadata: Metadata = {
  title: "Guides for Weight Loss After 40",
  description:
    "Evidence-informed guides on metabolism, menopause, sleep, cortisol, protein, supplements, and realistic weight loss after 40.",
  alternates: { canonical: "/guides" }
};

export default function GuidesIndexPage() {
  return (
    <IndexLayout
      eyebrow="Guides"
      title="Calm guides for the questions that come up after 40."
      intro="Start with the topic that feels most relevant, then use the related links to build a practical plan."
      breadcrumbLabel="Guides"
      cards={guides.map((guide) => ({
        title: guide.title,
        description: guide.description,
        href: `/guides/${guide.slug}`,
        meta: `${guide.category} · ${guide.readTime}`
      }))}
    />
  );
}
