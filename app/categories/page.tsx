import type { Metadata } from "next";
import { IndexLayout } from "@/components/layout/IndexLayout";
import { categoryHubs } from "@/content/library";

export const metadata: Metadata = {
  title: "Weight-Loss After 40 Topics",
  description:
    "Browse The Heal Beacon topic hubs for metabolism, hormones, sleep, stress, supplements, programs, and meal planning.",
  alternates: { canonical: "/categories" }
};

export default function CategoriesIndexPage() {
  return (
    <IndexLayout
      eyebrow="Topics"
      title="Choose the topic that matches your next decision."
      intro="Each hub collects related guides and comparison pages so the site grows as a connected editorial library."
      breadcrumbLabel="Topics"
      cards={categoryHubs.map((category) => ({
        title: category.title,
        description: category.description,
        href: `/categories/${category.slug}`,
        meta: "Topic hub"
      }))}
    />
  );
}
