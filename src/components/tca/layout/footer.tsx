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
	Connect: [{ label: "Contact", href: "/contact" }],
} as const;

export function Footer() {
	return (
		<footer className="border-t border-white/10 bg-navy-dark text-slate-light">
			<div className="mx-auto max-w-7xl px-6 py-16">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<div className="mb-4 flex items-center gap-3">
							<img src="/tca-logo.png" alt="TCA" className="h-9 w-9 rounded-lg object-contain" />
							<span className="text-lg font-bold text-white">The Classical Academy</span>
						</div>
						<p className="mb-6 text-sm leading-relaxed text-slate">
							An Alpha School specialty academy for young musicians. Accelerated academics in the
							morning, conservatory-style music training in the afternoon.
						</p>
						<p className="text-xs text-slate-dark">Austin, Texas</p>
					</div>

					{Object.entries(FOOTER_LINKS).map(([heading, links]) => (
						<div key={heading}>
							<h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
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

				<div className="mt-16 border-t border-white/10 pt-8">
					<p className="text-center text-xs text-slate-dark">
						&copy; {new Date().getFullYear()} The Classical Academy. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
