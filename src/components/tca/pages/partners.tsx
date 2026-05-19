import { Card } from "@/components/tca/ui/card";
import { CTAButton } from "@/components/tca/ui/cta-button";
import { Section, SectionHeader } from "@/components/tca/ui/section";

const PARTNER_TYPES = [
	{
		type: "Private Teachers",
		collaboration:
			"Coordinate practice goals, theory support, ensemble opportunities, and mock auditions.",
		value: "Students arrive at lessons better prepared.",
	},
	{
		type: "Studios",
		collaboration: "Co-host workshops, camps, parent nights, or daytime programming.",
		value: "Lead generation, facility use, and goodwill.",
	},
	{
		type: "Youth Orchestras",
		collaboration: "Support preparation, excerpts, scales, and musicianship foundations.",
		value: "Better-prepared students and families.",
	},
	{
		type: "Churches & Venues",
		collaboration: "Host recitals, workshops, and parent events.",
		value: "Community programming and facility use.",
	},
	{
		type: "Instrument Shops",
		collaboration: "Co-host care nights, rental guidance, and beginner pathway sessions.",
		value: "Qualified family traffic and service referrals.",
	},
] as const;

export function PartnersPage() {
	return (
		<>
			<section className="bg-navy px-6 py-20 md:py-28">
				<div className="mx-auto max-w-5xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">
						Partnerships
					</p>
					<h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
						A school built to strengthen Austin's music ecosystem.
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-light">
						The Classical Academy is not asking families to abandon the teachers, studios, youth
						orchestras, and school programs that have helped their children grow. Our goal is to
						create daytime structure around the student's musical life: guided practice,
						musicianship, ensemble collaboration, performance readiness, parent reporting, and a
						coordinated plan that can support existing instruction.
					</p>
				</div>
			</section>

			<Section>
				<SectionHeader
					eyebrow="Partnership Model"
					title="We coordinate, not isolate."
					subtitle="TCA is designed to complement — not compete with — Austin's existing music ecosystem."
				/>
				<div className="space-y-6">
					{PARTNER_TYPES.map((partner) => (
						<Card key={partner.type}>
							<div className="flex flex-col gap-6 sm:flex-row sm:items-start">
								<div className="flex-1">
									<h3 className="mb-2 text-lg font-bold text-navy">{partner.type}</h3>
									<p className="text-sm leading-relaxed text-slate-dark">{partner.collaboration}</p>
								</div>
								<div className="shrink-0 rounded-lg bg-cyan/5 px-4 py-3 sm:max-w-64">
									<p className="text-xs font-semibold text-cyan-dark">
										Value returned: {partner.value}
									</p>
								</div>
							</div>
						</Card>
					))}
				</div>
			</Section>

			<Section dark>
				<div className="mx-auto max-w-3xl text-center">
					<SectionHeader eyebrow="Our Promise" title="Partnership-first, always." centered dark />
					<div className="space-y-6 text-lg leading-relaxed text-slate-light">
						<p>
							Austin has a vibrant, relationship-driven music community. TCA exists to strengthen
							that network, not disrupt it. We will never recruit away from existing teachers. We
							will never claim to replace private instruction. We will always seek collaboration
							before competition.
						</p>
						<p>
							If you are a teacher, studio owner, youth orchestra director, venue manager, or music
							organization leader, we would love to explore how TCA can support your work and the
							families you serve.
						</p>
					</div>
				</div>
			</Section>

			<Section>
				<img
					src="/partner-ecosystem.png"
					alt="TCA Partner Ecosystem showing connections to Private Teachers, Studios, Youth Orchestras, Churches & Venues, and Instrument Shops"
					className="w-full rounded-2xl border border-slate-light/50 object-cover"
				/>
			</Section>

			<section className="bg-navy px-6 py-20">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
						Let's explore a partnership.
					</h2>
					<p className="mt-4 text-lg text-slate-light">
						We'd love to learn about your work and discuss how TCA can support your students and
						community.
					</p>
					<div className="mt-8">
						<CTAButton to="/contact" size="lg">
							Start a Partner Conversation
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
