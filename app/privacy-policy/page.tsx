import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { ContentSection } from "@/components/layout/ContentSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Heal Beacon handles personal information, email submissions, analytics, affiliate links, and privacy choices.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <TrustPageLayout
      eyebrow="Privacy Policy"
      title="How we handle information."
      intro="This policy explains what information may be collected when you use The Heal Beacon and how we aim to handle it responsibly."
    >
      <ContentSection tone="paper" heading="Information you choose to share">
        <p className="prose-lead">
          You may choose to share information through forms, email links, or
          future newsletter signups. That information may include your name,
          email address, message topic, and anything you include in a message.
        </p>
        <p>
          Please do not send sensitive medical information through this website.
          We cannot provide personal medical advice, and messages are not a
          secure medical communication channel.
        </p>
      </ContentSection>

      <ContentSection tone="cream" heading="How information may be used">
        <ul className="prose-list">
          <li>To respond to editorial questions, corrections, or partnership messages.</li>
          <li>To improve site content, navigation, and reader experience.</li>
          <li>To send emails only when you have asked to receive them.</li>
          <li>To maintain site security and prevent misuse.</li>
        </ul>
      </ContentSection>

      <ContentSection tone="paper" heading="Analytics, cookies, and affiliate links">
        <p>
          This site may use privacy-conscious analytics in the future to
          understand which pages are useful. Affiliate links may use tracking
          parameters so sellers can attribute a commission if you purchase after
          clicking a link.
        </p>
        <p>
          Affiliate tracking does not change your price. You can read more in
          our <Link href="/advertising-disclosure">advertising disclosure</Link>.
        </p>
      </ContentSection>

      <ContentSection tone="cream" heading="Your choices">
        <p>
          You can choose not to submit forms, not to click affiliate links, and
          not to subscribe to emails. If email delivery is added, every marketing
          email should include an unsubscribe option.
        </p>
        <p>
          For privacy questions, use the <Link href="/contact">contact page</Link>.
        </p>
      </ContentSection>
    </TrustPageLayout>
  );
}
