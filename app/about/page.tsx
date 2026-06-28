import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { ContentSection } from "@/components/layout/ContentSection";
import { Callout } from "@/components/layout/Callout";

export const metadata: Metadata = {
  title: "About | Weight Loss After 40",
  description:
    "The Heal Beacon helps women over 40 understand weight loss, metabolism, sleep, stress, supplements, and wellness programs with calm, evidence-informed guidance.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <TrustPageLayout
      eyebrow="About"
      title="A calmer way to think about weight loss after 40."
      intro="The Heal Beacon is an editorial resource for women who want clear, practical, evidence-informed guidance through the changes that make midlife weight management feel different."
    >
      <ContentSection tone="paper" heading="What this site is" eyebrow="Our purpose">
        <p className="prose-lead">
          Weight loss after 40 is rarely just about eating less and moving more.
          Sleep, hormones, stress, muscle, and daily energy all start interacting
          in new ways, and the advice that worked in your thirties can feel less
          predictable. The Heal Beacon exists to make that picture easier to
          understand without fear, pressure, or quick-fix promises.
        </p>
        <p>
          We write for women who want to understand the &ldquo;why&rdquo; before
          they commit to a program, supplement, or routine. That means breaking
          down metabolism, menopause, cortisol, sleep, protein, and nutrition in
          plain language, then reviewing programs and products by how well they
          actually fit real life.
        </p>
        <p>
          Our goal is education first. We want you to leave each guide with a
          clearer question, a safer next step, or a more confident decision,
          not a sense of urgency to buy something.
        </p>
      </ContentSection>

      <ContentSection tone="cream" heading="Who we help" eyebrow="Our readers">
        <p>
          Most of our readers are women in their forties, fifties, and beyond who
          have noticed that weight management feels harder than it used to. Some
          are navigating perimenopause or menopause. Some are managing stress,
          poor sleep, or a sedentary stretch of life. Many have tried plans that
          worked temporarily and are looking for something more sustainable.
        </p>
        <p>
          You do not need a diagnosis, a goal weight, or a background in science
          to read here. You only need curiosity about what is actually happening
          in your body and a preference for calm, honest information.
        </p>
        <h3>What you can expect</h3>
        <ul className="prose-list">
          <li>
            Clear explanations of midlife biology without fear-based marketing.
          </li>
          <li>
            Practical guides on sleep, stress, protein, metabolism, and
            supplements.
          </li>
          <li>
            Reviews of programs and products judged by fit, cost, safety, and
            sustainability, not hype.
          </li>
          <li>
            A clear line between educational content and affiliate
            recommendations.
          </li>
        </ul>
      </ContentSection>

      <ContentSection tone="paper" heading="How we approach health content" eyebrow="Our stance">
        <p>
          We believe responsible health content should reduce confusion, not add
          to it. That means we avoid exaggerated claims, before-and-after
          pressure, and language that implies supplements or programs can replace
          medical care. We also believe in being honest about uncertainty: some
          questions do not have tidy answers, and we say so.
        </p>
        <Callout tone="navy" title="An important boundary">
          <p>
            The Heal Beacon is an educational publisher, not a medical
            provider. We do not diagnose, treat, or prescribe. Nothing on this
            site is a substitute for advice from a qualified healthcare
            professional who knows your history. If you have a medical condition,
            take medication, or are navigating menopause or pregnancy concerns,
            please talk with your clinician before making changes.
          </p>
        </Callout>
      </ContentSection>

      <ContentSection tone="cream" heading="How we stay independent" eyebrow="Transparency">
        <p>
          This site earns affiliate commissions from some of the links in our
          program and supplement reviews. Those commissions help fund the
          research and writing, and they never cost you extra. They also do not
          decide our conclusions. If a product does not meet our standards, we
          say so regardless of whether a commission is available.
        </p>
        <p>
          You can read the full details in our{" "}
          <Link href="/advertising-disclosure">advertising disclosure</Link> and{" "}
          <Link href="/editorial-policy">editorial policy</Link>, and see how we
          evaluate products in our{" "}
          <Link href="/how-we-review">review process</Link>.
        </p>
      </ContentSection>
    </TrustPageLayout>
  );
}
