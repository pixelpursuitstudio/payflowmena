import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={[
        "flex flex-col gap-sm8 rounded-lg border border-border-default bg-bg-primary p-xl32",
        className,
      ].join(" ")}
    >
      <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
      <div className="text-base text-text-secondary">{children}</div>
    </div>
  );
}
