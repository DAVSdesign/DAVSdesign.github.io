"use client";

import { useState } from "react";
import { ChevronDown, Wrench, PenTool, TrendingUp, RotateCcw, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  details: string;
}

interface ServiceAccordionProps {
  services: Service[];
}

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  PenTool,
  TrendingUp,
  RotateCcw,
  Layers,
};

export default function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(services[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4" id="service-accordion">
      {services.map((service, index) => {
        const isOpen = openId === service.id;
        const IconComponent = iconMap[service.icon];

        return (
          <div
            key={service.id}
            className={`border rounded-sm overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-orange-primary bg-charcoal-800/80"
                : "border-white/10 bg-charcoal-800/40 hover:border-white/20"
            }`}
            id={`service-${service.id}`}
          >
            <button
              onClick={() => toggle(service.id)}
              className="w-full flex items-center justify-between p-6 text-left"
              aria-expanded={isOpen}
              aria-controls={`service-content-${service.id}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center transition-colors ${
                    isOpen
                      ? "bg-orange-primary text-white"
                      : "bg-white/5 text-orange-primary"
                  }`}
                >
                  {IconComponent && <IconComponent size={22} />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-manrope)]">
                    <span className="text-orange-primary mr-2 text-sm font-mono">
                      0{index + 1}
                    </span>
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal-500 mt-1 hidden sm:block">
                    {service.description}
                  </p>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`text-charcoal-500 transition-transform duration-300 shrink-0 ml-4 ${
                  isOpen ? "rotate-180 text-orange-primary" : ""
                }`}
              />
            </button>

            <div
              id={`service-content-${service.id}`}
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 border-t border-white/5 pt-6">
                <p className="text-charcoal-500 text-sm leading-relaxed mb-6 sm:hidden">
                  {service.description}
                </p>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-6">
                  {service.details}
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {service.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-sm border border-white/5"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-primary rounded-full shrink-0" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
