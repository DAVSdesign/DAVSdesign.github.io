import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Crosshair, Layers, Shield, Factory, Wrench } from "lucide-react";
import content from "@/data/content.json";
import TrustBar from "@/components/TrustBar";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Crosshair,
  Layers,
  Shield,
  Factory,
  Wrench,
};

export default function HomePage() {
  const { hero, features, stats, featuredProject } = content.home;

  return (
    <>
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-charcoal-900" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] border border-orange-primary/5 rounded-full" />
          <div className="absolute top-40 -right-40 w-[800px] h-[800px] border border-orange-primary/3 rounded-full" />
        </div>
        
        {/* Orange glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-primary/5 rounded-full blur-[120px]" />

        <div className="container-davs relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-manrope)] leading-[1.1] tracking-tight animate-fade-in-up delay-100">
              {hero.heading.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    word === "Manufacturing-Ready" || word === "Engineering"
                      ? "text-orange-primary"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-xl text-charcoal-500 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
              {hero.subheading}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
              <Button href="/contact" variant="primary" size="lg" icon id="hero-primary-cta">
                {hero.primaryCTA}
              </Button>
              <Button href="/services" variant="outline" size="lg" id="hero-secondary-cta">
                {hero.secondaryCTA}
              </Button>
            </div>

            {/* Micro Stats Row */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-fade-in-up delay-400">
              <div className="flex items-center text-left gap-3">
                <span className="text-2xl font-bold text-white font-[family-name:var(--font-manrope)]">500+</span>
                <span className="text-xs text-charcoal-500 uppercase tracking-wider leading-tight">Projects<br />Delivered</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center text-left gap-3">
                <span className="text-2xl font-bold text-white font-[family-name:var(--font-manrope)]">11+</span>
                <span className="text-xs text-charcoal-500 uppercase tracking-wider leading-tight">Years of<br />Experience</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="hidden sm:flex items-center text-left gap-3">
                <span className="text-2xl font-bold text-white font-[family-name:var(--font-manrope)]">98%</span>
                <span className="text-xs text-charcoal-500 uppercase tracking-wider leading-tight">Client<br />Retention</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-900 to-transparent" />
      </section>

      {/* ==========================================
          TRUST BAR
          ========================================== */}
      <TrustBar badges={content.trustBadges} />

      {/* ==========================================
          FEATURES GRID
          ========================================== */}
      <section className="section-padding" id="features">
        <div className="container-davs">
          <SectionHeading
            title="Why Choose DAVS?"
            subtitle="Engineering solutions built on a foundation of precision, integration, and manufacturing expertise."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="card-industrial p-6 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-orange-primary/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-orange-primary/20 transition-colors">
                    {Icon && (
                      <Icon
                        size={22}
                        className="text-orange-primary"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-manrope)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          SERVICES OVERVIEW
          ========================================== */}
      <section className="section-padding section-light" id="services-overview">
        <div className="container-davs">
          <SectionHeading
            title="Our Core Capabilities"
            subtitle="End-to-end engineering services from concept design to manufacturing documentation."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-sm border border-black/5 hover:border-orange-primary/30 hover:shadow-lg transition-all group"
              >
                <span className="text-orange-primary text-sm font-mono font-bold">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-bold text-charcoal-900 font-[family-name:var(--font-manrope)] group-hover:text-orange-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.highlights.slice(0, 3).map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 text-xs bg-gray-light text-charcoal-600 rounded-sm"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/services" variant="primary" icon>
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ==========================================
          FEATURED PROJECT
          ========================================== */}
      <section className="section-padding" id="featured-project">
        <div className="container-davs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-charcoal-800 rounded-sm overflow-hidden border border-white/5">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${featuredProject.image})`,
                    backgroundColor: "var(--charcoal-700)",
                  }}
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-orange-primary/30" />
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-orange-primary/30" />
            </div>

            {/* Content */}
            <div>
              <span className="text-orange-primary text-sm font-semibold uppercase tracking-wider">
                Featured Project
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-manrope)]">
                {featuredProject.title}
              </h2>
              <span className="inline-block mt-3 px-3 py-1 bg-orange-primary/10 text-orange-primary text-sm font-medium rounded-sm">
                {featuredProject.category}
              </span>
              <p className="mt-6 text-charcoal-500 leading-relaxed">
                {featuredProject.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/projects" variant="primary" icon>
                  View All Projects
                </Button>
                <Button href="/contact" variant="outline">
                  Discuss a Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS COUNTER
          ========================================== */}
      <StatsCounter stats={stats} />

      {/* ==========================================
          TESTIMONIALS
          ========================================== */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="section-padding" id="testimonials">
          <div className="container-davs">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Trusted by OEMs, Tier-1 suppliers, and aerospace organizations across India."
            />
            <TestimonialSlider testimonials={content.testimonials} />
          </div>
        </section>
      )}

      {/* ==========================================
          CTA SECTION
          ========================================== */}
      <section className="section-padding relative overflow-hidden" id="home-cta">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-davs relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-manrope)]">
            Let&apos;s Engineer Your Next Project
          </h2>
          <p className="mt-4 text-lg text-charcoal-500 max-w-xl mx-auto">
            From concept to manufacturing — get a detailed engineering consultation for your tooling requirements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon>
              Start a Conversation
            </Button>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-charcoal-500 hover:text-orange-primary transition-colors font-medium"
            >
              Learn About Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
