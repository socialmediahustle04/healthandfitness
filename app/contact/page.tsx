import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { ContentSection } from "@/components/layout/ContentSection";
import { ContactForm } from "@/components/layout/ContactForm";
import { site } from "@/lib/design-tokens";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Heal Beacon for editorial questions, corrections, partnerships, advertising, or general support.",
  alternates: { canonical: "/contact" }
};

const contactTopics = [
  {
    title: "Editorial questions",
    body: "Questions about our guides, reviews, or the topics we cover."
  },
  {
    title: "Corrections",
    body: "Spotted an error or outdated claim? Let us know so we can fix it."
  },
  {
    title: "Partnerships",
    body: "Brand or creator collaborations that fit our standards."
  },
  {
    title: "Advertising",
    body: "Questions about affiliate links, disclosures, or sponsored content."
  },
  {
    title: "General support",
    body: "Anything else we can help you with."
  }
];

const supportEmail = site.supportEmail;

export default function ContactPage() {
  return (
    <TrustPageLayout
      eyebrow="Contact"
      title="We read every message."
      intro="Whether you have a question about a guide, a correction, or a partnership idea, this is the right place to reach us."
    >
      <ContentSection tone="paper" heading="Send us a message" eyebrow="Get in touch">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="prose-lead">
              The fastest way to reach us is the form on this page. We answer
              editorial questions, corrections, and partnership inquiries as we
              are able, and we welcome feedback even when we cannot reply to
              everything.
            </p>
            <ul className="contact-topics">
              {contactTopics.map((topic) => (
                <li key={topic.title}>
                  <strong>{topic.title}</strong>
                  <span>{topic.body}</span>
                </li>
              ))}
            </ul>
            <p className="contact-email">
              Prefer email? Write to{" "}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </ContentSection>

      <ContentSection tone="cream" narrow heading="A note on health questions" eyebrow="Before you write">
        <p>
          We cannot provide personal medical advice, diagnose conditions, or
          recommend specific treatments. If your message is about a health
          concern, please speak with a qualified healthcare professional who can
          consider your full history. You can read more in our{" "}
          <Link href="/medical-disclaimer">medical disclaimer</Link>.
        </p>
        <p>
          For corrections, please tell us which page is affected and what needs
          changing. We take corrections seriously and update content promptly
          under our <Link href="/editorial-policy">editorial policy</Link>.
        </p>
      </ContentSection>
    </TrustPageLayout>
  );
}
