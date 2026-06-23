import Link from "next/link";

export function StartHereFeature() {
  return (
    <section className="section section-cream" aria-labelledby="start-title">
      <div className="container start-feature">
        <div className="editorial-visual">
          <div className="visual-frame visual-frame-large">
            <div className="still-life-card">
              <span className="steam" />
              <span className="cup" />
              <span className="journal" />
              <span className="leaf leaf-one" />
              <span className="leaf leaf-two" />
            </div>
          </div>
        </div>
        <div className="feature-copy">
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
        </div>
      </div>
    </section>
  );
}
