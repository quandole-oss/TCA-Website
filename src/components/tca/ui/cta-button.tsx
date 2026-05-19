import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CTAButtonProps {
	to: string;
	children: ReactNode;
	variant?: "primary" | "secondary" | "outline" | "ghost";
	size?: "md" | "lg";
	className?: string;
}

const VARIANTS = {
	primary: "bg-gold text-navy font-bold hover:bg-gold-light shadow-lg shadow-gold/20",
	secondary: "bg-cyan text-navy font-bold hover:bg-cyan-light shadow-lg shadow-cyan/20",
	outline: "border-2 border-white text-white font-bold hover:bg-white/10",
	ghost: "text-white font-semibold hover:text-cyan uppercase tracking-wider",
} as const;

const SIZES = {
	md: "px-7 py-3.5 text-sm",
	lg: "px-9 py-4.5 text-base",
} as const;

export function CTAButton({
	to,
	children,
	variant = "primary",
	size = "md",
	className = "",
}: CTAButtonProps) {
	const showArrow = variant === "primary" || variant === "ghost";
	return (
		<Link
			to={to}
			className={`inline-flex items-center gap-2 rounded-full transition-all duration-300 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
		>
			{children}
			{showArrow && (
				<svg
					className="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2.5}
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
					/>
				</svg>
			)}
		</Link>
	);
}
