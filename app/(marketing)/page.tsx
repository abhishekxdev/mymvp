import Hero from "@/components/marketing/Hero";
import Projects from "@/components/marketing/Projects";
import About from "@/components/marketing/About";
import Pricing from "@/components/marketing/Pricing";
import Doubts from "@/components/marketing/Doubts";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <About />
      <Projects />
      <Pricing />
      <Doubts/>
     
    </div>
  );
}
