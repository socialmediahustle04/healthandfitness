import Image from "next/image";
import { RevealOnScroll } from "./RevealOnScroll";

export function LeadMagnetSection() {
  return (
    <section className="section section-lead" aria-labelledby="lead-title">
      <div className="container lead-panel">
        <RevealOnScroll className="lead-visual" as="figure">
          <Image
            src="/media/homepage/meal-plan-lead-magnet-4x5.png"
            alt="A simple protein-forward meal plan laid out with fresh ingredients, offered as a free 40+ weight-loss reset checklist."
            fill
            sizes="(max-width: 960px) 100vw, 360px"
            className="lead-image"
          />
        </RevealOnScroll>
        <div className="lead-body">
          <RevealOnScroll className="lead-copy">
            <p className="eyebrow eyebrow-light">Free checklist</p>
            <h2 id="lead-title">Get the 40+ Weight-Loss Reset Checklist</h2>
            <p>
              A simple checklist to help you choose your next step without buying
              another random supplement.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="lead-form" delay={120} aria-label="Weight-loss reset checklist signup">
            <label>
              <span>Email address</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              <span>First name</span>
              <input type="text" name="firstName" placeholder="Optional" />
            </label>
            <button className="button button-primary" type="submit">
              Send me the checklist
            </button>
            <p>No spam. Unsubscribe anytime.</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
