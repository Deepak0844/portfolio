import type { JSX } from "react";

// Types
import type { Stat } from "@typings/portfolio";

/**
 * Grid of headline numbers, e.g. years of experience.
 * @param stats - Value and label pairs to show.
 * @returns A `<dl>` grid of stats.
 */
export default function StatGrid({ stats }: { stats: Stat[] }): JSX.Element {
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-default bg-card p-3 text-center"
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-display text-3xl text-primary">{stat.value}</dd>
          <dd className="mt-1 text-2xs leading-tight text-muted uppercase">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
