import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface TypewriterOptions {
  typeMs?: number;
  deleteMs?: number;
  pauseMs?: number;
}

/**
 * Types each word, pauses, deletes it, then moves to the next one in a loop.
 * With reduced motion it shows the first word statically.
 */
export function useTypewriter(
  words: string[],
  { typeMs = 70, deleteMs = 35, pauseMs = 1600 }: TypewriterOptions = {},
): string {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const word = words[wordIndex % words.length] ?? "";

  useEffect(() => {
    if (reducedMotion || words.length === 0) return;

    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && length === word.length) delay = pauseMs;

    const id = window.setTimeout(() => {
      if (!deleting && length === word.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setLength((l) => l + (deleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(id);
  }, [
    deleting,
    length,
    word,
    words.length,
    reducedMotion,
    typeMs,
    deleteMs,
    pauseMs,
  ]);

  return reducedMotion ? (words[0] ?? "") : word.slice(0, length);
}
