"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <div className="relative max-w-3xl mx-auto" id="testimonial-slider">
      {/* Quote Icon */}
      <div className="flex justify-center mb-8">
        <div className="w-14 h-14 bg-orange-primary/10 rounded-full flex items-center justify-center">
          <Quote size={24} className="text-orange-primary" />
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="text-center animate-fade-in" key={testimonial.id}>
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className="text-orange-primary fill-orange-primary"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl text-white leading-relaxed font-light italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="mt-8">
          <div className="w-12 h-12 bg-orange-primary rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg font-[family-name:var(--font-manrope)]">
            {testimonial.name.charAt(0)}
          </div>
          <p className="mt-3 text-white font-semibold">{testimonial.name}</p>
          <p className="text-sm text-charcoal-500">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={prev}
          className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-charcoal-500 hover:text-orange-primary hover:border-orange-primary transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current
                  ? "bg-orange-primary w-6"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-charcoal-500 hover:text-orange-primary hover:border-orange-primary transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
