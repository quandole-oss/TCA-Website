import { CTAButton } from "@/components/tca/ui/cta-button";
import { Section, SectionHeader } from "@/components/tca/ui/section";

const VALUES = [
	{
		trait: "Mastery-driven",
		meaning: "Students progress through deliberate practice, feedback, and clear goals.",
		expression: "Practice with purpose, not just minutes.",
	},
	{
		trait: "Joyful",
		meaning:
			"Music is challenging but life-giving. The school avoids grim conservatory stereotypes.",
		expression: "A school day your young musician can't wait to begin.",
	},
	{
		trait: "Transparent",
		meaning: "Pilot-stage realities, fit process, tuition, and expectations are plainly explained.",
		expression: "Founding families deserve clarity before commitment.",
	},
	{
		trait: "Collaborative",
		meaning:
			"Existing teachers, studios, youth orchestras, and school programs are part of the ecosystem.",
		expression: "We are here to coordinate, not isolate.",
	},
	{
		trait: "Alpha-aligned",
		meaning:
			"The school is visibly connected to the Alpha model without losing its own musical identity.",
		expression: "Crush academics. Build musicianship. Love school.",
	},
] as const;

export function AboutPage() {
	return (
		<>
			<section className="bg-navy px-6 py-20 md:py-28">
				<div className="mx-auto max-w-5xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">About</p>
					<h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
						A school day built around musical growth.
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-light">
						The Classical Academy is an Alpha School specialty academy for young musicians in
						Austin, Texas. We combine accelerated academics with daily conservatory-style training,
						giving serious young musicians the structured school day their artistry deserves.
					</p>
				</div>
			</section>

			<Section>
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div>
						<SectionHeader
							eyebrow="Our Mission"
							title="When music gets the school day, everything changes."
						/>
						<div className="space-y-4 text-lg leading-relaxed text-slate-dark">
							<p>
								For too many serious young musicians, school and music compete for the same limited
								hours. Conventional school consumes the best part of the day, practice becomes
								fragmented, and musical growth happens only in the margins.
							</p>
							<p>
								TCA solves this by combining Alpha's proven academic model with a conservatory
								afternoon: guided practice, musicianship, ensemble work, performance preparation,
								and the habits that make artistry sustainable.
							</p>
							<p>
								The result is a school day where academics and music reinforce each other — and
								where students can pursue both with depth.
							</p>
						</div>
					</div>
					<div className="flex aspect-square items-center justify-center rounded-2xl border border-slate-light/50 bg-muted">
						<div className="text-center text-slate-dark">
							<div className="mb-2 text-4xl">&#127911;</div>
							<p className="text-sm">Mission visual placeholder</p>
						</div>
					</div>
				</div>
			</Section>

			<Section dark>
				<SectionHeader
					eyebrow="The Alpha Ecosystem"
					title="Built on a proven academic foundation."
					centered
					dark
				/>
				<div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-slate-light">
					<p>
						Alpha School's public positioning emphasizes students completing academics in two hours
						and spending the rest of the day on life skills and team-based workshops. Texas Sports
						Academy uses the same ecosystem logic by combining accelerated academics with
						sport-specific afternoon development.
					</p>
					<p>
						The Classical Academy is the music parallel. Students use the same mastery-based
						academic model in the morning, then spend the afternoon in structured conservatory
						training. Same philosophy, different passion lens.
					</p>
				</div>
				<div className="mx-auto mt-10 max-w-xl text-center">
					<div className="rounded-2xl border border-white/10 bg-white/5 p-8">
						<p className="font-serif text-xl italic text-white">
							"Texas Sports Academy is the sports lens. The Classical Academy is the music lens."
						</p>
					</div>
				</div>
			</Section>

			<Section>
				<SectionHeader
					eyebrow="Our Values"
					title="Joy plus rigor."
					subtitle="Children love school, love music, and are held to high standards by adults who respect both childhood and artistry."
					centered
				/>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{VALUES.map((value) => (
						<div
							key={value.trait}
							className="rounded-2xl border border-slate-light/50 bg-white p-8"
						>
							<h3 className="mb-2 text-lg font-bold text-navy">{value.trait}</h3>
							<p className="mb-4 text-sm leading-relaxed text-slate-dark">{value.meaning}</p>
							<p className="text-sm font-semibold italic text-cyan-dark">"{value.expression}"</p>
						</div>
					))}
				</div>
			</Section>

			<Section dark>
				<div className="mx-auto max-w-3xl text-center">
					<SectionHeader eyebrow="Austin, Texas" title="Launching in Austin." centered dark />
					<p className="text-lg leading-relaxed text-slate-light">
						Austin's vibrant music culture, strong alternative-education community, and growing
						demand for specialized schooling make it the ideal launch city for The Classical
						Academy. We are building TCA to complement Austin's existing music ecosystem — its
						teachers, studios, youth orchestras, and venues — not to compete with it.
					</p>
				</div>
			</Section>

			<section className="bg-navy px-6 py-20">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
						Be part of the founding story.
					</h2>
					<p className="mt-4 text-lg text-slate-light">
						Whether you're a parent, a musician-educator, or a community partner, there's a place
						for you at TCA.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<CTAButton to="/admissions" size="lg">
							Explore Admissions
						</CTAButton>
						<CTAButton to="/guides" variant="outline" size="lg">
							Join the Guide Bench
						</CTAButton>
						<CTAButton to="/partners" variant="secondary" size="lg">
							Become a Partner
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
