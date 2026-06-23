import Link from "next/link";
import { navLinks } from "@/content/homepage";

export function HomeHeader() {
  return (
    <header className="site-header">
      <div className="trust-strip">
        <p>Evidence-informed weight-loss guidance for women 40+</p>
        <nav aria-label="Trust links">
          <Link href="/how-we-review">How We Review</Link>
          <Link href="/advertising-disclosure">Advertising Disclosure</Link>
          <Link href="/medical-disclaimer">Medical Disclaimer</Link>
        </nav>
      </div>
      <div className="nav-shell">
        <Link className="brand-mark" href="/" aria-label="Quiet Proof Wellness home">
          <span className="brand-symbol">QP</span>
          <span>
            <strong>Quiet Proof</strong>
            <em>Wellness</em>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/weight-loss-after-40">
          Start Here
        </Link>
      </div>
    </header>
  );
}
