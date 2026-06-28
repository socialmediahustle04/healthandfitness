import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { ContentSection } from "@/components/layout/ContentSection";
import { Callout } from "@/components/layout/Callout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using The Heal Beacon, including educational content boundaries, affiliate links, and limitation of responsibility.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <TrustPageLayout
      eyebrow="Terms"
      title="Terms for using this site."
      intro="By using The Heal Beacon, you agree to use the content as general education and to make personal health decisions with qualified professional guidance."
    >
      <ContentSection tone="paper" heading="Educational content only">
        <p className="prose-lead">
          The Heal Beacon publishes general educational information about
          weight loss, wellness, programs, and supplements. The content is not
          medical advice and is not a substitute for care from a qualified
          healthcare professional.
        </p>
        <Callout tone="terracotta" title="Medical decisions">
          <p>
            Always speak with a qualified healthcare professional before changing
            diet, exercise, medication, supplement use, or treatment plans.
          </p>
        </Callout>
      </ContentSection>

      <ContentSection tone="cream" heading="Affiliate links and products">
        <p>
          Some pages may include affiliate links. If you purchase through those
          links, we may earn a commission at no additional cost to you. We do not
          guarantee any product, program, outcome, or result.
        </p>
        <p>
          Read our <Link href="/advertising-disclosure">advertising disclosure</Link>{" "}
          and <Link href="/how-we-review">review process</Link> for more detail.
        </p>
      </ContentSection>

      <ContentSection tone="paper" heading="Use of the site">
        <ul className="prose-list">
          <li>Do not use this site as emergency or personalized medical guidance.</li>
          <li>Do not copy, republish, or sell site content without permission.</li>
          <li>Do not submit unlawful, abusive, or misleading messages through forms.</li>
          <li>Understand that content may change as research, products, or policies change.</li>
        </ul>
      </ContentSection>

      <ContentSection tone="cream" heading="Questions">
        <p>
          Questions about these terms can be sent through the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </ContentSection>
    </TrustPageLayout>
  );
}
