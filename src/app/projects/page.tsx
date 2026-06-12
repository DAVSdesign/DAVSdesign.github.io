"use client";

import { useState } from "react";
import content from "@/data/content.json";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";

const categories = [
  "All",
  ...Array.from(new Set(content.projects.map((p) => p.category))),
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? content.projects
      : content.projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" id="projects-hero">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-davs relative z-10">
          <span className="text-orange-primary text-sm font-semibold uppercase tracking-wider">
            Our Portfolio
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-manrope)] tracking-tight">
            Projects That Define<br />
            <span className="text-orange-primary">Precision</span>
          </h1>
          <p className="mt-6 text-lg text-charcoal-500 max-w-2xl">
            From aerospace assembly jigs to automotive welding fixtures — explore our portfolio
            of engineering solutions delivered to industry leaders.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-padding" id="projects-grid">
        <div className="container-davs">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12" id="project-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-sm border transition-all ${
                  activeCategory === cat
                    ? "bg-orange-primary text-white border-orange-primary"
                    : "bg-transparent text-charcoal-500 border-white/10 hover:border-orange-primary/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-charcoal-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative" id="projects-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 to-transparent" />
        <div className="container-davs relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-manrope)]">
            Have a Similar Project?
          </h2>
          <p className="mt-4 text-lg text-charcoal-500 max-w-xl mx-auto">
            Let&apos;s discuss how we can engineer a precision solution for your manufacturing requirements.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg" icon>
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
