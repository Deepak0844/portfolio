import type { JSX } from "react";

// Components
import { LinkButton } from "@components/ui/Button";
import GlitchText from "@components/ui/GlitchText";
import Reveal from "@components/ui/Reveal";

// Data
import { profile } from "@data/profile";

// Sections
import HeroTerminal from "./HeroTerminal";
import StatGrid from "./StatGrid";

/**
 * Landing section with name, title, summary, call-to-action buttons, the intro terminal and key stats.
 * @returns The hero `<section>`.
 */
export default function Hero(): JSX.Element {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-svh items-center overflow-hidden pt-20 pb-16"
    >
      <div className="grid-backdrop absolute inset-0" aria-hidden="true" />

      <div className="page-container relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-success-subtle bg-success-soft px-3 py-1 text-xs text-success">
            <span
              className="size-1.5 animate-pulse rounded-full bg-success"
              aria-hidden="true"
            />
            {profile.status}
          </p>

          <h1 className="font-display text-display-sm tracking-wide text-default sm:text-display-md lg:text-display-lg">
            <GlitchText text={profile.name.toUpperCase()} />
          </h1>

          <p className="mt-4 font-heading text-lg text-secondary sm:text-xl">
            {profile.title} · React.js · Next.js · React Native
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#projects">view_projects()</LinkButton>
            <LinkButton href="#contact" variant="ghost">
              contact_me()
            </LinkButton>

            {profile.resumeUrl && (
              <LinkButton href={profile.resumeUrl} variant="ghost" external>
                resume.pdf
                <span className="sr-only"> (opens in a new tab)</span>
              </LinkButton>
            )}
          </div>
        </Reveal>

        <Reveal delay={150} className="space-y-6">
          <HeroTerminal />
          <StatGrid stats={profile.stats} />
        </Reveal>
      </div>
    </section>
  );
}
