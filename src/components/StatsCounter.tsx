"use client";

import { useEffect, useState, useRef } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-manrope)] tabular-nums">
      {count}
      <span className="text-orange-primary">{suffix}</span>
    </div>
  );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <section className="bg-charcoal-800/50 border-y border-white/5" id="stats-section">
      <div className="container-davs py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-charcoal-500 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
