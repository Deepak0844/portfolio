import type { Project } from "@typings/portfolio";

export const projects: Project[] = [
  {
    name: "Technician Mobile App",
    type: "Personal Project · Mobile",
    description:
      "A mobile app for field technicians to manage jobs, customers, service updates and job status, backed by a REST API.",
    stack: ["React Native", "Node.js", "Express.js", "MongoDB"],
    repoUrl: "https://github.com/Deepak0844/technician-app",
    accent: "primary",
  },
  {
    name: "NAS Cloud Drive",
    type: "Personal Project · Web",
    description:
      "A NAS-style web app to store, manage and access files online, with a React.js frontend and a Node.js backend.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    repoUrl: "https://github.com/Deepak0844/cloud-drive",
    accent: "secondary",
  },
];
