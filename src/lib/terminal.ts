/**
 * Framework-agnostic terminal engine: parses input and dispatches to a
 * command registry. UI lives in features/Contact.
 */

export type OutputTone = "default" | "muted" | "success" | "error" | "accent";

export interface OutputLine {
  text: string;
  tone?: OutputTone;
  href?: string;
}

export interface CommandContext {
  openUrl: (url: string) => void;
}

export type CommandResult = OutputLine[] | { type: "clear" };

export interface TerminalCommand {
  name: string;
  description: string;
  aliases?: string[];
  /** Hidden commands work but are not listed by `help`. */
  hidden?: boolean;
  run: (args: string[], ctx: CommandContext) => CommandResult;
}

export interface ParsedInput {
  command: string;
  args: string[];
}

export function parseInput(raw: string): ParsedInput | null {
  const parts = raw.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return null;
  const [command, ...args] = parts;
  return { command: command.toLowerCase(), args };
}

export function findCommand(
  commands: TerminalCommand[],
  name: string,
): TerminalCommand | undefined {
  return commands.find((c) => c.name === name || c.aliases?.includes(name));
}

export function executeCommand(
  commands: TerminalCommand[],
  raw: string,
  ctx: CommandContext,
): CommandResult {
  const parsed = parseInput(raw);
  if (!parsed) return [];

  const command = findCommand(commands, parsed.command);
  if (!command) {
    return [
      { text: `command not found: ${parsed.command}`, tone: "error" },
      { text: "type 'help' to list available commands", tone: "muted" },
    ];
  }
  return command.run(parsed.args, ctx);
}

/** Tab-completion: returns the single matching command name, if any. */
export function autocomplete(
  commands: TerminalCommand[],
  partial: string,
): string | null {
  const needle = partial.trim().toLowerCase();
  if (!needle) return null;
  const matches = commands.filter(
    (c) => !c.hidden && c.name.startsWith(needle),
  );
  return matches.length === 1 ? matches[0].name : null;
}
