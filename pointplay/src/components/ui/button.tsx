import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const baseStyles =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-indigo-500 text-white hover:bg-indigo-400",
  outline: "border border-slate-700 text-slate-100 hover:border-slate-500"
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof variants;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[baseStyles, variants[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof variants;
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={[baseStyles, variants[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
