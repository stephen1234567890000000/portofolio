import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      {/* Komponen-komponen kita akan ditaruh di sini nanti */}
      <p className="text-center pt-20 text-2xl font-bold">
        My Portfolio Is Under Construction 🚀
      </p>
    </main>
  );
}
