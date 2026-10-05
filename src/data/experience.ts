import type { Experience } from "@typings/portfolio";

export const experience: Experience[] = [
  {
    company: "Mandark Technologies",
    location: "Chennai, India",
    period: "05/2022 - 09/2026",
    roles: [
      {
        title: "UI Lead",
        product: "AdEx & IMS · Media and Advertising Platforms",
        period: "2025 - 2026",
        stack: ["React.js", "React Native", "Expo", "SQLite", "Bootstrap"],
        highlights: [
          "Led UI development for AdEx and IMS, mentored 2 junior developers and built 50+ UI screens across web and mobile.",
          "Built the Inventory Management System (IMS) to manage media sites, locations, campaigns, quotes and invoices, with shared components keeping web and mobile consistent.",
          "Built AdEx, an offline-first mobile app (SQLite) used by field teams in Chennai, Bangalore, Pune, Delhi and Hyderabad to capture advertising site data.",
        ],
      },
      {
        title: "Frontend Developer",
        product: "InstaQP · Assessment Platform, incubated at IIT Madras",
        period: "2023 - 2025",
        stack: ["Next.js", "RTK Query", "Tailwind CSS"],
        highlights: [
          "Built Next.js features for an assessment and question paper platform used by IIT Madras professors, including math equation support and interactive question creation.",
          "Improved page-load speed by removing redundant API calls with RTK Query caching, plus code splitting, lazy loading and faster rendering.",
        ],
      },
      {
        title: "Frontend Developer",
        product: "Admavin · OOH Media Planning and Analytics Platform",
        period: "2022 - 2023",
        stack: ["React.js", "Node.js", "Puppeteer", "Bootstrap"],
        highlights: [
          "Built React.js features and reusable UI components for an Out-of-Home media platform used by 100+ brands such as Amazon, Zomato and BMW, comparing ad spaces and audiences on geospatial data.",
          "Replaced 20-30s frontend HTML-to-PDF reports with a reusable Node.js Puppeteer Document Service supporting many report types, bringing generation down to 5-10s (50-75% faster).",
        ],
      },
    ],
  },
];
