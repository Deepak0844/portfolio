import type { JSX } from "react";

// Components
import { LinkButton } from "@components/ui/Button";
import Card from "@components/ui/Card";
import Reveal from "@components/ui/Reveal";
import Section from "@components/ui/Section";

// Data
import { profile } from "@data/profile";

import ContactTerminal from "./ContactTerminal";

/**
 * Contact section with the interactive terminal and a card of email and social links.
 * @returns The contact `<section>`.
 */
export default function Contact(): JSX.Element {
  return (
    <Section
      id="contact"
      index="05"
      title="Get In Touch"
      subtitle="Open to frontend and React Native roles. Drop a message, or explore using the terminal."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <ContactTerminal />
        </Reveal>

        <Reveal delay={120}>
          <Card className="flex h-full flex-col gap-6">
            <div>
              <p className="mb-2 text-xs tracking-widest text-tertiary uppercase">
                email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-lg break-all text-primary hover:underline"
              >
                {profile.email}
              </a>
            </div>

            <ul className="space-y-3">
              {profile.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-md border border-default px-4 py-3 text-sm transition-colors hover:border-secondary-strong"
                  >
                    <span className="text-secondary">{link.label}</span>
                    <span className="truncate text-muted group-hover:text-default">
                      {link.display}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted">
              <span className="text-success">●</span> {profile.location}
            </p>

            <LinkButton href={`mailto:${profile.email}`} className="mt-auto">
              send_message()
            </LinkButton>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
