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

  const softSkills = [
    "Problem Solving Under Pressure",
    "Effective Communication",
    "Cross-functional Collaboration",
    "Agile/Scrum Methodology",
    "Adaptability & Continuous Learning",
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800"
    >
      <h2 className="text-3xl font-bold mb-6 text-teal-400">About Me</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 text-slate-300 space-y-4">
          <p>
            I graduated from the Full-Stack Software Engineering program at
            RevoU. I have a strong passion for turning Figma designs into live,
            clean, and detail-oriented landing page code.
          </p>
          <p>
            My education at RevoU trained me to work in cross-functional teams,
            solve coding logic problems, and apply best practices in frontend
            web development.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-slate-200">
            Technical Skills
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

        <div>
          <h3 className="text-lg font-semibold mb-4 text-slate-250 flex items-center gap-2">
            Soft Skill
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-slate-900 text-amber-300 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-800"
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
