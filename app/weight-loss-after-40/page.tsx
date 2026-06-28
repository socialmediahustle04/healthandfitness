import type { Metadata } from "next";
import { ArticleLayout } from "@/components/layout/ArticleLayout";
import { pillarGuide } from "@/content/library";

export const metadata: Metadata = {
  title: pillarGuide.title,
  description: pillarGuide.description,
  alternates: { canonical: "/weight-loss-after-40" }
};

export default function WeightLossAfter40Page() {
  return <ArticleLayout guide={pillarGuide} />;
}
