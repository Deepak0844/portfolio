import type { JSX } from "react";

// Components
import Reveal from "@components/ui/Reveal";
import Section from "@components/ui/Section";

// Data
import { experience } from "@data/experience";

import TimelineItem from "./TimelineItem";

/**
 * Experience section: a timeline of roles grouped by company.
 * @returns The experience `<section>`.
 */
export default function Experience(): JSX.Element {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      subtitle="Process log of the roles and products I've built."
    >
      {experience.map((company) => (
        <div key={company.company} className="mb-12 last:mb-0">
          <Reveal className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-heading text-xl font-bold text-secondary sm:text-2xl">
              {company.company}
            </h3>
            <p className="text-sm text-muted">
              {company.location} ·{" "}
              <span className="text-tertiary">{company.period}</span>
            </p>
          </Reveal>

          <ol className="relative space-y-10 border-l border-default pl-6 sm:pl-10">
            {company.roles.map((role, i) => (
              <TimelineItem
                key={`${role.title}-${role.period}`}
                role={role}
                current={i === 0}
              />
            ))}
          </ol>
        </div>
      ))}
    </Section>
  );
}
