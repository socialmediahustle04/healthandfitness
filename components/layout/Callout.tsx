import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
  tone?: "sage" | "terracotta" | "navy";
  title?: string;
};

export function Callout({ children, tone = "sage", title }: CalloutProps) {
  return (
    <aside className={`callout callout-${tone}`}>
      {title && <p className="callout-title">{title}</p>}
      <div className="callout-body">{children}</div>
    </aside>
  );
}
