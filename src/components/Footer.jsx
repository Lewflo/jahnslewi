import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-zinc-900 text-white flex items-center justify-center font-bold text-[10px]">
            JL
          </div>
          <span>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Crafted with precision.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-zinc-900 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-zinc-900 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">
            Contact
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors inline-flex items-center justify-center"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
