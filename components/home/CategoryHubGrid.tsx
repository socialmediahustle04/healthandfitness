import Link from "next/link";
import { categoryCards } from "@/content/homepage";

export function CategoryHubGrid() {
  return (
    <section className="section section-paper" aria-labelledby="categories-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Find your next step</p>
          <h2 id="categories-title">Choose the path that fits where you are.</h2>
          <p>
            Every guide is built to help you understand the decision before you
            commit to a program, supplement, or routine.
          </p>
        </div>
        <div className="category-grid">
          {categoryCards.map((card) => (
            <Link className={`category-card tone-${card.tone}`} href={card.href} key={card.href}>
              <div className="category-art" aria-hidden="true">
                <span />
              </div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
