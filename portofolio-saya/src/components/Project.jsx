import SectionReveal from "./SectionReveal";
import { FaReact, FaNodeJs, FaBoxes } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiPostgresql,
  SiSequelize,
  SiAxios,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiGraphql,
  SiVercel,
  SiGoogle,
} from "react-icons/si";
import { TbPlugConnected } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri"; // Ikon Robot untuk Gemini AI

function getTechIcon(techName) {
  switch (techName) {
    case "React.js":
      return <FaReact className="text-[#61DAFB] w-3.5 h-3.5" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="text-[#06B6D4] w-3.5 h-3.5" />;
    case "Vite":
      return <SiVite className="text-[#646CFF] w-3.5 h-3.5" />;
    case "Node.js":
      return <FaNodeJs className="text-[#5FA04E] w-3.5 h-3.5" />;
    case "WebSocket":
      return <TbPlugConnected className="text-[#38BDF8] w-3.5 h-3.5" />;
    case "Zustand":
      return <FaBoxes className="text-[#F59E0B] w-3.5 h-3.5" />;
    case "i18n":
      return <MdLanguage className="text-white w-3.5 h-3.5" />;
    case "Express.js":
      return <FaNodeJs className="text-white w-3.5 h-3.5" />;
    case "PostgreSQL":
      return <SiPostgresql className="text-[#4169E1] w-3.5 h-3.5" />;
    case "Sequelize":
      return <SiSequelize className="text-[#52B0E7] w-3.5 h-3.5" />;
    case "Next.js":
      return <SiNextdotjs className="text-white w-3.5 h-3.5" />;
    case "Axios":
      return <SiAxios className="text-[#5A29E4] w-3.5 h-3.5" />;
    case "Google OAuth":
      return <SiGoogle className="text-[#EA4335] w-3.5 h-3.5" />;
    case "Google Gemini API":
      return <RiRobot2Line className="text-[#9333EA] w-3.5 h-3.5" />;
    case "MongoDB":
      return <SiMongodb className="text-[#47A248] w-3.5 h-3.5" />;
    case "GraphQL":
      return <SiGraphql className="text-[#E10098] w-3.5 h-3.5" />;
    case "Nest.js":
      return <SiNestjs className="text-[#E0234E] w-3.5 h-3.5" />;
    case "TypeScript":
      return <SiTypescript className="text-[#3178C6] w-3.5 h-3.5" />;
    case "Express.js":
      return <SiExpress className="text-white w-3.5 h-3.5" />;
    case "Vercel":
      return <SiVercel className="text-white w-3.5 h-3.5" />;
    default:
      return <FaBoxes className="text-slate-400 w-3.5 h-3.5" />; // Ikon cadangan jika tech tidak terdaftar
  }
}

