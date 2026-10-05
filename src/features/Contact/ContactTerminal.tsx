import { useEffect, useRef, type KeyboardEvent, type JSX } from "react";

// Components
import Prompt from "@components/ui/Prompt";
import Window from "@components/ui/Window";

// Data
import { terminalCommands } from "@data/terminal";

// Hooks
import { useTerminal, type HistoryEntry } from "@hooks/useTerminal";

// Libs
import { cn } from "@lib/cn";
import type { OutputLine, OutputTone } from "@lib/terminal";

const toneClass: Record<OutputTone, string> = {
  default: "text-default",
  muted: "text-muted",
  success: "text-success",
  error: "text-danger",
  accent: "text-primary",
};

const welcome: HistoryEntry[] = [
  {
    id: 0,
    input: "",
    output: [
      { text: "Welcome to DR-OS interactive shell.", tone: "accent" },
      {
        text: "Type 'help' to see available commands, or click a suggestion below.",
        tone: "muted",
      },
    ],
  },
];

const suggestions = ["help", "whoami", "contact", "projects", "sudo hire-me"];

/**
 * One line of terminal output, coloured by its tone and rendered as a link when it has an `href`.
 * @param line - The output line to render.
 * @returns A `<p>` element.
 */
function Line({ line }: { line: OutputLine }): JSX.Element {
  const className = cn(
    "break-words whitespace-pre-wrap",
    toneClass[line.tone ?? "default"],
  );
  if (!line.href) return <p className={className}>{line.text}</p>;
  const external = line.href.startsWith("http");
  return (
    <p className={className}>
      <a
        href={line.href}
        className="underline-offset-4 hover:underline"
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {line.text}
      </a>
    </p>
  );
}

/**
 * Interactive shell where visitors type commands or click suggestions. Supports history (↑/↓) and Tab completion.
 * @returns The terminal window.
 */
export default function ContactTerminal(): JSX.Element {
  const {
    input,
    setInput,
    history,
    submit,
    run,
    recallPrevious,
    recallNext,
    complete,
  } = useTerminal(terminalCommands, { initial: welcome });
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const handlers: Record<string, () => void> = {
      Enter: submit,
      ArrowUp: recallPrevious,
      ArrowDown: recallNext,
      Tab: complete,
    };
    const handler = handlers[e.key];
    if (!handler) return;
    e.preventDefault();
    handler();
  };

  return (
    <Window title="contact.sh — interactive" bodyClassName="p-0">
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="h-80 space-y-2 overflow-y-auto p-5 text-sm"
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
      >
        {history.map((entry) => (
          <div key={entry.id} className="space-y-0.5">
            {entry.input && (
              <p>
                <Prompt path="~/contact" />
                <span className="text-default">{entry.input}</span>
              </p>
            )}
            {entry.output.map((line, i) => (
              <Line key={i} line={line} />
            ))}
          </div>
        ))}

        <form
          className="flex items-center"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <Prompt path="~/contact" />
          <label htmlFor="terminal-input" className="sr-only">
            Terminal command
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="type a command…"
            className="min-w-0 flex-1 bg-transparent text-default caret-primary outline-none placeholder:text-subtle"
          />
        </form>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-default px-5 py-3">
        {suggestions.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => run(cmd)}
            className="rounded-sm border border-default px-2 py-0.5 text-xs text-muted transition-colors hover:border-primary-strong hover:text-primary"
          >
            {cmd}
          </button>
        ))}
      </div>
    </Window>
  );
}
