import Link from "next/link";
import { commercialCards } from "@/content/homepage";

export function CommercialGateway() {
  return (
    <section className="section section-cream" aria-labelledby="commercial-title">
      <div className="container">
        <div className="commercial-heading">
          <div>
            <p className="eyebrow">When you are ready</p>
            <h2 id="commercial-title">
              Research-backed comparisons, without the hard sell.
            </h2>
          </div>
          <p className="affiliate-disclosure">
            We may earn a commission from some links. We only recommend products
            that pass our editorial checks.
          </p>
        </div>
        <div className="commercial-grid">
          {commercialCards.map((card, index) => (
            <Link className="commercial-card" href={card.href} key={card.href}>
              <div className="commercial-art" aria-hidden="true">
                <span className="screen-panel" />
                <span className="product-shape" />
                <span className="mini-card mini-card-one" />
                <span className="mini-card mini-card-two" />
              </div>
              <div className="commercial-content">
                <span className="card-badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="button button-secondary">
                  {card.cta}
                </span>
              </div>
              <span className="commercial-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
