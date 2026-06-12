import type { Metadata } from "next";
import content from "@/data/content.json";
import ServiceAccordion from "@/components/ServiceAccordion";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Tool Design, CAD Drafting & Optimization",
  description:
    "Comprehensive mechanical engineering services: tool design, 3D CAD modeling, technical drafting, design optimization, and reverse engineering. HAL aerospace-grade specifications.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" id="services-hero">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-davs relative z-10">
          <span className="text-orange-primary text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-manrope)] tracking-tight">
            Engineering Capabilities<br />
            <span className="text-orange-primary">That Deliver</span>
          </h1>
          <p className="mt-6 text-lg text-charcoal-500 max-w-2xl">
            From initial concept to manufacturing-ready documentation. Our services cover
            the full spectrum of mechanical design and tooling engineering.
          </p>
        </div>
      </section>

      {/* Service Accordion */}
      <section className="section-padding" id="services-detail">
        <div className="container-davs">
          <ServiceAccordion services={content.services} />
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding section-light" id="our-process">
        <div className="container-davs">
          <SectionHeading
            title="Our Process"
            subtitle="A structured, proven methodology that minimizes revisions and maximizes first-time-right delivery."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "Deep-dive into your specifications, tolerances, production volumes, and operational constraints.",
              },
              {
                step: "02",
                title: "Concept Development",
                desc: "Multiple design concepts evaluated against manufacturing feasibility, cost, and timeline.",
              },
              {
                step: "03",
                title: "Detailed Design",
                desc: "Full 3D CAD modeling with FEA validation, GD&T annotations, and BOM generation.",
              },
              {
                step: "04",
                title: "Documentation & Delivery",
                desc: "Complete manufacturing drawing package, assembly instructions, and ongoing support.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-bold text-orange-primary/15 font-[family-name:var(--font-manrope)]">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-charcoal-900 font-[family-name:var(--font-manrope)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Standards */}
      <section className="section-padding" id="software-standards">
        <div className="container-davs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                title="Software Platforms"
                subtitle="Industry-standard tools for precision design and analysis."
                alignment="left"
              />
              <div className="grid grid-cols-2 gap-4">
                {["CATIA V5", "SolidWorks", "AutoCAD", "Creo / Pro-E", "ANSYS FEA", "HyperMesh"].map(
                  (tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-3 px-4 py-3 bg-charcoal-800 border border-white/5 rounded-sm hover:border-orange-primary/30 transition-colors"
                    >
                      <span className="w-2 h-2 bg-orange-primary rounded-full" />
                      <span className="text-sm text-gray-300 font-medium">{tool}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <SectionHeading
                title="Standards We Follow"
                subtitle="Every design complies with relevant industry and international standards."
                alignment="left"
              />
              <div className="grid grid-cols-2 gap-4">
                {[
                  "ASME Y14.5 (GD&T)",
                  "IS / ISO Drafting",
                  "AS9100D",
                  "ISO 9001:2015",
                  "HAL Design Standards",
                  "NABL Calibration",
                ].map((standard) => (
                  <div
                    key={standard}
                    className="flex items-center gap-3 px-4 py-3 bg-charcoal-800 border border-white/5 rounded-sm hover:border-orange-primary/30 transition-colors"
                  >
                    <span className="w-2 h-2 bg-orange-primary rounded-full" />
                    <span className="text-sm text-gray-300 font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding section-light" id="services-faq">
        <div className="container-davs">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about our engineering services and capabilities."
            light
          />
          <FAQAccordion faqs={content.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative" id="services-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 to-transparent" />
        <div className="container-davs relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-manrope)]">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-charcoal-500 max-w-xl mx-auto">
            Tell us about your project and receive a detailed engineering consultation within 24-48 hours.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon>
              Get an Engineering Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
