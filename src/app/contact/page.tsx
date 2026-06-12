import type { Metadata } from "next";
import content from "@/data/content.json";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Get an Engineering Consultation",
  description:
    "Contact DAVS Integrated Engineering Solutions for precision tooling, CAD design, and manufacturing engineering services. Response within 24-48 hours.",
};

export default function ContactPage() {
  const { contact } = content.company;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" id="contact-hero">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-davs relative z-10">
          <span className="text-orange-primary text-sm font-semibold uppercase tracking-wider">
            Contact Us
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-manrope)] tracking-tight">
            Let&apos;s Build Something<br />
            <span className="text-orange-primary">Extraordinary</span>
          </h1>
          <p className="mt-6 text-lg text-charcoal-500 max-w-2xl">
            Describe your project requirements and we&apos;ll provide a detailed engineering
            consultation within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding" id="contact-section">
        <div className="container-davs">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column — Contact Info (Sticky) */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-manrope)]">
                    Contact Information
                  </h2>
                  <p className="mt-2 text-sm text-charcoal-500">
                    Reach out directly or fill out the form.
                  </p>
                </div>

                <div className="space-y-5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start gap-4 p-4 bg-charcoal-800 border border-white/5 rounded-sm hover:border-orange-primary/30 transition-all group"
                  >
                    <div className="w-10 h-10 bg-orange-primary/10 rounded-sm flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-orange-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-500 uppercase tracking-wider">Email</p>
                      <p className="text-white font-medium text-sm group-hover:text-orange-primary transition-colors">
                        {contact.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-start gap-4 p-4 bg-charcoal-800 border border-white/5 rounded-sm hover:border-orange-primary/30 transition-all group"
                  >
                    <div className="w-10 h-10 bg-orange-primary/10 rounded-sm flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-orange-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-500 uppercase tracking-wider">Phone</p>
                      <p className="text-white font-medium text-sm group-hover:text-orange-primary transition-colors">
                        {contact.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-charcoal-800 border border-white/5 rounded-sm">
                    <div className="w-10 h-10 bg-orange-primary/10 rounded-sm flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-orange-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-500 uppercase tracking-wider">Address</p>
                      <p className="text-white font-medium text-sm">
                        {contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-charcoal-800 border border-white/5 rounded-sm">
                    <div className="w-10 h-10 bg-orange-primary/10 rounded-sm flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-orange-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-500 uppercase tracking-wider">Business Hours</p>
                      <p className="text-white font-medium text-sm">
                        {contact.businessHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Urgency note */}
                <div className="p-4 bg-orange-primary/5 border border-orange-primary/20 rounded-sm">
                  <p className="text-sm text-orange-primary font-medium flex items-center gap-2">
                    <Clock size={14} />
                    Current evaluation turnaround: 24-48 hours
                  </p>
                </div>

                {/* LinkedIn */}
                {contact.social.linkedin && (
                  <a
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-charcoal-500 hover:text-orange-primary transition-colors"
                  >
                    Connect on LinkedIn
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="lg:col-span-3">
              <div className="card-industrial p-6 md:p-8">
                <h2 className="text-xl font-bold text-white font-[family-name:var(--font-manrope)] mb-2">
                  Request an Engineering Consultation
                </h2>
                <p className="text-sm text-charcoal-500 mb-8">
                  Fill out the form below and our engineering team will review your requirements.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-white/5" id="map-section">
        <div className="h-80 bg-charcoal-800 relative">
          <iframe
            src={contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DAVS Engineering Location"
            className="grayscale contrast-125 opacity-70"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-charcoal-900/50 to-transparent" />
        </div>
      </section>
    </>
  );
}
