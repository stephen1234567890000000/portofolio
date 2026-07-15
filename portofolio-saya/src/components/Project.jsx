export default function Project() {
  const projects = [
    {
      title: "PICKSIDE — Real-time Gaming Platform",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Vite",
        "Node.js",
        "WebSocket",
        "Zustand",
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
      tech: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "REST API",
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
      tech: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "REST API",
        "React.js",
        "Axios",
        "Tailwind CSS",
        "Google OAuth",
        "Google Gemini API",
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
      tech: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "REST API",
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
    <section
      id="project"
      className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800"
    >
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-teal-400 mb-2">
          Selected Projects
        </h2>
        <p className="text-slate-400">
          Showcasing my best work that demonstrates my technical execution skills.
        </p>
      </div>

      {/* Card layout without images (focus on typography and spacing) */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-all duration-300 shadow-xl"
          >
            {/* Top section: Project title & button */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
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
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-slate-800/80 text-teal-300 text-xs px-3 py-1 rounded-md border border-slate-700/60 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Third section: Structured narrative for HR readability */}
            <div className="space-y-4 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
              <div>
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase block mb-1">
                  Background & Problem
                </span>
                <p className="text-slate-300">{project.background}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase block mb-1">
                  Method & Strategy
                </span>
                <p className="text-slate-300">{project.strategy}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase block mb-1">
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
    </section>
  );
}
