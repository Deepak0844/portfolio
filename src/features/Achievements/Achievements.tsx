import type { JSX } from "react";

// Data
import { achievements } from "@data/achievements";

// Libs
import { accentClasses } from "@lib/accent";
import { cn } from "@lib/cn";

// Types
import type { Accent, Achievement } from "@typings/portfolio";

// Components
import Card from "@components/ui/Card";
import Reveal from "@components/ui/Reveal";
import Section from "@components/ui/Section";

const kindMeta: Record<
  Achievement["kind"],
  { label: string; icon: string; accent: Accent; cellClassName: string }
> = {
  award: {
    label: "award",
    icon: "★",
    accent: "tertiary",
    // Featured: wider on tablet, taller on desktop
    cellClassName: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
  },
  education: {
    label: "education",
    icon: "◆",
    accent: "secondary",
    cellClassName: "",
  },
  certification: {
    label: "certification",
    icon: "✔",
    accent: "primary",
    cellClassName: "",
  },
  language: {
    label: "languages",
    icon: "⌘",
    accent: "secondary",
    cellClassName: "",
  },
};

/**
 * Achievements & Education section: awards, education, certifications and languages as cards.
 * @returns The achievements `<section>`.
 */
export default function Achievements(): JSX.Element {
  return (
    <Section id="achievements" index="04" title="Achievements & Education">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => {
          const meta = kindMeta[item.kind];
          const a = accentClasses[meta.accent];
          return (
            <Reveal
              key={item.title}
              delay={i * 60}
              className={meta.cellClassName}
            >
              <Card accent={meta.accent} interactive className="h-full">
                <p
                  className={cn(
                    "mb-3 text-xs tracking-widest uppercase",
                    a.text,
                  )}
                >
                  <span aria-hidden="true">{meta.icon} </span>
                  {meta.label}
                  {item.period && (
                    <span className="text-muted"> · {item.period}</span>
                  )}
                </p>
                <h3 className="font-heading text-lg font-semibold text-default">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                {item.detail && (
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                )}
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
