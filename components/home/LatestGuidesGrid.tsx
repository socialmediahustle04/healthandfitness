import Link from "next/link";
import { latestGuides } from "@/content/homepage";

export function LatestGuidesGrid() {
  return (
    <section className="section section-paper" aria-labelledby="latest-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="latest-title">Latest evidence-informed guides</h2>
          <p>
            Build your foundation first, then compare programs and supplements
            with a clearer eye.
          </p>
        </div>
        <div className="latest-grid">
          {latestGuides.map((guide, index) => (
            <Link
              className={index === 0 ? "latest-card latest-card-featured" : "latest-card"}
              href={guide.href}
              key={guide.href}
            >
              <span className="guide-category">{guide.category}</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <span className="guide-meta">{guide.readTime} • Updated 2026</span>
              <span className="card-cta">Read guide</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
