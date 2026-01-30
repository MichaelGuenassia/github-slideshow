import type { HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg",
        className
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
