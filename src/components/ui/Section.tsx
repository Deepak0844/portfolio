import type { JSX, ReactNode } from "react";

// Libs
import { cn } from "@lib/cn";

import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  /** Two-digit index shown before the title, e.g. "02" */
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Standard page section: anchor id, numbered heading, optional subtitle and reveal animation.
 * @param id - Section id, used as the nav anchor and in the label above the heading.
 * @param index - Two-digit number shown before the id, e.g. `"02"`.
 * @param title - Heading text.
 * @param subtitle - Optional line shown under the heading.
 * @param children - Section content.
 * @param className - Extra classes for the `<section>`.
 * @returns A labelled `<section>` element.
 */
export default function Section({
  id,
  index,
  title,
  subtitle,
  children,
  className,
}: SectionProps): JSX.Element {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-20 sm:py-28", className)}
    >
      <div className="page-container">
        <Reveal className="mb-12">
          <p className="mb-2 text-sm text-primary">
            <span className="text-muted">// </span>
            {index}. {id}
          </p>
          <h2
            id={headingId}
            className="font-heading text-3xl font-bold tracking-wide text-default uppercase sm:text-4xl"
          >
            {title}
          </h2>
          {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
          <div className="mt-5 h-px w-24 bg-linear-to-r from-primary to-transparent" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
