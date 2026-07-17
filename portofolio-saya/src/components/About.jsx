import SectionReveal from "./SectionReveal";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiSequelize,
  SiVercel,

} from "react-icons/si";

export default function About() {
  // Mengubah array menjadi objek yang menyimpan nama dan slug ikon dari Simple Icons
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] w-4 h-4" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] w-4 h-4" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-[#F7DF1E] w-4 h-4" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6] w-4 h-4" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-[#5FA04E] w-4 h-4" /> },
    { name: "Express.js", icon: <SiExpress className="text-white w-4 h-4" /> },
    { name: "Nest.js", icon: <SiNestjs className="text-[#E0234E] w-4 h-4" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB] w-4 h-4" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white w-4 h-4" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4] w-4 h-4" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-[#4169E1] w-4 h-4" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] w-4 h-4" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-[#E10098] w-4 h-4" /> },
    {
      name: "Sequelize",
      icon: <SiSequelize className="text-[#52B0E7] w-4 h-4" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032] w-4 h-4" /> },
    { name: "GitHub", icon: <FaGithub className="text-white w-4 h-4" /> },
    { name: "Vercel", icon: <SiVercel className="text-white w-4 h-4" /> },
  ];

  const softSkills = [
    "Problem Solving Under Pressure",
    "Effective Communication",
    "Cross-functional Collaboration",
    "Agile/Scrum Methodology",
    "Adaptability & Continuous Learning",
  ];

  return (
    <SectionReveal
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800"
    >
      <h2 className="text-3xl font-bold mb-6 text-teal-400">About Me</h2>

      <div className="flex flex-col gap-10">
        <div className="text-slate-300 space-y-4 text-base leading-relaxed">
          <p>
            I am a Full Stack JavaScript Developer with hands-on experience
            gained through the RevoU Full Stack JavaScript Immersive Program. I
            believe software should not only work correctly but also be
            maintainable, scalable, and provide a smooth user experience.
          </p>
          <p>
            I have developed several full-stack applications using React.js,
            Next.js, Express.js, Node.js, PostgreSQL, GraphQL, MongoDB, and
            TypeScript. I enjoy solving technical challenges, collaborating with
            teams, and continuously improving my software engineering skills
            while contributing to impactful products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-800/60 pt-8 animate-fade-up">
          {/* Kolom Kiri: Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 bg-slate-800/60 text-slate-200 text-xs font-medium px-3 py-2 rounded-xl border border-slate-700/50 hover:border-teal-500/30 transition duration-200"
                >
                  {/* Langsung merender komponen ikon lokal tanpa tag <img> */}
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200 flex items-center gap-2">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-slate-900 text-amber-300 text-xs font-medium px-3 py-2 rounded-xl border border-slate-800/80 leading-relaxed"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
