import Link from "next/link";
import { reviewCriteria } from "@/content/homepage";

export function ReviewMethodSection() {
  return (
    <section className="section section-method" aria-labelledby="review-title">
      <div className="container method-panel">
        <div>
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
        </div>
        <div className="criteria-grid">
          {reviewCriteria.map((criterion) => (
            <div className="criterion-card" key={criterion}>
              <span />
              <strong>{criterion}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
