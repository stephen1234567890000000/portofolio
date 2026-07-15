export default function About() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Vercel",
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800"
    >
      <h2 className="text-3xl font-bold mb-6 text-teal-400">Tentang Saya</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 text-slate-300 space-y-4">
          <p>
            Saya adalah lulusan Program Full-Stack Software Engineering dari
            RevoU. Saya memiliki passion yang mendalam dalam mengubah desain
            Figma menjadi kode landing page yang hidup, bersih, dan berorientasi
            pada detail.
          </p>
          <p>
            Pendidikan saya di RevoU telah melatih saya untuk terbiasa bekerja
            dalam tim lintas fungsi, memecahkan masalah logika coding, dan
            menerapkan praktik terbaik dalam pengembangan frontend web.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-slate-200">
            Keahlian Teknis
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-slate-800 text-teal-300 text-sm font-medium px-3 py-1 rounded-md border border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
