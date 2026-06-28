"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/homepage";
import { site } from "@/lib/design-tokens";

export function HomeHeader() {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setCondensed(!entry.isIntersecting);
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" style={{ height: 1 }} />
      <header className={`site-header${condensed ? " is-condensed" : ""}`}>
        <div className="trust-strip">
          <p>Evidence-informed weight-loss guidance for women 40+</p>
          <nav aria-label="Trust links">
            <Link href="/how-we-review">How We Review</Link>
            <Link href="/advertising-disclosure">Advertising Disclosure</Link>
            <Link href="/medical-disclaimer">Medical Disclaimer</Link>
          </nav>
        </div>
        <div className="nav-shell">
          <Link className="brand-mark" href="/" aria-label={`${site.name} home`}>
            <span className="brand-symbol">{site.monogram}</span>
            <span>
              <strong>{site.name}</strong>
              <em>Midlife Wellness</em>
            </span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <Link className="nav-cta" href="/weight-loss-after-40">
              Start Here
            </Link>
            <button
              type="button"
              className="menu-button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span className="menu-bar" />
              <span className="menu-bar" />
              <span className="menu-bar" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`menu-overlay${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        onClick={() => setMenuOpen(false)}
      >
        <div className="menu-panel" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            className="menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
          <nav className="menu-nav" aria-label="Mobile main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="menu-nav menu-nav-trust" aria-label="Mobile trust links">
            <Link href="/how-we-review" className="menu-link-sub" onClick={() => setMenuOpen(false)}>How We Review</Link>
            <Link href="/advertising-disclosure" className="menu-link-sub" onClick={() => setMenuOpen(false)}>Advertising Disclosure</Link>
            <Link href="/medical-disclaimer" className="menu-link-sub" onClick={() => setMenuOpen(false)}>Medical Disclaimer</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
