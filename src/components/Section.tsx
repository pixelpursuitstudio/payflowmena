import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={["py-4xl", className].join(" ")}>
      <div className="mx-auto max-w-6xl px-lg">{children}</div>
    </section>
  );
}
