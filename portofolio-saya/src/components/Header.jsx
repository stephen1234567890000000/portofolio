"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-slate-900/30 backdrop-blur-sm border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-teal-300">Stephen Joshua Manullang</a>

        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#project" className="hover:text-teal-400 transition">Projects</a>
          <a href="#experience" className="hover:text-teal-400 transition">Experience</a>
          <a href="#about" className="hover:text-teal-400 transition">About</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
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
              <span className="text-lg font-bold text-teal-300">Menu</span>
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
