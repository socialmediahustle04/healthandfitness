import Link from "next/link";
import { pathwayCards } from "@/content/homepage";

export function ProblemPathwayGrid() {
  return (
    <section className="section section-paper" aria-labelledby="pathways-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="pathways-title">What changed after 40?</h2>
          <p>
            Weight loss can feel different when sleep, hormones, stress, muscle,
            and daily energy all start interacting.
          </p>
        </div>
        <div className="pathway-grid">
          {pathwayCards.map((card, index) => (
            <Link className="pathway-card" href={card.href} key={card.href}>
              <span className="pathway-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className="card-cta">Explore guide</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
