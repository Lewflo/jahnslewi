import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Work Experience
          </h2>
          <p className="mt-2 text-zinc-600 font-medium">
            Where I have contributed, learned, and delivered engineering value.
          </p>
        </div>

        {/* Timeline List */}
        <div className="mt-12 space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-300 hover:shadow-xs transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-950">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mt-1">
                    <span className="font-semibold text-zinc-800">{exp.company}</span>
                    <span className="text-zinc-300">•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-semibold self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </div>
              </div>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2">
                {exp.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-50 border border-zinc-200 text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
