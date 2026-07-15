export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 md:py-32">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
        Halo, Saya Frontend Developer
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8">
        Saya membangun web landing page yang cepat, responsif, dan interaktif menggunakan React.js dan Next.js. Berfokus pada performa dan pengalaman pengguna yang optimal.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition">
          Lihat Proyek Saya
        </a>
        <a href="#contact" className="border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg transition">
          Hubungi Saya
        </a>
      </div>
    </section>
  )
}