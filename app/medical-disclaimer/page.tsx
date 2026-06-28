import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { ContentSection } from "@/components/layout/ContentSection";
import { Callout } from "@/components/layout/Callout";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "The Heal Beacon content is for educational purposes only and is not medical advice. Always consult a qualified healthcare professional before starting diets, supplements, or exercise.",
  alternates: { canonical: "/medical-disclaimer" }
};

export default function MedicalDisclaimerPage() {
  return (
    <TrustPageLayout
      eyebrow="Medical Disclaimer"
      title="This is education, not medical advice."
      intro="Please read this before acting on anything you find on this site. It explains what our content is, what it is not, and when to talk to a professional."
    >
      <ContentSection tone="paper" heading="For educational purposes only" eyebrow="The short version">
        <p className="prose-lead">
          All content on The Heal Beacon is provided for general information
          and educational purposes only. It is not medical advice, and it is not
          a substitute for care from a qualified healthcare professional.
        </p>
        <Callout tone="terracotta" title="Always talk to your clinician first">
          <p>
            Before starting any diet, supplement, exercise program, or
            weight-loss plan, speak with a qualified healthcare professional who
            knows your personal health history.
          </p>
        </Callout>
      </ContentSection>

      <ContentSection tone="cream" heading="What our content is and is not" eyebrow="The details">
        <h3>What this site is</h3>
        <ul className="prose-list">
          <li>General educational information about health and wellness topics.</li>
          <li>
            Explanations of concepts like metabolism, sleep, stress, and
            nutrition.
          </li>
          <li>
            Reviews and comparisons of programs and products based on publicly
            available information.
          </li>
        </ul>
        <h3>What this site is not</h3>
        <ul className="prose-list">
          <li>Medical advice, diagnosis, or treatment for any condition.</li>
          <li>A replacement for a relationship with a healthcare provider.</li>
          <li>
            Personalized guidance tailored to your medical history, medications,
            or needs.
          </li>
          <li>An endorsement that any product is safe or appropriate for you.</li>
        </ul>
      </ContentSection>

      <ContentSection tone="paper" heading="Who should be especially careful" eyebrow="Talk to a professional if you">
        <ul className="prose-list">
          <li>Have a medical condition such as diabetes, heart disease, or a thyroid disorder.</li>
          <li>Take prescription medications, including blood pressure or hormone therapy.</li>
          <li>Are pregnant, planning pregnancy, or breastfeeding.</li>
          <li>Are navigating perimenopause, menopause, or hormone-related concerns.</li>
          <li>Have a history of disordered eating or a complicated relationship with food.</li>
          <li>Are considering supplements that may interact with medications or conditions.</li>
        </ul>
        <p>
          This list is not exhaustive. When in doubt, ask a professional. It is
          always reasonable to pause and check before making a change.
        </p>
      </ContentSection>

      <ContentSection tone="cream" heading="No diagnosis, treatment, cure, or prevention claims" eyebrow="Our boundary">
        <p>
          Nothing on this site is intended to diagnose, treat, cure, or prevent
          any disease or medical condition. We do not make such claims, and we do
          not endorse products that do. Any mention of a condition or supplement
          is for educational context, not a recommendation that you use it for a
          specific condition.
        </p>
        <p>
          If you believe you have a medical problem, contact your healthcare
          provider or, in an emergency, your local emergency services.
        </p>
      </ContentSection>

      <ContentSection tone="paper" narrow heading="Rely on professionals, not pages" eyebrow="In summary">
        <p>
          We work hard to make our content accurate and useful, but no website can
          replace personalized medical care. Your healthcare professional is the
          right person to help you decide what is safe and appropriate for you.
        </p>
        <p>
          If you have questions about our content, reach us through the{" "}
          <Link href="/contact">contact page</Link>. For related policies, see our{" "}
          <Link href="/advertising-disclosure">advertising disclosure</Link> and{" "}
          <Link href="/editorial-policy">editorial policy</Link>.
        </p>
      </ContentSection>
    </TrustPageLayout>
  );
}
