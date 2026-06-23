import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

type ContentSectionProps = {
  tone?: "paper" | "cream";
  heading?: string;
  eyebrow?: string;
  children: ReactNode;
  narrow?: boolean;
};

export function ContentSection({
  tone = "paper",
  heading,
  eyebrow,
  children,
  narrow = false
}: ContentSectionProps) {
  return (
    <section className={`section section-${tone}`}>
      <div className="container">
        <RevealOnScroll className={narrow ? "prose prose-narrow" : "prose"}>
          {(eyebrow || heading) && (
            <header className="prose-header">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {heading && <h2>{heading}</h2>}
            </header>
          )}
          {children}
        </RevealOnScroll>
      </div>
    </section>
  );
}
