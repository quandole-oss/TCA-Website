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

const ICON_MAP: Record<string, string> = {
	"Guided Practice": "/icons/guided-practice.png",
	Musicianship: "/icons/musicianship.png",
	"Musicianship & Theory": "/icons/musicianship.png",
	Ensemble: "/icons/ensemble.png",
	"Ensemble & Collaboration": "/icons/ensemble.png",
	Performance: "/icons/performance.png",
	"Performance Lab": "/icons/performance.png",
	Repertoire: "/icons/repertoire.png",
	"Repertoire Planning": "/icons/repertoire.png",
	"Life Skills": "/icons/life-skills.png",
	"Accelerated Academics": "/icons/accelerated-academics.png",
	"Academic Confidence": "/icons/academic-confidence.png",
	"Practice Habits": "/icons/practice-habits.png",
	"Ensemble Responsibility": "/icons/ensemble-responsibility.png",
	"Performance Confidence": "/icons/performance-confidence.png",
	"Feedback Literacy": "/icons/feedback-literacy.png",
};

export function IconPlaceholder({ label, size = "md", className = "" }: IconPlaceholderProps) {
	const src = ICON_MAP[label];

	if (src) {
		return (
			<img
				src={src}
				alt={label}
				className={`rounded-xl object-contain ${SIZES[size]} ${className}`}
			/>
		);
	}

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
