import type { ElementType, JSX } from "react";

// Libs
import { cn } from "@lib/cn";

interface GlitchTextProps {
  text: string;
  as?: ElementType;
  className?: string;
}

/**
 * Text with an RGB-split glitch effect (see `.glitch` in effects.css).
 * @param text - Text to render; also used for the two offset glitch copies.
 * @param as - Element or component to render as. Defaults to `span`.
 * @param className - Extra classes, merged over the defaults.
 * @returns The text element with the glitch effect.
 */
export default function GlitchText({
  text,
  as: Tag = "span",
  className,
}: GlitchTextProps): JSX.Element {
  return (
    <Tag className={cn("glitch", className)} data-text={text}>
      {text}
    </Tag>
  );
}
