import type { ComponentPropsWithoutRef, JSX } from "react";

// Libs
import { accentClasses } from "@lib/accent";
import { cn } from "@lib/cn";

// Type
import type { Accent } from "@typings/portfolio";

const cardBase =
  "relative rounded-lg border border-default bg-card p-5 shadow-card transition duration-300";
const cardHover = "hover:-translate-y-1 hover:shadow-raised";

interface CardProps extends ComponentPropsWithoutRef<"article"> {
  accent?: Accent;
  /** Adds a lift + accent border on hover */
  interactive?: boolean;
}

/**
 * Bordered surface for grouping content.
 * @param accent - Accent color of the hover border when `interactive`. Defaults to `primary`.
 * @param interactive - Lifts the card and highlights its border on hover.
 * @param className - Extra classes, merged over the defaults.
 * @param props - Any other native `<article>` attributes, including `children`.
 * @returns An `<article>` card.
 */
export default function Card({
  accent = "primary",
  interactive = false,
  className,
  ...props
}: CardProps): JSX.Element {
  const hoverClasses = interactive
    ? `${cardHover} ${accentClasses[accent].hoverBorder}`
    : "";
  return (
    <article className={cn(cardBase, hoverClasses, className)} {...props} />
  );
}
