export default function Experience() {
  const workExperiences = [
    {
      role: "Computer and Network Engineer / IT Support Intern",
      company: "PT. SWISCO Solusi Teknologi",
      period: "July 2024 - December 2024",
      description:
        "Supported daily IT operations by maintaining over 30 LAN connections and troubleshooting computer hardware issues to ensure reliable network performance. Assisted senior network engineers in configuring routers and switches, contributing to secure network deployment and stable connectivity for corporate infrastructure with minimal downtime.",
    },
  ];

  const education = [
    {
      degree: "Full Stack Software Engineer",
      institute: "RevoU",
      period: "October 2025 - July 2026",
      detail:
        "Studying comprehensive web development, including frontend and backend technologies, database management, and modern cloud deployment strategies.",
    },
    {
      degree: "Computer and Network Engineering",
      institute: "SMK Negeri 1 Batam",
      period: "June 2023 - March 2025",
      detail:
        "Studying computer network architecture, server operating systems, network infrastructure administration, and hardware engineering fundamentals.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-3xl mx-auto border-t border-slate-800"
    >
      {/* 💼 BAGIAN 1: WORK EXPERIENCE */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-teal-400 mb-8 flex items-center gap-2">
          Working Experience
        </h2>
        <div className="border-l-2 border-slate-800 pl-6 ml-3 space-y-10">
          {workExperiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Lingkaran Garis Waktu */}
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-teal-500 group-hover:bg-teal-400 transition-all duration-300" />

              {/* Konten Teks berada di luar lingkaran */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-teal-400 transition duration-300">
                  {exp.role}
                </h3>
                <span className="text-xs text-slate-500 font-medium sm:text-right">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-teal-300/90 font-medium mb-3">
                {exp.company}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎓 BAGIAN 2: EDUCATION */}
      <div>
        <h2 className="text-2xl font-bold text-teal-400 mb-8 flex items-center gap-2">
          Education
        </h2>
        <div className="border-l-2 border-slate-800 pl-6 ml-3 space-y-10">
          {education.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Lingkaran Garis Waktu */}
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-teal-500 group-hover:bg-teal-400 transition-all duration-300" />

              {/* Konten Teks berada di luar lingkaran */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-teal-400 transition duration-300">
                  {edu.degree}
                </h3>
                <span className="text-xs text-slate-500 font-medium sm:text-right">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-slate-400 font-medium mb-2">
                {edu.institute}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
