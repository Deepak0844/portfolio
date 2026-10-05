import { useState, type JSX } from "react";

// Hooks
import { useActiveSection } from "@hooks/useActiveSection";
import { useClock } from "@hooks/useClock";

// Components
import Prompt from "@components/ui/Prompt";

// Data
import { navItems } from "@data/navigation";

const sectionIds = navItems.map((n) => n.id);

const navLinkBase = "block rounded-md px-3 py-1.5 text-sm transition-colors";
const navLinkState = {
  active: "bg-primary-soft text-primary",
  idle: "text-muted hover:text-secondary",
};

const timeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
const dateFormat = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "2-digit",
  month: "short",
});

/**
 * Live date and time, shown in the navbar from medium screens up.
 * @returns A `<time>` element that updates every second.
 */
function Clock(): JSX.Element {
  const now = useClock();
  return (
    <time
      dateTime={now.toISOString()}
      className="hidden text-xs text-muted tabular-nums md:block"
      aria-label="Current time"
    >
      <span className="text-tertiary">{dateFormat.format(now)}</span>{" "}
      <span className="text-default">{timeFormat.format(now)}</span>
    </time>
  );
}

/**
 * Link for each page section, highlighting the one currently in view.
 * @param active - Id of the section currently in view.
 * @param onNavigate - Called after a link is clicked; used to close the mobile menu.
 * @returns The `<li>` links as a fragment.
 */
function NavLinks({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate?: () => void;
}): JSX.Element {
  return (
    <>
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "location" : undefined}
              className={`${navLinkBase} ${navLinkState[isActive ? "active" : "idle"]}`}
            >
              <span className="text-muted">./</span>
              {item.label}
            </a>
          </li>
        );
      })}
    </>
  );
}

/**
 * Fixed top bar with the prompt logo, section links, live clock and mobile menu toggle.
 * @returns The `<header>` element.
 */
export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-default bg-overlay backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="page-container flex h-14 items-center justify-between gap-4"
      >
        <a
          href="#home"
          className="flex items-center text-sm"
          aria-label="Back to top"
        >
          <span
            className="mr-2 size-2 animate-pulse rounded-full bg-success"
            aria-hidden="true"
          />
          <Prompt />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          <NavLinks active={active} />
        </ul>

        <div className="flex items-center gap-3">
          <Clock />
          <button
            type="button"
            className="rounded-md border border-default px-2.5 py-1 text-sm text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "[x] close" : "[≡] menu"}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="space-y-1 border-t border-default bg-overlay px-4 py-3 lg:hidden"
        >
          <NavLinks active={active} onNavigate={() => setOpen(false)} />
        </ul>
      )}
    </header>
  );
}
