export function LeadMagnetSection() {
  return (
    <section className="section section-lead" aria-labelledby="lead-title">
      <div className="container lead-panel">
        <div className="lead-copy">
          <p className="eyebrow eyebrow-light">Free checklist</p>
          <h2 id="lead-title">Get the 40+ Weight-Loss Reset Checklist</h2>
          <p>
            A simple checklist to help you choose your next step without buying
            another random supplement.
          </p>
        </div>
        <form className="lead-form" aria-label="Weight-loss reset checklist signup">
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
        </form>
      </div>
    </section>
  );
}
