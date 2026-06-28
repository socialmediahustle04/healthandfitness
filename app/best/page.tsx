import type { Metadata } from "next";
import { IndexLayout } from "@/components/layout/IndexLayout";
import { bestPages } from "@/content/library";

export const metadata: Metadata = {
  title: "Best Picks and Comparisons",
  description:
    "Safety-first comparison pages for weight-loss programs and supplements for women over 40.",
  alternates: { canonical: "/best" }
};

export default function BestIndexPage() {
  return (
    <IndexLayout
      eyebrow="Comparisons"
      title="Compare options without the hard sell."
      intro="These pages explain how we evaluate programs and supplements before individual product reviews are added."
      breadcrumbLabel="Best Picks"
      cards={bestPages.map((page) => ({
        title: page.title,
        description: page.description,
        href: `/best/${page.slug}`,
        meta: "Comparison"
      }))}
    />
  );
}
