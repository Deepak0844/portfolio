import type { JSX } from "react";

// Data
import { profile } from "@data/profile";

const year = new Date().getFullYear();

/**
 * Site footer with the copyright line.
 * @returns The `<footer>` element.
 */
export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-default py-8">
      <p className="page-container text-center text-xs text-muted">
        © {year} {profile.name}. Built with React, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
