"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import content from "@/data/content.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-900/95 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-davs">
        <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="DAVS Home">
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg tracking-tight font-[family-name:var(--font-manrope)]">
                DAVS
              </span>
              <span className="hidden md:block text-charcoal-500 text-xs tracking-wider uppercase">
                Engineering Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {content.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-orange-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${content.company.contact.phone}`}
              className="flex items-center gap-2 text-sm text-charcoal-500 hover:text-white transition-colors"
              aria-label="Call us"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">{content.company.contact.phone}</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary text-sm animate-pulse-glow"
              id="navbar-cta"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-orange-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-charcoal-900/98 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        id="mobile-drawer"
      >
        <div className="container-davs py-8">
          <div className="flex flex-col gap-2">
            {content.navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-lg font-medium text-gray-300 hover:text-orange-primary hover:bg-white/5 rounded-sm transition-all duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center block"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${content.company.contact.phone}`}
              className="mt-4 flex items-center justify-center gap-2 text-charcoal-500 hover:text-white transition-colors py-3"
            >
              <Phone size={16} />
              {content.company.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
