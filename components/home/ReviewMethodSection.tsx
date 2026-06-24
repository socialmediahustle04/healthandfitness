import Image from "next/image";
import Link from "next/link";
import { reviewCriteria } from "@/content/homepage";
import { RevealOnScroll } from "./RevealOnScroll";

export function ReviewMethodSection() {
  return (
    <section className="section section-method" aria-labelledby="review-title">
      <div className="container method-panel">
        <RevealOnScroll className="method-intro">
          <figure className="method-figure">
            <Image
              src="/media/homepage/how-we-review-wellness-programs-framework.webp"
              alt="Editorial review framework board explaining how wellness programs and supplements are evaluated."
              fill
              sizes="(max-width: 720px) 100vw, 46vw"
              className="method-image"
            />
          </figure>
          <p className="eyebrow eyebrow-light">Our standard</p>
          <h2 id="review-title">How we review programs and supplements</h2>
          <p>
            We look for realistic claims, transparent pricing, safety notes,
            evidence quality, and whether the product actually fits women over
            40.
          </p>
          <p className="disclosure-note">
            Some links may earn us a commission, but that does not change our
            editorial standards.
          </p>
          <Link className="button button-light" href="/how-we-review">
            See our review process
          </Link>
        </RevealOnScroll>
        <RevealOnScroll className="method-aside" delay={120}>
          <p className="method-aside-label">What we evaluate</p>
          <div className="criteria-grid">
            {reviewCriteria.map((criterion) => (
              <div className="criterion-card" key={criterion}>
                <span className="criterion-dot" />
                <strong>{criterion}</strong>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
