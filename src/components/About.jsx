import React from 'react';
import { GraduationCap, Award, Compass, Layers, ShieldCheck, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, education } = portfolioData;

  const principleIcons = [
    <Layers className="w-5 h-5 text-zinc-900" />,
    <ShieldCheck className="w-5 h-5 text-zinc-900" />,
    <Zap className="w-5 h-5 text-zinc-900" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
            Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            {about.heading}
          </h2>
          <p className="mt-2 text-zinc-600 font-medium">
            {about.subheading}
          </p>
        </div>

        {/* Story & Education Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-zinc-600 leading-relaxed text-base">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Education Card */}
            <div className="mt-8 pt-6 border-t border-zinc-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-zinc-900" />
                Education Background
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-zinc-950 text-base">{edu.institution}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-zinc-200 rounded-md text-zinc-600">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-800 mt-1">{edu.degree}</p>
                  <p className="text-xs text-zinc-500 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Principles Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
              Core Principles
            </h3>
            {about.principles.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-zinc-100 shrink-0">
                    {principleIcons[idx % principleIcons.length]}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-zinc-900">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
