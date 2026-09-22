import React from 'react';
import { CheckCircle2, Code2, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = [
    <Code2 className="w-5 h-5 text-zinc-900" />,
    <Database className="w-5 h-5 text-zinc-900" />,
    <Wrench className="w-5 h-5 text-zinc-900" />,
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Skills & Technologies
          </h2>
          <p className="mt-2 text-zinc-600 font-medium">
            Languages, frameworks, and developer tools I leverage on a daily basis.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.categories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-100">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.items.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-100"
                    >
                      <span className="text-sm font-semibold text-zinc-800">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-zinc-500 px-2 py-0.5 rounded bg-white border border-zinc-200/80">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
