import Link from "next/link";
import { HomeHeader } from "@/components/home/HomeHeader";
import { SiteFooter } from "@/components/home/SiteFooter";

export default function NotFound() {
  return (
    <>
      <HomeHeader />
      <main id="main-content">
        <section className="page-hero" aria-labelledby="not-found-title">
          <div className="container page-hero-inner">
            <p className="eyebrow">Page not found</p>
            <h1 id="not-found-title">This page is not available.</h1>
            <p className="page-hero-intro">
              The guide may have moved, or it may still be in editorial review.
              Start with the main 40+ guide or browse the topic hubs.
            </p>
            <div className="hero-actions not-found-actions">
              <Link className="button button-primary" href="/weight-loss-after-40">
                Start here
              </Link>
              <Link className="button button-secondary" href="/categories">
                Browse topics
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
