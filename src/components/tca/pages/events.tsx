import { Card } from "@/components/tca/ui/card";
import { CTAButton } from "@/components/tca/ui/cta-button";
import { Section, SectionHeader } from "@/components/tca/ui/section";

const EVENTS = [
	{
		title: "Parent Info Session",
		type: "Virtual / In-Person",
		description:
			"A comprehensive introduction to the TCA model. Learn about Alpha-style academics, the conservatory afternoon, admissions process, and what founding families can expect. Q&A included.",
		audience: "Parents considering TCA for their child.",
		value: "Understand before applying.",
		dates: "Dates to be announced",
	},
	{
		title: "Saturday Conservatory Day",
		type: "In-Person",
		description:
			"A half-day student experience: musicianship warm-up, guided practice with feedback, ensemble exploration, and a parent Q&A session. This is not an audition — it is a low-risk way to see whether daily music-centered school could be a strong fit.",
		audience: "Students and parents.",
		value: "Experience the TCA model firsthand.",
		dates: "Dates to be announced",
	},
	{
		title: "Musicianship Diagnostic",
		type: "In-Person",
		description:
			"A friendly assessment of theory, rhythm, ear, sight-reading, and practice habits. Every student receives feedback and a personalized practice plan — regardless of enrollment interest.",
		audience: "Students (grades 4\u20138).",
		value: "Get actionable feedback and a practice plan.",
		dates: "By appointment",
	},
	{
		title: "Mock Audition Day",
		type: "In-Person",
		description:
			"Students prepare scales, excerpts, and a solo, then receive constructive feedback from TCA guides. Builds confidence through repeated low-risk performance without shame.",
		audience: "Students preparing for auditions or competitions.",
		value: "Build performance confidence.",
		dates: "Dates to be announced",
	},
	{
		title: "Guide Salon",
		type: "In-Person / Virtual",
		description:
			"Performer-educators discuss and demonstrate teaching at TCA. An opportunity for prospective guides to learn about the role, meet the team, and explore founding guide opportunities.",
		audience: "Musicians, teachers, performer-educators.",
		value: "Explore founding guide roles.",
		dates: "Dates to be announced",
	},
] as const;

export function EventsPage() {
	return (
		<>
			<section className="bg-navy px-6 py-20 md:py-28">
				<div className="mx-auto max-w-5xl text-center">
					<p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan">Events</p>
					<h1 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl lg:text-6xl">
						Experience TCA before you apply.
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-light">
						We believe families should understand the model, meet the team, and see the environment
						before making any commitment. Our events are designed to educate, not pressure.
					</p>
				</div>
			</section>

			<Section>
				<SectionHeader
					eyebrow="Upcoming Events"
					title="Find the right next step for your family."
				/>
				<div className="space-y-8">
					{EVENTS.map((event) => (
						<Card key={event.title}>
							<div className="flex flex-col gap-6 lg:flex-row lg:items-start">
								<div className="flex-1">
									<div className="mb-2 flex flex-wrap items-center gap-3">
										<h3 className="text-xl font-bold text-navy">{event.title}</h3>
										<span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan-dark">
											{event.type}
										</span>
									</div>
									<p className="mb-4 text-sm leading-relaxed text-slate-dark">
										{event.description}
									</p>
									<div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
										<p className="text-xs text-slate-dark">
											<span className="font-semibold">For:</span> {event.audience}
										</p>
										<p className="text-xs text-slate-dark">
											<span className="font-semibold">You'll gain:</span> {event.value}
										</p>
									</div>
								</div>
								<div className="shrink-0 text-center lg:text-right">
									<p className="mb-3 text-sm font-semibold text-navy">{event.dates}</p>
									<CTAButton to="/contact" size="md">
										Register Interest
									</CTAButton>
								</div>
							</div>
						</Card>
					))}
				</div>
			</Section>

			<section className="bg-navy px-6 py-20">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-display text-3xl font-extrabold uppercase text-white md:text-4xl">
						Don't see a date that works?
					</h2>
					<p className="mt-4 text-lg text-slate-light">
						Join our interest list and we'll notify you when new events are scheduled.
					</p>
					<div className="mt-8">
						<CTAButton to="/contact" size="lg">
							Stay in the Know
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
