import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="homepage-hero-title">
      <div className="hero-media" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-wellness-poster.jpg"
        >
          <source src="/media/hero-wellness.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="hero-content container">
        <div className="hero-copy">
          <p className="eyebrow">Quiet Proof Wellness</p>
          <h1 id="homepage-hero-title">
            Weight loss after 40, without the panic.
          </h1>
          <p className="hero-subtitle">
            Clear, evidence-informed guides on metabolism, hormones, sleep,
            stress, supplements, and realistic programs for women who want a
            safer way forward.
          </p>
          <p className="hero-proof">
            Editorially reviewed • Affiliate links clearly disclosed • Updated
            regularly
          </p>
          <div className="hero-actions" aria-label="Hero calls to action">
            <Link className="button button-primary" href="/weight-loss-after-40">
              Start with the 40+ guide
            </Link>
            <Link
              className="button button-secondary"
              href="/best/best-weight-loss-programs-for-women-over-40"
            >
              Compare weight-loss programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
