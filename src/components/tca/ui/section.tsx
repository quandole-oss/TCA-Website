import type { ReactNode } from "react";

interface SectionProps {
	children: ReactNode;
	className?: string;
	dark?: boolean;
	id?: string;
}

export function Section({ children, className = "", dark = false, id }: SectionProps) {
	return (
		<section
			id={id}
			className={`px-6 py-20 md:py-28 ${dark ? "bg-navy text-white" : "bg-white text-navy"} ${className}`}
		>
			<div className="mx-auto max-w-7xl">{children}</div>
		</section>
	);
}

interface SectionHeaderProps {
	eyebrow?: string;
	title: string;
	subtitle?: string;
	centered?: boolean;
	dark?: boolean;
}

export function SectionHeader({
	eyebrow,
	title,
	subtitle,
	centered = false,
	dark = false,
}: SectionHeaderProps) {
	return (
		<div className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
			{eyebrow && (
				<p
					className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-cyan" : "text-cyan-dark"}`}
				>
					{eyebrow}
				</p>
			)}
			<h2
				className={`font-display text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl ${dark ? "text-white" : "text-navy"}`}
			>
				{title}
			</h2>
			{subtitle && (
				<p
					className={`mt-5 text-lg leading-relaxed ${dark ? "text-slate-light" : "text-slate-dark"}`}
				>
					{subtitle}
				</p>
			)}
		</div>
	);
}
