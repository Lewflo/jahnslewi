import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile & Web'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((item) => item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-y border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
              Selected Projects
            </h2>
            <p className="mt-2 text-zinc-600 font-medium">
              A curated collection of web applications, systems, and digital experiments.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-200/70 text-zinc-700">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-zinc-950 group-hover:text-zinc-900 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-6 pt-4 border-t border-zinc-200/80 flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
