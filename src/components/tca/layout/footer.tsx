import { Link } from "react-router-dom";

const FOOTER_LINKS = {
	"The School": [
		{ label: "The Model", href: "/the-model" },
		{ label: "Music Program", href: "/music-program" },
		{ label: "About", href: "/about" },
		{ label: "FAQ", href: "/faq" },
	],
	"Get Involved": [
		{ label: "Admissions", href: "/admissions" },
		{ label: "Events", href: "/events" },
		{ label: "Guides", href: "/guides" },
		{ label: "Partners", href: "/partners" },
	],
	Resources: [{ label: "Contact", href: "/contact" }],
} as const;

const OTHER_SCHOOLS = [
	{ label: "Alpha School", href: "https://alpha.school" },
	{ label: "Future of Education", href: "https://futureofeducation.school" },
	{ label: "GT School", href: "https://gt.school" },
	{ label: "Texas Sports Academy", href: "https://sportsacademy.school" },
	{ label: "NextGen Academy", href: "https://nextgenacademy.school" },
	{ label: "Nova Academy", href: "https://novaacademy.school" },
];

export function Footer() {
	return (
		<footer className="bg-navy-dark text-slate-light">
			<div className="mx-auto max-w-7xl px-6 py-16">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
					<div className="lg:col-span-2">
						<div className="mb-4 flex items-center gap-3">
							<img src="/tca-logo.png" alt="TCA" className="h-10 w-10 object-contain" />
							<span className="font-display text-lg font-bold uppercase tracking-wide text-white">
								The Classical Academy
							</span>
						</div>
						<p className="mb-6 text-sm leading-relaxed text-slate">
							The music academy of Alpha School. Accelerated academics in the morning,
							conservatory-style music training in the afternoon.
						</p>
						<p className="mb-4 text-xs text-slate-dark">Austin, Texas</p>
						<a
							href="mailto:info@classicalacademy.school"
							className="text-sm text-slate transition-colors hover:text-white"
						>
							info@classicalacademy.school
						</a>
					</div>

					{Object.entries(FOOTER_LINKS).map(([heading, links]) => (
						<div key={heading}>
							<h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
								{heading}
							</h3>
							<ul className="space-y-2.5">
								{links.map((link) => (
									<li key={link.href}>
										<Link
											to={link.href}
											className="text-sm text-slate transition-colors hover:text-white"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 border-t border-white/10 pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<div className="flex flex-wrap items-center gap-4 text-xs text-slate-dark">
							<span>Other Schools:</span>
							{OTHER_SCHOOLS.map((school) => (
								<a
									key={school.href}
									href={school.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-slate transition-colors hover:text-white"
								>
									{school.label}
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="mt-8 border-t border-white/10 pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p className="text-xs text-slate-dark">
							&copy; {new Date().getFullYear()} The Classical Academy. All rights reserved.
						</p>
						<div className="flex items-center gap-6 text-xs text-slate-dark">
							<Link to="/privacy" className="transition-colors hover:text-white">
								Privacy Policy
							</Link>
							<Link to="/terms" className="transition-colors hover:text-white">
								Terms of Use
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
