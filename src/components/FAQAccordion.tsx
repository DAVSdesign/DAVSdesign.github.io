"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto" id="faq-accordion">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-sm overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-orange-primary/30 bg-charcoal-800/60"
                : "border-white/5 bg-charcoal-800/30 hover:border-white/10"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span
                className={`text-sm font-semibold pr-4 transition-colors ${
                  isOpen ? "text-orange-primary" : "text-white"
                }`}
              >
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`text-charcoal-500 transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 text-orange-primary" : ""
                }`}
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 border-t border-white/5 pt-4">
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
