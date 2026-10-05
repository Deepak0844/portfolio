// Libs
import type { OutputLine, TerminalCommand } from "@lib/terminal";

// Sections
import { experience } from "./experience";
import { profile } from "./profile";
import { projects } from "./projects";
import { skillGroups } from "./skills";

const linkFor = (label: string) => profile.links.find((l) => l.label === label);

function openLinkCommand(name: string, label: string): TerminalCommand {
  return {
    name,
    description: `open my ${label} profile`,
    run: (_args, ctx) => {
      const link = linkFor(label);
      if (!link)
        return [{ text: `${label} link not configured`, tone: "error" }];
      ctx.openUrl(link.href);
      return [
        {
          text: `opening ${link.display} ...`,
          tone: "success",
          href: link.href,
        },
      ];
    },
  };
}

/**
 * Commands understood by the contact terminal. To add one, append an object
 * here; `help` lists it automatically.
 */
export const terminalCommands: TerminalCommand[] = [
  {
    name: "help",
    description: "list available commands",
    aliases: ["?", "ls"],
    run: () => [
      { text: "available commands:", tone: "accent" },
      ...terminalCommands
        .filter((c) => !c.hidden)
        .map((c) => ({ text: `  ${c.name.padEnd(11)} ${c.description}` })),
    ],
  },
  {
    name: "whoami",
    description: "who is behind this terminal",
    run: () => [
      { text: `${profile.name} — ${profile.title}`, tone: "accent" },
      { text: profile.location, tone: "muted" },
      { text: `status: ${profile.status}`, tone: "success" },
    ],
  },
  {
    name: "skills",
    description: "list my tech stack",
    run: () =>
      skillGroups.map((g) => ({
        text: `${g.category.padEnd(10)} ${g.items.join(", ")}`,
      })),
  },
  {
    name: "experience",
    description: "summarise my work history",
    aliases: ["exp"],
    run: () =>
      experience.flatMap((company) => [
        {
          text: `${company.company} (${company.period})`,
          tone: "accent" as const,
        },
        ...company.roles.map((r) => ({
          text: `  ${r.period}  ${r.title} — ${r.product}`,
        })),
      ]),
  },
  {
    name: "projects",
    description: "list personal projects",
    run: () =>
      projects.flatMap<OutputLine>((p) => [
        { text: p.name, tone: "accent" },
        { text: `  ${p.repoUrl}`, href: p.repoUrl, tone: "muted" },
      ]),
  },
  {
    name: "contact",
    description: "show contact details",
    run: () => [
      { text: `email     ${profile.email}`, href: `mailto:${profile.email}` },
      ...profile.links.map((l) => ({
        text: `${l.label.toLowerCase().padEnd(9)} ${l.display}`,
        href: l.href,
      })),
    ],
  },
  {
    name: "email",
    description: "compose an email to me",
    aliases: ["mail"],
    run: (_args, ctx) => {
      ctx.openUrl(`mailto:${profile.email}`);
      return [
        { text: `opening mail client → ${profile.email}`, tone: "success" },
      ];
    },
  },
  openLinkCommand("github", "GitHub"),
  openLinkCommand("linkedin", "LinkedIn"),
  openLinkCommand("leetcode", "LeetCode"),
  {
    name: "echo",
    description: "print text",
    hidden: true,
    run: (args) => [{ text: args.join(" ") }],
  },
  {
    name: "sudo",
    description: "try it",
    hidden: true,
    run: (args) =>
      args.join(" ") === "hire-me"
        ? [
            { text: "[sudo] access granted ✔", tone: "success" },
            {
              text: `excellent choice. reach me at ${profile.email}`,
              href: `mailto:${profile.email}`,
            },
          ]
        : [
            {
              text: "permission denied: nice try 😉 (hint: sudo hire-me)",
              tone: "error",
            },
          ],
  },
  {
    name: "clear",
    description: "clear the terminal",
    aliases: ["cls"],
    run: () => ({ type: "clear" }),
  },
];
