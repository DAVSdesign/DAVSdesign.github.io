import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-orange-primary text-white font-semibold rounded-sm border-none hover:bg-orange-hover hover:shadow-[0_4px_16px_-2px_rgba(255,90,0,0.3)] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "bg-transparent text-white font-semibold rounded-sm border-2 border-charcoal-600 hover:border-orange-primary hover:text-orange-primary",
  ghost:
    "bg-transparent text-orange-primary font-semibold border-none hover:text-orange-light hover:underline",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon = false,
  type = "button",
  disabled = false,
  id,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
    disabled ? "opacity-50 pointer-events-none" : ""
  } ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowUpRight size={16} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} id={id} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      id={id}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
