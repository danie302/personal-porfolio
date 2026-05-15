import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import RevealObserver from "@/components/RevealObserver";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Work from "@/sections/Work";
import Experience from "@/sections/Experience";
import Stack from "@/sections/Stack";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <RevealObserver />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Stack />
      <Contact />
    </>
  );
}
