import type { JSX } from "react";

// Data
import { profile } from "@data/profile";

// Hooks
import { useTypewriter } from "@hooks/useTypewriter";

// Components
import Prompt, { Cursor } from "@components/ui/Prompt";
import Window from "@components/ui/Window";

/**
 * Terminal window that introduces the owner via `whoami`, role and location commands; the role line types itself out.
 * @returns The terminal window.
 */
export default function HeroTerminal(): JSX.Element {
  const role = useTypewriter(profile.roles);

  return (
    <Window
      title={`${profile.handle}@portfolio: ~`}
      bodyClassName="space-y-3 text-sm"
    >
      <p>
        <Prompt />
        <span className="text-default">whoami</span>
      </p>
      <p className="text-primary">{profile.name}</p>

      <p>
        <Prompt />
        <span className="text-default">cat role.txt</span>
      </p>
      <p
        className="min-h-[1.5em] text-tertiary"
        aria-label={profile.roles.join(", ")}
      >
        <span aria-hidden="true">
          &gt; {role}
          <Cursor className="bg-tertiary" />
        </span>
      </p>

      <p>
        <Prompt />
        <span className="text-default">cat location.txt</span>
      </p>
      <p className="text-secondary">{profile.location}</p>

      <p>
        <Prompt />
        <Cursor />
      </p>
    </Window>
  );
}
