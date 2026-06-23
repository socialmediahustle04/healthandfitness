import Link from "next/link";
import { footerLinks } from "@/content/homepage";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand-mark footer-logo" href="/">
            <span className="brand-symbol">QP</span>
            <span>
              <strong>Quiet Proof</strong>
              <em>Wellness</em>
            </span>
          </Link>
          <p>
            This site provides educational wellness content and does not provide
            medical advice. Always speak with a qualified healthcare
            professional about personal medical decisions.
          </p>
        </div>
        <FooterColumn title="Explore" links={footerLinks.explore} />
        <FooterColumn title="Trust" links={footerLinks.trust} />
        <FooterColumn title="Legal" links={footerLinks.legal} />
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2>{title}</h2>
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
