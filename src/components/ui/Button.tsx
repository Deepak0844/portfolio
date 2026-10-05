import type { ComponentPropsWithoutRef, JSX } from "react";

// Libs
import { cn } from "@lib/cn";

type Variant = "primary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "border-primary-solid bg-primary-solid text-on-primary hover:border-primary-solid-hover hover:bg-primary-solid-hover",
  ghost:
    "border-secondary-subtle text-secondary hover:border-secondary hover:bg-secondary-soft",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors duration-200";

type ButtonProps = { variant?: Variant } & ComponentPropsWithoutRef<"button">;
type LinkButtonProps = {
  variant?: Variant;
  external?: boolean;
} & ComponentPropsWithoutRef<"a">;

/**
 * Button with the site's primary or ghost styling. Defaults to `type="button"` so it never submits a form by accident.
 * @param variant - Visual style: `primary` (filled) or `ghost` (outlined). Defaults to `primary`.
 * @param className - Extra classes, merged over the defaults.
 * @param type - Native button type. Defaults to `button`.
 * @param props - Any other native `<button>` attributes.
 * @returns A styled `<button>` element.
 */
export default function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}

/**
 * Anchor styled as a button.
 * @param variant - Visual style: `primary` (filled) or `ghost` (outlined). Defaults to `primary`.
 * @param external - Opens the link in a new tab with `rel="noopener noreferrer"`.
 * @param className - Extra classes, merged over the defaults.
 * @param props - Any other native `<a>` attributes, e.g. `href` or `download`.
 * @returns A styled `<a>` element.
 */
export function LinkButton({
  variant = "primary",
  external,
  className,
  ...props
}: LinkButtonProps): JSX.Element {
  return (
    <a
      className={cn(base, variants[variant], className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}
