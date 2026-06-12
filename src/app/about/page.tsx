import type { Metadata } from "next";
import content from "@/data/content.json";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { Target, ShieldCheck, Lightbulb, Users, PenTool, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Our Story, Values & Infrastructure",
  description:
    "Learn about DAVS Integrated Engineering Solutions — our mission, values, engineering infrastructure, certifications, and journey of delivering precision manufacturing solutions since 2015.",
};

const valueIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Target,
  ShieldCheck,
  Lightbulb,
  Users,
  PenTool,
  Factory,
};

export default function AboutPage() {
  const { story, values, infrastructure, certifications } = content.about;
  const timeline = content.about.timeline as Array<{ year: string; event: string }>;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" id="about-hero">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-davs relative z-10">
          <span className="text-orange-primary text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-manrope)] tracking-tight">
            {story.heading}
          </h1>
          <p className="mt-6 text-lg text-charcoal-500 max-w-3xl leading-relaxed">
            {story.content}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" id="mission-vision">
        <div className="container-davs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-industrial p-8">
              <span className="text-orange-primary text-sm font-semibold uppercase tracking-wider">
                Our Mission
              </span>
              <p className="mt-4 text-white text-lg leading-relaxed">
                {story.mission}
              </p>
            </div>
            <div className="card-industrial p-8">
              <span className="text-orange-primary text-sm font-semibold uppercase tracking-wider">
                Our Vision
              </span>
              <p className="mt-4 text-white text-lg leading-relaxed">
                {story.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-light" id="values">
        <div className="container-davs">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every project, every design decision, and every client interaction."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = valueIcons[value.icon];
              return (
                <div
                  key={value.title}
                  className="bg-white p-6 rounded-sm border border-black/5 hover:border-orange-primary/30 hover:shadow-lg transition-all group text-center"
                >
                  <div className="w-14 h-14 bg-orange-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-primary/20 transition-colors">
                    {Icon && <Icon size={24} className="text-orange-primary" />}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900 font-[family-name:var(--font-manrope)]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {timeline && timeline.length > 0 && (
        <section className="section-padding" id="timeline">
          <div className="container-davs">
            <SectionHeading
              title="Our Journey"
              subtitle="Key milestones in our growth from a 3-person team to a trusted engineering partner."
            />

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 pl-16 md:pl-0 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    <span className="text-orange-primary font-bold text-lg font-[family-name:var(--font-manrope)]">
                      {item.year}
                    </span>
                    <p className="mt-1 text-charcoal-500 text-sm leading-relaxed">
                      {item.event}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-orange-primary rounded-full -translate-x-1.5 mt-1.5 z-10 ring-4 ring-charcoal-900" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Infrastructure */}
      <section className="section-padding section-light" id="infrastructure">
        <div className="container-davs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                title="Engineering Infrastructure"
                subtitle="World-class tools and software platforms powering our design capabilities."
                alignment="left"
                light
              />
              <div className="space-y-3">
                {infrastructure.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-sm border border-black/5"
                  >
                    <span className="w-2 h-2 bg-orange-primary rounded-full shrink-0" />
                    <span className="text-sm text-charcoal-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                title="Certifications & Standards"
                subtitle="Recognized quality standards that underpin our engineering processes."
                alignment="left"
                light
              />
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-sm border border-black/5"
                  >
                    <span className="w-2 h-2 bg-orange-primary rounded-full shrink-0" />
                    <span className="text-sm text-charcoal-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative" id="about-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 to-transparent" />
        <div className="container-davs relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-manrope)]">
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-charcoal-500 max-w-xl mx-auto">
            Join 50+ OEMs and manufacturing firms who trust DAVS for their tooling and design needs.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg" icon>
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
