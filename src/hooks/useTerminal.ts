import { useCallback, useRef, useState } from "react";

// Libs
import {
  autocomplete,
  executeCommand,
  type CommandContext,
  type OutputLine,
  type TerminalCommand,
} from "@lib/terminal";

export interface HistoryEntry {
  id: number;
  input: string;
  output: OutputLine[];
}

const defaultContext: CommandContext = {
  openUrl: (url) => window.open(url, "_blank", "noopener,noreferrer"),
};

/**
 * State for an interactive terminal: input value, rendered history,
 * ↑/↓ command recall and Tab completion.
 */
export function useTerminal(
  commands: TerminalCommand[],
  {
    initial = [],
    context = defaultContext,
  }: { initial?: HistoryEntry[]; context?: CommandContext } = {},
) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>(initial);
  const nextId = useRef(initial.length);
  const recall = useRef<string[]>([]);
  const recallIndex = useRef(-1);

  const recallPrevious = useCallback(() => {
    const next = Math.min(recallIndex.current + 1, recall.current.length - 1);
    if (next < 0) return;
    recallIndex.current = next;
    setInput(recall.current[next]);
  }, []);

  const recallNext = useCallback(() => {
    const next = recallIndex.current - 1;
    recallIndex.current = Math.max(next, -1);
    setInput(next < 0 ? "" : recall.current[next]);
  }, []);

  const complete = useCallback(() => {
    const match = autocomplete(commands, input);
    if (match) setInput(match);
  }, [commands, input]);

  /** Execute a command and append it to the history. */
  const run = useCallback(
    (raw: string) => {
      const result = executeCommand(commands, raw, context);
      if ("type" in result) {
        setHistory([]);
        return;
      }
      setHistory((h) => [
        ...h,
        { id: nextId.current++, input: raw, output: result },
      ]);
    },
    [commands, context],
  );

  const submit = useCallback(() => {
    if (input.trim()) recall.current = [input, ...recall.current].slice(0, 50);
    recallIndex.current = -1;
    setInput("");
    run(input);
  }, [input, run]);

  return {
    input,
    setInput,
    history,
    submit,
    run,
    recallPrevious,
    recallNext,
    complete,
  };
}
