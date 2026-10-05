import type { JSX } from "react";
import { profile } from "@data/profile";
import { cn } from "@lib/cn";

/**
 * Shell prompt, e.g. `deepak@portfolio:~$`. Decorative, so hidden from screen readers.
 * @param path - Working directory shown after the colon. Defaults to `~`.
 * @param className - Extra classes, merged over the defaults.
 * @returns A decorative prompt `<span>`.
 */
export default function Prompt({
  path = "~",
  className,
}: {
  path?: string;
  className?: string;
}): JSX.Element {
  return (
    <span className={cn("shrink-0 select-none", className)} aria-hidden="true">
      <span className="text-primary">{profile.handle}@portfolio</span>
      <span className="text-muted">:</span>
      <span className="text-secondary">{path}</span>
      <span className="text-muted">$&nbsp;</span>
    </span>
  );
}

/**
 * Blinking block cursor.
 * @param className - Extra classes, e.g. a `bg-*` class to change its colour.
 * @returns A decorative `<span>`.
 */
export function Cursor({ className }: { className?: string }): JSX.Element {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-primary",
        className,
      )}
    />
  );
}
