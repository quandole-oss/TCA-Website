import { Card } from "@/components/tca/ui/card";
import { CTAButton } from "@/components/tca/ui/cta-button";
import { Section, SectionHeader } from "@/components/tca/ui/section";

const GUIDE_ROLES = [
	{
		title: "Fractional Music Director",
		description:
			"Sets artistic standards, recruits founding guide bench, advises repertoire and events. A senior leadership role for an experienced musician-educator.",
	},
	{
		title: "Lead Musicianship Guide",
		description:
			"Designs the theory, ear training, rhythm, listening, and sight-reading sequence. Builds the musicianship curriculum from day one.",
	},
	{
		title: "Instrument Specialists",
		description:
			"Teach workshops, coach repertoire, run sectionals, and support guided practice. Specialists bring deep expertise on specific instruments.",
	},
	{
		title: "Ensemble Coaches",
		description:
			"Lead chamber groups, choir, rhythm labs, accompaniment, and performance labs. Build collaborative music-making culture.",
	},
	{
		title: "Apprentice Guides",
		description:
			"Support students under senior supervision without replacing expert instruction. An opportunity for emerging musician-educators.",
	},
] as const;

const BENEFITS = [
	"Meaningful weekday teaching with serious young students",
	"Mission-aligned work at a school that respects artistry",
	"Ability to keep performing and maintaining your own career",
	"Founding-team status and influence on school culture",
	"Collaborative environment with other performer-educators",
	"Structured feedback and professional development",
] as const;

export function GuidesPage() {
	return (
		<>
			<section className="bg-navy px-6 py-20 md:py-28">
				<div className="mx-auto max-w-5xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">
						Founding Guides
					</p>
					<h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
						Keep performing. Build the next generation. Teach with purpose during the school day.
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-light">
						We are forming a founding bench of Austin performer-educators for a music-centered Alpha
						specialty academy. TCA is designed for guides who are excellent with children, serious
						about craft, comfortable with structured feedback, and excited to build a culture of
						joy, rigor, and musicianship.
					</p>
				</div>
			</section>

			<Section>
				<SectionHeader
					eyebrow="Guide Roles"
					title="Founding positions at TCA."
					subtitle="Each role is designed to leverage deep musical expertise within a structured school environment."
				/>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{GUIDE_ROLES.map((role) => (
						<Card key={role.title}>
							<h3 className="mb-3 text-lg font-bold text-navy">{role.title}</h3>
							<p className="text-sm leading-relaxed text-slate-dark">{role.description}</p>
						</Card>
					))}
				</div>
			</Section>

			<Section dark>
				<SectionHeader eyebrow="Why TCA" title="What guides gain at TCA." centered dark />
				<div className="mx-auto max-w-3xl">
					<div className="grid gap-4 sm:grid-cols-2">
						{BENEFITS.map((benefit) => (
							<div
								key={benefit}
								className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
							>
								<span className="mt-0.5 text-cyan">&#10003;</span>
								<p className="text-sm text-slate-light">{benefit}</p>
							</div>
						))}
					</div>
				</div>
			</Section>

			<Section>
				<div className="mx-auto max-w-3xl text-center">
					<SectionHeader eyebrow="Who We're Looking For" title="The TCA guide profile." centered />
					<p className="text-lg leading-relaxed text-slate-dark">
						We are looking for musician-educators who combine professional artistry with a gift for
						teaching young people. You do not need traditional school teaching experience — but you
						do need patience, structure, warmth, and a genuine love for helping students grow as
						both musicians and people.
					</p>
				</div>
			</Section>

			<section className="bg-navy px-6 py-20">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
						Interested in a founding guide role?
					</h2>
					<p className="mt-4 text-lg text-slate-light">
						Start a conversation with our team. We'd value your perspective.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<CTAButton to="/contact" size="lg">
							Join the Founding Guide Bench
						</CTAButton>
						<CTAButton to="/events" variant="outline" size="lg">
							Attend a Guide Salon
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
