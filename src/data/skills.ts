import type { SkillGroup } from "@typings/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    accent: "primary",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python (learning)"],
  },
  {
    category: "Frontend",
    accent: "secondary",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "RTK Query",
      "Redux Saga",
      "React Hooks",
      "Tailwind CSS",
      "Vite",
      "Storybook",
    ],
  },
  {
    category: "Mobile",
    accent: "tertiary",
    items: ["React Native", "Expo", "SQLite (offline storage)"],
  },
  {
    category: "Backend",
    accent: "primary",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Puppeteer",
      "PDF Generation",
      "MongoDB",
    ],
  },
  {
    category: "Performance & UX",
    accent: "secondary",
    items: [
      "Responsive Design",
      "Cross-browser Compatibility",
      "Web Accessibility",
      "Code Splitting",
      "Lazy Loading",
    ],
  },
  {
    category: "Tools",
    accent: "tertiary",
    items: ["Git", "GitHub", "Docker", "Agile / Scrum", "NGINX (learning)"],
  },
];