export default function Project() {
  const projects = [
    {
      title: "PICKSIDE — Real-time Gaming Platform",
      type: "Featured Capstone Project",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Vite",
        "Node.js",
        "WebSocket",
        "i18n",
      ],
      background:
        "Platform game interaktif membutuhkan sistem voting dan transisi ronde yang sinkron secara real-time antar pemain tanpa perlu memuat ulang (refresh) halaman secara manual.",
      strategy:
        "Membangun antarmuka responsif menggunakan React dan Tailwind CSS, lalu mengintegrasikan WebSockets untuk sinkronisasi data instan. Saya menerapkan Zustand sebagai manajemen status terpusat untuk mengelola logika permainan yang kompleks, serta membuat komponen modular seperti AnswerCard dan sistem multibahasa (i18n).",
      result:
        "Menghasilkan aplikasi game real-time yang memiliki kelancaran UI tinggi, sinkronisasi data tanpa delay, serta halaman ringkasan yang menyajikan visualisasi statistik partisipasi pemain secara dinamis.",
      scope:
        "Frontend Developer — Bertanggung jawab penuh atas arsitektur state management UI, integrasi WebSocket di sisi client, dan pembuatan komponen visualisasi statistik.",
      githubUrl: "https://github.com/GP2-PICKSIDE/GP_PHASE2_PICKSIDE",
    },
    {
      title: "FitBook",
      type: "RevoU Faculty Project",
      tech: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "Next.js",
        "Tailwind CSS",
        "Axios",
      ],
      background:
        "Banyak layanan personal training dan fitness coaching masih mengelola jadwal serta reservasi secara manual melalui chat atau spreadsheet. Proses ini sering menyebabkan benturan jadwal, kesulitan memantau kapasitas sesi, serta kurangnya transparansi bagi pengguna dalam melihat riwayat dan status booking mereka.",

      strategy:
        "Membangun platform booking fitness coaching berbasis web dengan sistem autentikasi dan otorisasi berbasis peran (User, Admin, dan Trainer). Saya mengembangkan REST API menggunakan Express.js dan Sequelize, serta antarmuka responsif menggunakan Next.js dan Tailwind CSS. Sistem dirancang untuk mendukung pengelolaan layanan, jadwal latihan, reservasi sesi, pembaruan profil pengguna, serta pelacakan status booking secara real-time.",

      result:
        "Berhasil menghasilkan platform booking fitness coaching yang memudahkan pengguna dalam menemukan layanan, memilih jadwal, dan melakukan reservasi secara online. Admin dapat mengelola layanan dan jadwal secara terpusat, sementara pengguna dapat memantau riwayat serta status booking mereka dengan lebih mudah dan terstruktur.",

      scope:
        "Pengembangan Full Stack, meliputi perancangan database PostgreSQL, pengembangan REST API, implementasi autentikasi JWT, pengelolaan role-based access control, pengembangan antarmuka pengguna responsif, integrasi frontend dan backend, serta deployment aplikasi ke lingkungan production.",
      githubUrl:
        "https://github.com/Revou-FSSE-Oct25/crack-fe-stephen1234567890000000",
    },
    {
      title: "Game Top-Up",
      type: "Personal Project",
      tech: [
        {
          name: "React.js",
          icon: <FaReact className="text-[#61DAFB] w-3.5 h-3.5" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#06B6D4] w-3.5 h-3.5" />,
        },
        {
          name: "Vite",
          icon: <SiVite className="text-[#646CFF] w-3.5 h-3.5" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-[#5FA04E] w-3.5 h-3.5" />,
        },
      ],
      background:
        "Proses pembelian item atau voucher game sering kali dilakukan melalui berbagai platform yang memiliki alur transaksi berbeda-beda, sehingga pengguna membutuhkan platform yang menyediakan pengalaman top-up yang lebih sederhana, cepat, dan terintegrasi dalam satu aplikasi.",
      strategy:
        "Saya membangun aplikasi fullstack menggunakan React.js dan Express.js dengan arsitektur REST API untuk mengelola autentikasi, katalog game, produk, dan transaksi top-up. Frontend diintegrasikan dengan Axios untuk komunikasi API secara real-time, serta menerapkan komponen modular dan Tailwind CSS untuk menghasilkan antarmuka yang responsif. Selain itu, saya mengintegrasikan Google Gemini API sebagai AI Assistant untuk membantu pengguna mendapatkan informasi maupun rekomendasi terkait game secara langsung di dalam aplikasi.",
      result:
        "Berhasil membangun platform game top-up yang memungkinkan pengguna melakukan registrasi, login, menjelajahi katalog game dan produk, membuat pesanan top-up, serta memantau status transaksi melalui antarmuka yang responsif. Aplikasi juga dilengkapi dengan AI Chat berbasis Google Gemini untuk meningkatkan pengalaman pengguna dalam mencari informasi seputar game.",
      scope:
        "Pengembangan Full Stack, termasuk perancangan database PostgreSQL, pengembangan REST API, implementasi autentikasi Google OAuth, pengelolaan transaksi dan verifikasi pembayaran, pengembangan antarmuka pengguna responsif, integrasi frontend dan backend, serta deployment aplikasi ke lingkungan production.",
      githubUrl:
        "https://github.com/stephen1234567890000000/ip-stephen1234567890000000",
    },
    {
      title: "Job Portal",
      type: "Personal Project",
      tech: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "React.js",
        "Tailwind CSS",
        "Axios",
      ],
      background:
        "Proses pencarian dan publikasi lowongan kerja sering kali tersebar di berbagai platform, sehingga perusahaan membutuhkan sistem yang dapat mengelola informasi lowongan secara terpusat, sementara pencari kerja dapat dengan mudah menemukan dan mengakses informasi pekerjaan yang relevan.",
      strategy:
        "Saya membangun aplikasi fullstack menggunakan React.js dan Express.js dengan arsitektur REST API untuk mengelola autentikasi, otorisasi, dan data lowongan pekerjaan. Frontend dikembangkan menggunakan Tailwind CSS dengan desain responsif dan komponen modular, serta terintegrasi dengan Axios untuk komunikasi API secara real-time. Saya juga mengimplementasikan JWT Authentication, protected routes, fitur upload gambar, serta pagination, pencarian, dan sorting untuk meningkatkan pengalaman pengguna saat mengelola maupun mencari lowongan kerja.",
      result:
        "Berhasil membangun platform rekrutmen yang memungkinkan pengguna melihat daftar lowongan, mencari pekerjaan berdasarkan kata kunci, melihat detail pekerjaan, serta melakukan pengelolaan lowongan (Create, Read, Update, Delete) melalui sistem autentikasi yang aman. Aplikasi juga menyediakan fitur upload gambar perusahaan dan navigasi data yang efisien melalui pagination dan sorting.",
      scope:
        "Fullstack Development (REST API Development, Authentication & Authorization, CRUD Development, Image Upload, Search & Pagination, Frontend Development, UI/UX Implementation, dan Database Design).",
      githubUrl: "https://github.com/stephen1234567890000000/Job-Portal",
    },
  ];

  return (
    <SectionReveal
      id="project"
      className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800"
    >
      <div className="mb-12 text-center md:text-left section-ink">
        <h2 className="text-3xl md:text-4xl font-black text-red-300 mb-2 uppercase tracking-[0.16em] section-heading">
          Selected Projects
        </h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          Showcasing my best work that demonstrates my technical execution
          skills.
        </p>
      </div>

      <div className="space-y-14">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative glass chaos-card broken-frame p-10 rounded-3xl border border-red-800/40 hover-glow transition-all duration-300 shadow-2xl animate-fade-up overflow-hidden"
          >
            <span className="absolute inset-0 noise-overlay pointer-events-none" />
            <span className="absolute inset-0 scanline-overlay pointer-events-none" />
            <span className="absolute top-4 left-4 w-16 h-1 bg-red-500/30 rotate-[-10deg]" />
            <span className="absolute bottom-6 right-6 w-12 h-1 bg-red-500/25 rotate-[15deg]" />
            <span className="absolute top-10 right-6 w-1 h-16 bg-red-500/15" />
            <span className="absolute left-8 bottom-16 w-24 h-1 bg-red-500/20 rotate-[8deg]" />
            {/* Top section: Project title & button */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase chaos-badge text-red-200 px-2 py-0.5 rounded border border-red-500/20 mb-2">
                {project.type}
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  className="text-xs border border-slate-700 hover:border-slate-500 text-slate-300 px-4 py-2 rounded-lg transition"
                >
                  Source Code
                </a>
              </div>
            </div>

            {/* Second section: Tech stack badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="absolute -top-6 left-0 text-xs uppercase tracking-[0.3em] text-red-500/80">
                chaos UI
              </span>
              {project.tech.map((t, idx) => {
                const techName = typeof t === "string" ? t : t.name;
                const techIcon =
                  typeof t === "string" ? getTechIcon(t) : t.icon;

                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 bg-[#130101]/80 text-red-200 text-sm px-4 py-1.5 rounded-full border border-red-700/30 font-semibold"
                  >
                    {techIcon}
                    {techName}
                  </span>
                );
              })}
            </div>

            {/* Third section: Structured narrative for HR readability */}
            <div className="space-y-4 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
              <div>
                <span className="text-xs font-bold text-red-300 tracking-wider uppercase block mb-1">
                  Background & Problem
                </span>
                <p className="text-slate-300">{project.background}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-red-300 tracking-wider uppercase block mb-1">
                  Method & Strategy
                </span>
                <p className="text-slate-300">{project.strategy}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-red-300 tracking-wider uppercase block mb-1">
                  Result & Output
                </span>
                <p className="text-slate-300">{project.result}</p>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block mb-1">
                  Scope & Responsibility
                </span>
                <p className="text-slate-300 text-xs">{project.scope}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
