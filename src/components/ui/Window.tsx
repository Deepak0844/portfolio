import type { JSX, ReactNode } from "react";

// Libs
import { cn } from "@lib/cn";

interface WindowProps {
  title: string;
  children: ReactNode;
  /** Extra content on the right side of the title bar */
  actions?: ReactNode;
  className?: string;
  bodyClassName?: string;
}

/**
 * OS-style window frame with traffic-light buttons and a title bar.
 * @param title - Text shown in the title bar.
 * @param children - Window body content.
 * @param actions - Optional content on the right side of the title bar.
 * @param className - Extra classes for the frame.
 * @param bodyClassName - Extra classes for the body.
 * @returns The window frame.
 */
export default function Window({
  title,
  children,
  actions,
  className,
  bodyClassName,
}: WindowProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-default bg-card shadow-raised",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-default bg-raised px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-danger" />
          <span className="size-3 rounded-full bg-warning" />
          <span className="size-3 rounded-full bg-success" />
        </div>
        <p className="flex-1 truncate text-center text-xs text-muted">
          {title}
        </p>
        {actions ?? <span className="w-10.5" aria-hidden="true" />}
      </div>
      <div className={cn("flex-1 p-5", bodyClassName)}>{children}</div>
    </div>
  );
}
