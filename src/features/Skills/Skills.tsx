import type { JSX } from "react";

// Components
import Card from "@components/ui/Card";
import Reveal from "@components/ui/Reveal";
import Section from "@components/ui/Section";
import { TagList } from "@components/ui/Tag";

// Data
import { skillGroups } from "@data/skills";

// Libs
import { accentClasses } from "@lib/accent";
import { cn } from "@lib/cn";

/**
 * Tech stack section: skill groups shown as cards of tags.
 * @returns The skills `<section>`.
 */
export default function Skills(): JSX.Element {
  return (
    <Section
      id="skills"
      index="01"
      title="Tech Stack"
      subtitle="Tools and technologies I use to ship fast, accessible and maintainable products."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <Card accent={group.accent} interactive className="h-full">
              <h3
                className={cn(
                  "mb-4 font-heading text-sm font-semibold tracking-widest uppercase",
                  accentClasses[group.accent].text,
                )}
              >
                <span className="text-muted">&gt; </span>
                {group.category}
              </h3>
              <TagList items={group.items} accent={group.accent} />
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
