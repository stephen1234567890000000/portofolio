import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <Hero />
      <About />
      {/* Komponen-komponen kita akan ditaruh di sini nanti */}
      <p className="text-center pt-20 text-2xl font-bold">Portofolio Saya Sedang Dibangun 🚀</p>
    </main>
  );
}