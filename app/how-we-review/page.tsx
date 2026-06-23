import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { ContentSection } from "@/components/layout/ContentSection";
import { Callout } from "@/components/layout/Callout";

export const metadata: Metadata = {
  title: "How We Review Wellness Programs and Products",
  description:
    "How Quiet Proof Wellness evaluates weight-loss programs and supplements: research process, evidence, safety, pricing, refunds, and who a product may or may not suit.",
  alternates: { canonical: "/how-we-review" }
};

const reviewFactors = [
  {
    title: "Evidence quality",
    body: "We look for whether claims are supported by peer-reviewed research, established physiology, or reputable health authorities, and we flag when evidence is weak, anecdotal, or mostly marketing."
  },
  {
    title: "Ingredients and safety",
    body: "For supplements, we check ingredient lists, dosages relative to studied ranges, known interactions, and caution flags for common medications or conditions. We highlight anything that should prompt a conversation with a clinician."
  },
  {
    title: "Claims and realism",
    body: "We compare what a product or program promises against what it can realistically deliver. Exaggerated outcomes, rapid-weight-loss language, or cure framing reduce our confidence."
  },
  {
    title: "Pricing and refund policy",
    body: "We review total cost, subscription terms, hidden fees, and how clearly refunds and cancellations are explained. Easier exits earn more trust than locked-in commitments."
  },
  {
    title: "Customer experience signals",
    body: "We consider onboarding, support access, app usability, and patterns in public feedback, while remaining aware that reviews can be incentivized or manipulated."
  },
  {
    title: "Who it may or may not suit",
    body: "No program or supplement is right for everyone. We try to describe the person a product is built for and the person who should be cautious or look elsewhere."
  }
];

export default function HowWeReviewPage() {
  return (
    <TrustPageLayout
      eyebrow="Our standard"
      title="How we review programs and supplements."
      intro="Our reviews are built to help you compare options with a clearer eye, using a consistent set of questions about evidence, safety, cost, and real-world fit."
    >
      <ContentSection tone="paper" heading="Our research process" eyebrow="How we work">
        <p className="prose-lead">
          Every review starts with a question: does this product or program make
          a realistic, safe claim, and does it fit the lives of women over 40? We
          research the claim, the ingredients or structure, the pricing, and the
          experience before forming a conclusion.
        </p>
        <ol className="prose-list numbered">
          <li>
            <strong>Define the question.</strong> What is the product or program
            promising, and for whom?
          </li>
          <li>
            <strong>Review the evidence.</strong> We check published research,
            established physiology, and reputable health sources, and we note
            where evidence is strong, mixed, or absent.
          </li>
          <li>
            <strong>Check safety.</strong> We look for ingredients, dosages, or
            program features that may be risky for common midlife conditions or
            medications.
          </li>
          <li>
            <strong>Assess cost and experience.</strong> We review total cost,
            refund terms, support, and usability.
          </li>
          <li>
            <strong>Write the review.</strong> We summarize what we found,
            including what a product can and cannot realistically do, and who it
            may suit.
          </li>
        </ol>
      </ContentSection>

      <ContentSection tone="cream" heading="What we consider" eyebrow="The factors">
        <p>
          We apply the same factors across programs and supplements so you can
          compare unlike things on a shared framework. Not every factor applies
          to every product, but we are explicit when one does not.
        </p>
        <div className="factor-grid">
          {reviewFactors.map((factor) => (
            <article className="factor-card" key={factor.title}>
              <h3>{factor.title}</h3>
              <p>{factor.body}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection tone="paper" heading="Red flags we watch for" eyebrow="What lowers our confidence">
        <ul className="prose-list">
          <li>Rapid, dramatic weight-loss promises or &ldquo;quick fix&rdquo; framing.</li>
          <li>Ingredients with known interactions but no caution notes.</li>
          <li>Hidden subscription terms or refunds that are hard to find.</li>
          <li>Before-and-after imagery used to create urgency or shame.</li>
          <li>Claims that imply a product can replace medical care or medication.</li>
          <li>Reviews or testimonials that appear incentivized without disclosure.</li>
        </ul>
      </ContentSection>

      <ContentSection tone="cream" narrow heading="How affiliate compensation works here" eyebrow="Independence">
        <p>
          Some links in our reviews are affiliate links, which means we may earn a
          commission if you buy through them. That commission does not cost you
          extra, and it does not decide our rankings or conclusions. We recommend
          based on the factors above, and if a product that pays commission does
          not meet our standards, we say so.
        </p>
        <Callout tone="terracotta" title="In short">
          <p>
            Affiliate relationships may influence which products we choose to
            cover, but the goal is always useful guidance for the reader, never
            maximizing commissions at the cost of honesty.
          </p>
        </Callout>
        <p>
          For more on how we separate education from advertising, see our{" "}
          <Link href="/advertising-disclosure">advertising disclosure</Link> and{" "}
          <Link href="/editorial-policy">editorial policy</Link>.
        </p>
      </ContentSection>
    </TrustPageLayout>
  );
}
