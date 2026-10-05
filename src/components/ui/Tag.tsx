import type { JSX, ReactNode } from "react";

// Libs
import { accentClasses } from "@lib/accent";
import { cn } from "@lib/cn";

// Types
import type { Accent } from "@typings/portfolio";

interface TagProps {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}

/**
 * Small bordered chip for skills and tech stacks.
 * @param children - Tag text.
 * @param accent - Accent colour. Defaults to `primary`.
 * @param className - Extra classes, merged over the defaults.
 * @returns A `<span>` chip.
 */
export default function Tag({
  children,
  accent = "primary",
  className,
}: TagProps): JSX.Element {
  const a = accentClasses[accent];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-xs leading-5",
        a.text,
        a.border,
        a.bg,
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * A wrapping list of tags.
 * @param items - Labels to render, one tag each.
 * @param accent - Accent colour applied to every tag.
 * @param className - Extra classes for the list.
 * @returns A `<ul>` of tags.
 */
export function TagList({
  items,
  accent,
  className,
}: {
  items: string[];
  accent?: Accent;
  className?: string;
}): JSX.Element {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag accent={accent}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
