"use client";

import { useState, type FormEvent } from "react";

const topics = [
  "Editorial question",
  "Correction",
  "Partnership",
  "Advertising",
  "General support"
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="contact-form contact-form-sent" role="status">
        <h3>Thank you for reaching out.</h3>
        <p>
          Your message has been noted. We read every submission and respond to
          editorial questions, corrections, and partnerships as we are able.
        </p>
        <button
          type="button"
          className="button button-secondary"
          onClick={() => setSent(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" autoComplete="name" />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
        />
      </label>
      <label>
        <span>Topic</span>
        <select name="topic" defaultValue={topics[0]}>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="How can we help?"
          required
        />
      </label>
      <button className="button button-primary" type="submit">
        Send message
      </button>
      <p>
        We do not provide medical advice through this form. For personal health
        questions, please speak with a qualified healthcare professional.
      </p>
    </form>
  );
}
