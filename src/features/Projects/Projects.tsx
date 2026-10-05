import type { JSX } from "react";

// Components
import Reveal from "@components/ui/Reveal";
import Section from "@components/ui/Section";

// Data
import { profile } from "@data/profile";
import { projects } from "@data/projects";

import ProjectCard from "./ProjectCard";

const github = profile.links.find((l) => l.label === "GitHub");

/**
 * Projects section: a grid of project cards plus a link to more on GitHub.
 * @returns The projects `<section>`.
 */
export default function Projects(): JSX.Element {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      subtitle="Things I build outside of work. Source code is on GitHub."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {github && (
        <Reveal className="mt-10 text-center text-sm">
          <a
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-primary"
          >
            <span className="text-primary">&gt;</span> more on{" "}
            <span className="text-secondary underline-offset-4 hover:underline">
              {github.display}
            </span>{" "}
            ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Reveal>
      )}
    </Section>
  );
}
