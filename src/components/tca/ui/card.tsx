import type { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
	dark?: boolean;
}

export function Card({ children, className = "", dark = false }: CardProps) {
	return (
		<div
			className={`rounded-2xl border p-8 transition-all duration-300 ${
				dark
					? "border-white/10 bg-white/5 hover:border-cyan/30 hover:bg-white/10"
					: "border-slate-light/50 bg-white shadow-sm hover:shadow-lg hover:border-cyan/30"
			} ${className}`}
		>
			{children}
		</div>
	);
}
