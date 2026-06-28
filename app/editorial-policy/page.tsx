import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { ContentSection } from "@/components/layout/ContentSection";
import { Callout } from "@/components/layout/Callout";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "The publishing standards behind The Heal Beacon: accuracy, clarity, responsible health language, regular review, separation of education and advertising, and corrections.",
  alternates: { canonical: "/editorial-policy" }
};

export default function EditorialPolicyPage() {
  return (
    <TrustPageLayout
      eyebrow="Editorial Policy"
      title="How we write and what we stand for."
      intro="These standards guide every guide and review published here. They exist so you can trust what you read, even when the topic is complicated."
    >
      <ContentSection tone="paper" heading="Accuracy" eyebrow="Standard 01">
        <p className="prose-lead">
          We aim to represent the current evidence honestly. That means
          distinguishing what is well-established from what is emerging, mixed,
          or uncertain, and avoiding overstatement. When the science does not
          support a confident claim, we say so instead of filling the gap with
          certainty.
        </p>
        <p>
          We prefer peer-reviewed research, established physiology, and guidance
          from recognized health authorities. Where we reference a specific
          claim, we keep our language proportional to the evidence behind it.
        </p>
      </ContentSection>

      <ContentSection tone="cream" heading="Clarity and responsible language" eyebrow="Standard 02">
        <p>
          Health writing should lower the barrier to understanding, not raise it.
          We write in plain language, explain terms when we introduce them, and
          structure content so the most useful points are easy to find.
        </p>
        <h3>Responsible health language</h3>
        <ul className="prose-list">
          <li>We do not promise rapid, dramatic, or guaranteed weight loss.</li>
          <li>We do not imply supplements or programs replace medical care.</li>
          <li>
            We avoid fear-based framing and language that blames the reader.
          </li>
          <li>
            We use words like &ldquo;may&rdquo; or &ldquo;can&rdquo; when
            evidence is conditional rather than presenting hypothesis as fact.
          </li>
          <li>
            We keep before-and-after imagery out of instructional content and
            never use it to create urgency or shame.
          </li>
        </ul>
      </ContentSection>

      <ContentSection tone="paper" heading="Review and update process" eyebrow="Standard 03">
        <p>
          Health guidance changes as research evolves. We periodically review
          published guides and reviews to keep them current, and we note the
          review date on content. When significant new evidence emerges, or when
          a product changes its formulation, pricing, or terms, we revisit the
          relevant page sooner.
        </p>
        <p>
          If we find that a page no longer reflects our best understanding, we
          update it or, where appropriate, remove outdated recommendations
          rather than leave them standing.
        </p>
      </ContentSection>

      <ContentSection tone="cream" heading="Separating education and advertising" eyebrow="Standard 04">
        <p>
          Educational guides and affiliate reviews serve different purposes, and
          we keep them visually and editorially distinct. Guides teach a concept
          or skill. Reviews evaluate a specific product or program and may
          contain affiliate links.
        </p>
        <ul className="prose-list">
          <li>
            Affiliate links and disclosures are labeled clearly within review
            content.
          </li>
          <li>
            Instructional guides do not bury product pitches inside the
            explanation.
          </li>
          <li>
            When a guide references a product, it is because it illustrates the
            topic, not because it is being sold.
          </li>
        </ul>
        <Callout tone="sage" title="The principle">
          <p>
            Education should feel like learning. Advertising should feel like a
            clearly labeled recommendation. You should always be able to tell
            which one you are reading.
          </p>
        </Callout>
      </ContentSection>

      <ContentSection tone="paper" heading="Corrections" eyebrow="Standard 05">
        <p>
          We get things wrong sometimes. When we do, we correct them promptly and
          transparently. If a fact, figure, or claim is inaccurate, we update the
          page and note what changed. If a reader spots an error, we welcome that
            {" "}
          feedback through our <Link href="/contact">contact page</Link>.
        </p>
        <p>
          For corrections that change a recommendation or a safety note, we
          prioritize the update and make the change visible rather than quietly
          editing it away.
        </p>
      </ContentSection>
    </TrustPageLayout>
  );
}
