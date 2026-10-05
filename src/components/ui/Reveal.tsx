import type { JSX, ReactNode } from "react";
import { useIntersectionObserver } from "usehooks-ts";

// Libs
import { cn } from "@lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
}

/**
 * Fades and slides its children in when they scroll into view.
 * @param children - Content to reveal.
 * @param className - Extra classes for the wrapper.
 * @param delay - Stagger delay in ms before the animation starts. Defaults to `0`.
 * @returns A `<div>` wrapper that animates in.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps): JSX.Element {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.15,
    freezeOnceVisible: true,
  });
  return (
    <div
      ref={ref}
      data-visible={isIntersecting}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
