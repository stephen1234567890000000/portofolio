"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black/70 backdrop-blur-xl border-b border-red-800/70">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-black text-red-400 tracking-widest">Stephen Joshua</a>

        <nav className="hidden md:flex gap-8 text-sm text-slate-200 uppercase tracking-[0.2em]">
          <a href="#project" className="hover:text-red-300 transition">Projects</a>
          <a href="#experience" className="hover:text-red-300 transition">Experience</a>
          <a href="#about" className="hover:text-red-300 transition">About</a>
          <a href="#contact" className="hover:text-red-300 transition">Contact</a>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="text-slate-300 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="w-full md:hidden bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="w-64 bg-slate-900/90 glass border-l border-slate-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold text-red-300">Menu</span>
              <button onClick={() => setOpen(false)} className="text-slate-300">✕</button>
            </div>
            <nav className="flex flex-col gap-4">
              <a href="#project" onClick={() => setOpen(false)} className="text-slate-200">Projects</a>
              <a href="#experience" onClick={() => setOpen(false)} className="text-slate-200">Experience</a>
              <a href="#about" onClick={() => setOpen(false)} className="text-slate-200">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="text-slate-200">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
