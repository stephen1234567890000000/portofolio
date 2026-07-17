import SectionReveal from "./SectionReveal";

export default function Hero() {
  return (
    <SectionReveal id="home" className="flex flex-col items-center justify-center text-center py-24 px-6 md:py-32">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
        Stephen Joshua Manullang
      </h1>
      <p className="text-lg md:text-xl lead max-w-2xl mb-8">
        Full Stack Software Engineer
      </p>
      <div className="flex gap-4">
        <a href="#project" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition">
          View My Projects
        </a>
        <a href="#contact" className="border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg transition">
          Contact Me
        </a>
      </div>
    </SectionReveal>
  );
}