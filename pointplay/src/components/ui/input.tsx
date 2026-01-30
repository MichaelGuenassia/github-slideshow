import type { ComponentPropsWithoutRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input">;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={[
        "h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        className
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
