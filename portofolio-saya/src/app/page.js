import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-100 selection:bg-red-500 selection:text-slate-900">
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </main>
  );
}
