import Image from "next/image";
import Link from "next/link";
import { categoryCards } from "@/content/homepage";
import { RevealOnScroll } from "./RevealOnScroll";

export function CategoryHubGrid() {
  return (
    <section className="section section-paper" aria-labelledby="categories-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="categories-title">Choose the path that fits where you are.</h2>
          <p>
            Every guide is built to help you understand the decision before you
            commit to a program, supplement, or routine.
          </p>
        </div>
        <div className="category-grid">
          {categoryCards.map((card, index) => (
            <RevealOnScroll as="div" key={card.href} delay={(index % 3) * 90}>
              <Link
                className={`category-card tone-${card.tone}`}
                href={card.href}
              >
                <div className="category-art">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    className="category-image"
                  />
                </div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="card-cta">Explore</span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
