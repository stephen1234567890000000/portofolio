import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 selection:bg-teal-500 selection:text-slate-900">
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </main>
  );
}
