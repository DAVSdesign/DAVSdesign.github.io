"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  client?: string;
  description: string;
  challenge?: string;
  solution?: string;
  image: string;
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Card */}
      <article
        className="group card-industrial overflow-hidden cursor-pointer"
        onClick={() => setShowModal(true)}
        id={`project-card-${project.id}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setShowModal(true)}
        aria-label={`View details for ${project.title}`}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-charcoal-700">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-orange-primary/90 text-white text-xs font-semibold uppercase tracking-wider rounded-sm">
              {project.category}
            </span>
          </div>

          {/* Hover Icon */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-orange-primary rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight size={18} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white font-[family-name:var(--font-manrope)] group-hover:text-orange-primary transition-colors">
            {project.title}
          </h3>
          {project.client && (
            <p className="mt-1 text-xs text-charcoal-500 uppercase tracking-wider">
              {project.client}
            </p>
          )}
          <p className="mt-3 text-sm text-charcoal-500 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-white/5 text-charcoal-500 rounded-sm border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowModal(false)}
          id={`project-modal-${project.id}`}
        >
          <div
            className="bg-charcoal-800 border border-white/10 rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 bg-charcoal-700">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 to-transparent" />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-charcoal-900/80 rounded-sm flex items-center justify-center text-white hover:bg-orange-primary transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-orange-primary text-white text-xs font-semibold uppercase tracking-wider rounded-sm">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-manrope)]">
                {project.title}
              </h2>
              {project.client && (
                <p className="mt-2 text-sm text-orange-primary font-medium">
                  Client: {project.client}
                </p>
              )}
              <p className="mt-4 text-charcoal-500 leading-relaxed">
                {project.description}
              </p>

              {project.challenge && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                    Challenge
                  </h4>
                  <p className="text-charcoal-500 text-sm leading-relaxed border-l-2 border-orange-primary pl-4">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                    Solution
                  </h4>
                  <p className="text-charcoal-500 text-sm leading-relaxed border-l-2 border-orange-primary pl-4">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.tags && (
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white/5 text-charcoal-500 rounded-sm border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
