import type { Profile } from "@typings/portfolio";

export const profile: Profile = {
  name: "Deepak Ram",
  handle: "deepak",
  title: "Frontend Developer",
  roles: [
    "Frontend Developer",
    "React Native Engineer",
    "UI Lead",
    "Next.js Developer",
  ],
  location: "Chennai, Tamil Nadu, India",
  status: "Open to opportunities",
  summary:
    "Frontend Developer with 4+ years of experience building web and mobile apps with React.js, Next.js, TypeScript, React Native and Redux Toolkit. Led the UI for AdEx and IMS, building 50+ screens and mentoring 2 junior developers. Built an assessment platform used by IIT Madras professors, speeding up page loads with RTK Query caching, and cut PDF report time from 20-30s to 5-10s with a Puppeteer service.",
  email: "deepakram0105@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1wysLbTrk9VFRMlIQJba4qrn6Jy2HDFxj/view",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Deepak0844",
      display: "github.com/Deepak0844",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/deepak-ram-r",
      display: "in/deepak-ram-r",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Deepak_Ram_R",
      display: "leetcode.com/u/Deepak_Ram_R",
    },
  ],
  stats: [
    { value: "4+", label: "Years experience" },
    { value: "50+", label: "UI screens shipped" },
    { value: "IIT-M", label: "Profs use my platform" },
    { value: "75%", label: "Faster PDF reports" },
  ],
};
