interface IconPlaceholderProps {
	label: string;
	size?: "sm" | "md" | "lg";
	className?: string;
}

const SIZES = {
	sm: "h-10 w-10 text-xs",
	md: "h-14 w-14 text-sm",
	lg: "h-20 w-20 text-base",
} as const;

export function IconPlaceholder({ label, size = "md", className = "" }: IconPlaceholderProps) {
	return (
		<div
			className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-navy/10 text-center font-semibold text-cyan-dark ${SIZES[size]} ${className}`}
			aria-hidden="true"
		>
			{label
				.split(" ")
				.map((w) => w[0])
				.join("")
				.slice(0, 2)
				.toUpperCase()}
		</div>
	);
}
