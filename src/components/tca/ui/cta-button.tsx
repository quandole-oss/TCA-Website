import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CTAButtonProps {
	to: string;
	children: ReactNode;
	variant?: "primary" | "secondary" | "outline";
	size?: "md" | "lg";
	className?: string;
}

const VARIANTS = {
	primary: "bg-cyan text-navy font-semibold hover:bg-cyan-light",
	secondary: "bg-gold text-navy font-semibold hover:bg-gold-light",
	outline: "border-2 border-cyan text-cyan font-semibold hover:bg-cyan hover:text-navy",
} as const;

const SIZES = {
	md: "px-6 py-3 text-sm",
	lg: "px-8 py-4 text-base",
} as const;

export function CTAButton({
	to,
	children,
	variant = "primary",
	size = "md",
	className = "",
}: CTAButtonProps) {
	return (
		<Link
			to={to}
			className={`inline-block rounded-lg transition-all duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
		>
			{children}
		</Link>
	);
}
