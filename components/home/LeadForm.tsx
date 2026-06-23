"use client";

import { useState, type FormEvent } from "react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("email")) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="lead-form lead-form-sent" role="status">
        <h3>Check your inbox.</h3>
        <p>
          The 40+ Weight-Loss Reset Checklist is on its way. If it does not
          arrive in a few minutes, check your promotions folder.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} aria-label="Weight-loss reset checklist signup">
      <label>
        <span>Email address</span>
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label>
        <span>First name (optional)</span>
        <input type="text" name="firstName" placeholder="Optional" />
      </label>
      <button className="button button-primary lead-submit" type="submit">
        Send me the checklist
      </button>
      <p>No spam. Unsubscribe anytime.</p>
    </form>
  );
}
