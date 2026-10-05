import type { JSX } from "react";
// Components
import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";

// Features
import Achievements from "@features/Achievements/Achievements";
import Contact from "@features/Contact/Contact";
import Experience from "@features/Experience/Experience";
import Hero from "@features/Hero/Hero";
import Projects from "@features/Projects/Projects";
import Skills from "@features/Skills/Skills";

/**
 * Root layout: navbar, every page section in order, and the footer.
 * @returns The full page.
 */
export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
