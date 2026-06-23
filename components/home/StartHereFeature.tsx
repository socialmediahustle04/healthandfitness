import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";

export function StartHereFeature() {
  return (
    <section className="section section-cream" aria-labelledby="start-title">
      <div className="container start-feature">
        <RevealOnScroll className="editorial-visual" as="figure">
          <div className="visual-frame visual-frame-large visual-frame-media">
            <Image
              src="/media/homepage/start-here-3x2.png"
              alt="A calm editorial scene with a journal, tea, and natural light, marking a gentle starting point for weight loss after 40."
              fill
              sizes="(max-width: 720px) 100vw, 45vw"
              className="feature-image"
              priority={false}
            />
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="feature-copy" delay={120}>
          <p className="eyebrow">Start here</p>
          <h2 id="start-title">
            Start here if weight loss suddenly feels harder.
          </h2>
          <p>
            A practical guide to the changes that can affect weight after 40,
            including metabolism, menopause, sleep, stress, nutrition, and
            realistic next steps.
          </p>
          <ul className="check-list" aria-label="Inside this guide">
            <li>Why weight loss changes</li>
            <li>What to focus on first</li>
            <li>What to avoid</li>
            <li>When to talk to a clinician</li>
          </ul>
          <div className="article-meta">
            <span>7-minute read</span>
            <span>Updated 2026</span>
            <span>Editorially reviewed</span>
          </div>
          <Link className="button button-primary" href="/weight-loss-after-40">
            Read the 40+ guide
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
