interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        alignment === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-manrope)] tracking-tight ${
          light ? "text-charcoal-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 bg-orange-primary rounded-full ${
          alignment === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mt-6 text-lg max-w-2xl ${
            alignment === "center" ? "mx-auto" : ""
          } ${light ? "text-charcoal-600" : "text-charcoal-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
