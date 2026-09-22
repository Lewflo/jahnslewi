import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Location & Status Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-medium mb-6">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{personal.location}</span>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-900 font-semibold">{personal.role}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
            Hi, I'm <span className="underline decoration-zinc-300 underline-offset-8">{personal.name}</span>.
            <br />
            <span className="text-zinc-500 font-medium">I build digital products that scale.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl font-normal">
            {personal.bio}
          </p>

          {/* Action CTAs & Socials */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 shadow-sm transition-all hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-800 font-medium text-sm hover:bg-zinc-50 transition-all hover:-translate-y-0.5"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2 border-l border-zinc-200">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-zinc-500 mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
