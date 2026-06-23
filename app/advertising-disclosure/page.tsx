import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { ContentSection } from "@/components/layout/ContentSection";
import { Callout } from "@/components/layout/Callout";

export const metadata: Metadata = {
  title: "Advertising Disclosure",
  description:
    "How Quiet Proof Wellness handles affiliate links and advertising: commissions, cost to readers, independence of recommendations, and no guarantee of results.",
  alternates: { canonical: "/advertising-disclosure" }
};

export default function AdvertisingDisclosurePage() {
  return (
    <TrustPageLayout
      eyebrow="Advertising Disclosure"
      title="How affiliate links and advertising work here."
      intro="Transparency matters, especially when health content and commerce overlap. This page explains how this site earns money and how that does and does not influence what you read."
    >
      <ContentSection tone="paper" heading="We may earn commissions from links" eyebrow="The basics">
        <p className="prose-lead">
          Quiet Proof Wellness is reader-supported. Some links on this site are
          affiliate links, which means if you click them and make a purchase, we
          may receive a commission at no additional cost to you. These
          commissions help fund the research, writing, and maintenance of the
          site.
        </p>
        <p>
          You are never obligated to use our links. If you prefer, you can search
          for any product or program directly and reach the same destination
          without the affiliate relationship.
        </p>
      </ContentSection>

      <ContentSection tone="cream" heading="What affiliate relationships do and do not change" eyebrow="Independence">
        <ul className="prose-list">
          <li>
            <strong>What they may influence:</strong> which products and programs
            we choose to spend time researching and covering.
          </li>
          <li>
            <strong>What they do not influence:</strong> the conclusions we reach,
            the ratings we give, or whether we recommend something at all.
          </li>
        </ul>
        <p>
          If a product pays a commission but does not meet the standards in our{" "}
          <Link href="/how-we-review">review process</Link>, we do not recommend
          it. We would rather skip a commission than mislead a reader.
        </p>
        <Callout tone="navy" title="No extra cost to you">
          <p>
            Prices are set by the seller or retailer, not by us. Using an
            affiliate link does not change what you pay, and the commission comes
            from the seller&rsquo;s side of the transaction.
          </p>
        </Callout>
      </ContentSection>

      <ContentSection tone="paper" heading="Other advertising and partnerships" eyebrow="Beyond affiliate links">
        <p>
          From time to time, we may work with brands on sponsored content or
          placements. When we do, that content will be clearly labeled as
          sponsored or partner content, and it will be kept separate from our
          editorial guides and reviews. Sponsorship does not grant the sponsor
          approval over our independent reviews of their products.
        </p>
        <p>
          We do not accept advertising for products we would not consider
          reviewing under our normal standards.
        </p>
      </ContentSection>

      <ContentSection tone="cream" heading="Make your own decisions" eyebrow="Your judgment matters">
        <p>
          Our reviews and guides are a starting point, not a verdict. You know
          your body, your history, and your priorities better than any website
          does. We encourage you to weigh what you read here against other
          sources and your own judgment, and to talk with a healthcare
          professional before making changes.
        </p>
        <Callout tone="terracotta" title="No guarantee of results">
          <p>
            Nothing on this site guarantees a specific outcome. Weight loss,
            health, and wellness depend on many personal factors, and what works
            for one person may not work for another. See our{" "}
            <Link href="/medical-disclaimer">medical disclaimer</Link> for more.
          </p>
        </Callout>
      </ContentSection>

      <ContentSection tone="paper" narrow heading="Questions?" eyebrow="Get in touch">
        <p>
          If you have questions about how affiliate links work here, or about a
          specific recommendation, reach us through the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </ContentSection>
    </TrustPageLayout>
  );
}
