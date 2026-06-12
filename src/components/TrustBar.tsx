import { Shield, Award, CheckCircle, Star } from "lucide-react";

interface TrustBadge {
  name: string;
  description: string;
}

interface TrustBarProps {
  badges: TrustBadge[];
}

const badgeIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "HAL Certified": Shield,
  "ISO 9001:2015": Award,
  "AS9100D": CheckCircle,
  "NABL": Star,
};

export default function TrustBar({ badges }: TrustBarProps) {
  return (
    <section className="border-y border-white/5 bg-charcoal-800/50" id="trust-bar">
      <div className="container-davs py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {badges.map((badge) => {
            const Icon = badgeIcons[badge.name] || Shield;
            return (
              <div
                key={badge.name}
                className="flex items-center gap-3 group"
                title={badge.description}
              >
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-orange-primary/30 transition-colors">
                  <Icon
                    size={20}
                    className="text-charcoal-500 group-hover:text-orange-primary transition-colors"
                  />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block leading-tight">
                    {badge.name}
                  </span>
                  <span className="text-xs text-charcoal-500 hidden sm:block">
                    {badge.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
