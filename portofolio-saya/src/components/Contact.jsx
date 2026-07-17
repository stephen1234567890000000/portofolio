import SectionReveal from "./SectionReveal";
import { IoMail } from "react-icons/io5";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaLinkedin} from "react-icons/fa"; 

export default function Contact() {
  return (
    <SectionReveal
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800"
    >
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-teal-400 mb-2">Get in Touch</h2>
        <p className="text-slate-400">
          Interested in collaborating or want to explore my potential further?
          Please feel free to contact me directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-xl font-semibold text-slate-100">
            Contact Information
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            You can contact me formally via email or connect directly through
            the following professional platforms:
          </p>

          <div className="space-y-4 pt-2">
            <a
              href="mailto:email-stephenjm15@gmail.com"
              className="flex items-center gap-3 text-sm text-slate-300 hover:text-teal-400 transition group"
            >
              <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-500/10 transition">
                <IoMail className="w-4 h-4 text-[#EA4335] transition-transform group-hover:scale-110" />
              </span>
              stephenjm15@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/stephen-joshua-manullang-37075832a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-slate-300 hover:text-teal-400 transition group"
            >
              <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-500/10 transition">
                <FaLinkedin className="w-4 h-4 text-[#0077B5] transition-transform group-hover:scale-110" />
              </span>
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/stephen1234567890000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-slate-300 hover:text-teal-400 transition group"
            >
              <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-teal-500/10 transition">
                <SiGithub className="w-4 h-4 text-[#181717] transition-transform group-hover:scale-110" />
              </span>
              Github Profile
            </a>
          </div>
        </div>

        <div className="md:col-span-3 bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 shadow-xl">
          <form
            action="https://formspree.io/f/meeyeqzr"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                className="w-full bg-slate-800/60 border border-slate-700/60 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                className="w-full bg-slate-800/60 border border-slate-700/60 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Your message here..."
                rows="4"
                className="w-full bg-slate-800/60 border border-slate-700/60 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold text-sm py-3 rounded-lg transition shadow-lg shadow-teal-500/10 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SectionReveal>
  );
}
