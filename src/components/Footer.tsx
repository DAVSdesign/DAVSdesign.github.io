import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import content from "@/data/content.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 border-t border-white/5" id="footer">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="container-davs py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-manrope)]">
                Ready to Start Your Project?
              </h3>
              <p className="mt-2 text-charcoal-500 text-lg">
                Get a detailed engineering consultation within 24-48 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary text-base flex items-center gap-2 shrink-0"
              id="footer-cta"
            >
              Discuss Your Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-davs py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div>
                <span className="text-white font-bold text-lg font-[family-name:var(--font-manrope)]">
                  DAVS
                </span>
                <span className="block text-charcoal-500 text-xs tracking-wider uppercase">
                  Engineering Solutions
                </span>
              </div>
            </div>
            <p className="text-charcoal-500 text-sm leading-relaxed">
              {content.company.tagline}
            </p>
            <div className="flex gap-3 mt-6">
              {content.company.contact.social.linkedin && (
                <a
                  href={content.company.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-charcoal-500 hover:text-orange-primary hover:border-orange-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <ExternalLink size={18} />
                </a>
              )}
              {content.company.contact.social.twitter && (
                <a
                  href={content.company.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-charcoal-500 hover:text-orange-primary hover:border-orange-primary transition-all"
                  aria-label="Twitter"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {content.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-charcoal-500 hover:text-orange-primary text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-orange-primary transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {content.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-charcoal-500 hover:text-orange-primary text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-orange-primary transition-all duration-200" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${content.company.contact.email}`}
                  className="flex items-start gap-3 text-charcoal-500 hover:text-orange-primary text-sm transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  {content.company.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content.company.contact.phone}`}
                  className="flex items-start gap-3 text-charcoal-500 hover:text-orange-primary text-sm transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  {content.company.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-charcoal-500 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {content.company.contact.address}
              </li>
            </ul>
            <div className="mt-6 p-3 bg-white/5 rounded-sm border border-white/5">
              <p className="text-xs text-charcoal-500">
                <span className="text-orange-primary font-semibold">Business Hours</span>
                <br />
                {content.company.contact.businessHours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-davs py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-600 text-xs">
            © {currentYear} {content.company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-charcoal-600">
            <span>Precision by Design</span>
            <span className="w-1 h-1 bg-orange-primary rounded-full" />
            <span>Excellence by Commitment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
