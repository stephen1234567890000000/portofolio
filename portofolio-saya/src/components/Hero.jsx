import SectionReveal from "./SectionReveal";

export default function Hero() {
  return (
    <SectionReveal id="home" className="relative overflow-hidden flex flex-col items-center justify-center text-center py-24 px-6 md:py-32">
      <div className="hero-deco"></div>
      <h1 className="relative text-6xl md:text-8xl font-black tracking-[0.28em] mb-4 text-red-300 glitch-text" data-text="STEPHEN JOSHUA">
        STEPHEN JOSHUA
      </h1>
      <p className="text-lg md:text-2xl max-w-3xl mb-10 text-slate-300 chaos-subtitle leading-relaxed">
        Full Stack Software Engineer
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#project" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition shadow-lg shadow-red-500/20 tracking-[0.08em] uppercase">
          View Projects
        </a>
        <a href="#contact" className="border border-red-700 hover:border-red-500 text-red-200 px-6 py-3 rounded-full transition tracking-[0.08em] uppercase">
          Contact Me
        </a>
      </div>
    </SectionReveal>
  );
}