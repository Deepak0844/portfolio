import type { JSX } from "react";

// Components
import Card from "@components/ui/Card";
import Reveal from "@components/ui/Reveal";
import { TagList } from "@components/ui/Tag";

// Libs
import { cn } from "@lib/cn";

// Types
import type { Role } from "@typings/portfolio";

const dotBase =
  "absolute top-6 -left-[31px] size-3 rounded-full border-2 sm:-left-[47px]";
const dotState = {
  current: "border-primary bg-primary",
  past: "border-secondary bg-page",
};

interface TimelineItemProps {
  role: Role;
  /** Highlights the node for the most recent role */
  current?: boolean;
}

/**
 * One role on the experience timeline: a dot on the line plus a card with highlights and tech stack.
 * @param role - The role to show.
 * @param current - Highlights the dot and card for the most recent role.
 * @returns An `<li>` element.
 */
export default function TimelineItem({
  role,
  current = false,
}: TimelineItemProps): JSX.Element {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className={cn(dotBase, dotState[current ? "current" : "past"])}
      />
      <Reveal>
        <Card accent={current ? "primary" : "secondary"} interactive>
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="font-heading text-lg font-semibold text-default">
              {role.title}
            </h4>
            <span className="rounded-sm border border-tertiary-subtle px-2 text-xs text-tertiary">
              {role.period}
            </span>
          </div>
          <p className="mb-4 text-sm text-secondary">{role.product}</p>

          <ul className="mb-5 space-y-2.5 text-sm leading-relaxed text-muted">
            {role.highlights.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="shrink-0 text-primary" aria-hidden="true">
                  ▹
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <TagList
            items={role.stack}
            accent={current ? "primary" : "secondary"}
          />
        </Card>
      </Reveal>
    </li>
  );
}
