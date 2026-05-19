import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
	{ label: "The Model", href: "/the-model" },
	{ label: "Music Program", href: "/music-program" },
	{ label: "Admissions", href: "/admissions" },
	{ label: "Events", href: "/events" },
	{ label: "Guides", href: "/guides" },
	{ label: "Partners", href: "/partners" },
	{ label: "FAQ", href: "/faq" },
	{ label: "About", href: "/about" },
] as const;

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const { pathname } = useLocation();

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<Link to="/" className="flex items-center gap-3" aria-label="Home">
					<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan font-sans text-sm font-black text-navy">
						TCA
					</div>
					<div className="hidden sm:block">
						<span className="text-lg font-bold tracking-tight text-white">
							The Classical Academy
						</span>
					</div>
				</Link>

				<nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
								pathname === item.href
									? "bg-white/10 text-cyan"
									: "text-slate-light hover:bg-white/5 hover:text-white"
							}`}
						>
							{item.label}
						</Link>
					))}
					<Link
						to="/contact"
						className="ml-3 rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-cyan-light"
					>
						Contact
					</Link>
				</nav>

				<button
					type="button"
					className="rounded-md p-2 text-white lg:hidden"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
					aria-expanded={mobileOpen}
				>
					<svg
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						{mobileOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{mobileOpen && (
				<nav className="border-t border-white/10 bg-navy px-6 pb-6 pt-4 lg:hidden">
					<div className="flex flex-col gap-1">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.href}
								to={item.href}
								onClick={() => setMobileOpen(false)}
								className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
									pathname === item.href
										? "bg-white/10 text-cyan"
										: "text-slate-light hover:bg-white/5 hover:text-white"
								}`}
							>
								{item.label}
							</Link>
						))}
						<Link
							to="/contact"
							onClick={() => setMobileOpen(false)}
							className="mt-3 rounded-lg bg-cyan px-4 py-2.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-cyan-light"
						>
							Contact
						</Link>
					</div>
				</nav>
			)}
		</header>
	);
}
