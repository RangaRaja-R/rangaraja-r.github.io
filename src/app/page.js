import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import EyeGlass from "./style-components/EyeGlass";
import Navbar from "./components/Navbar";
import EventHandler from "./style-components/EventHandler";
import Contact from "./components/Contact";

export default function Home() {
  return (<>
    <main id="root">
      <EventHandler />
      <Navbar />
      <Hero />
      <EyeGlass />
      <About />
      <Projects />
      <Contact />
    </main>
  </>
  );
}
