import type { JSX } from "react";

// Components
import { LinkButton } from "@components/ui/Button";
import { TagList } from "@components/ui/Tag";
import Window from "@components/ui/Window";

// Libs
import { accentClasses } from "@lib/accent";
import { cn } from "@lib/cn";

// Types
import type { Project } from "@typings/portfolio";

const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

/**
 * Project shown in a window frame with description, tech stack, clone command and a GitHub link.
 * @param project - The project to show.
 * @returns The project window.
 */
export default function ProjectCard({
  project,
}: {
  project: Project;
}): JSX.Element {
  const a = accentClasses[project.accent];
  return (
    <Window
      title={`~/projects/${toSlug(project.name)}`}
      className={cn(
        "h-full transition duration-300 hover:-translate-y-1",
        a.hoverBorder,
      )}
      bodyClassName="flex flex-col gap-4"
    >
      <div>
        <p className="mb-1 text-xs tracking-wider text-muted uppercase">
          {project.type}
        </p>
        <h3 className={cn("font-heading text-2xl font-bold", a.text)}>
          {project.name}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <TagList items={project.stack} accent={project.accent} />

      <div className="mt-auto space-y-4 pt-2">
        <code className="block rounded-md border border-default bg-page px-3 py-2 text-xs break-all text-muted">
          <span className={a.text}>$</span> git clone {project.repoUrl}.git
        </code>

        <LinkButton
          href={project.repoUrl}
          external
          variant="ghost"
          className="w-full sm:w-auto"
        >
          View on GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
        </LinkButton>
      </div>
    </Window>
  );
}
