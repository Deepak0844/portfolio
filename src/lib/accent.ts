import type { Accent } from "@typings/portfolio";

/**
 * Single mapping from an accent name to its Tailwind classes. Components pick
 * the keys they need instead of hard-coding colours.
 */
export const accentClasses: Record<
  Accent,
  { text: string; border: string; bg: string; hoverBorder: string }
> = {
  primary: {
    text: "text-primary",
    border: "border-primary-subtle",
    bg: "bg-primary-soft",
    hoverBorder: "hover:border-primary-strong",
  },
  secondary: {
    text: "text-secondary",
    border: "border-secondary-subtle",
    bg: "bg-secondary-soft",
    hoverBorder: "hover:border-secondary-strong",
  },
  tertiary: {
    text: "text-tertiary",
    border: "border-tertiary-subtle",
    bg: "bg-tertiary-soft",
    hoverBorder: "hover:border-tertiary-strong",
  },
};
