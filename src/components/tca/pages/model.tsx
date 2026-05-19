import { Card } from "@/components/tca/ui/card";
import { CTAButton } from "@/components/tca/ui/cta-button";
import { IconPlaceholder } from "@/components/tca/ui/icon-placeholder";
import { Section, SectionHeader } from "@/components/tca/ui/section";

const SCHEDULE = [
	{
		time: "8:00 \u2013 8:15 AM",
		block: "Arrival & Morning Meeting",
		description: "Community check-in, goal setting, and day planning.",
	},
	{
		time: "8:15 \u2013 11:00 AM",
		block: "Academic Mastery Block",
		description:
			"Focused, mastery-based academics through the Alpha model. Students work through core subjects with personalized pacing.",
	},
	{
		time: "11:00 \u2013 11:30 AM",
		block: "Break & Transition",
		description: "Movement, snack, and mental shift from academics to music.",
	},
	{
		time: "11:30 AM \u2013 12:30 PM",
		block: "Guided Practice",
		description: "Individual practice with guide feedback, clear goals, and accountability.",
	},
	{
		time: "12:30 \u2013 1:00 PM",
		block: "Lunch",
		description: "Community meal and informal peer connection.",
	},
	{
		time: "1:00 \u2013 2:00 PM",
		block: "Musicianship & Theory",
		description: "Ear training, notation, rhythm, harmony, sight-reading, analysis, and listening.",
	},
	{
		time: "2:00 \u2013 3:00 PM",
		block: "Ensemble & Performance",
		description:
			"Chamber music, choir, rhythm labs, studio classes, mock auditions, and performance preparation.",
	},
	{
		time: "3:00 \u2013 3:30 PM",
		block: "Reflection & Reporting",
		description: "Practice journaling, parent progress updates, and goal review for the next day.",
	},
] as const;

const STUDENT_OUTCOMES = [
	{
		icon: "Academic Confidence",
		title: "Academic Confidence",
		description: "Mastery-based progression builds genuine understanding, not rote completion.",
	},
	{
		icon: "Practice Habits",
		title: "Practice Habits",
		description:
			"Daily guided practice replaces fragmented after-school routines with structured growth.",
	},
	{
		icon: "Ensemble Responsibility",
		title: "Ensemble Responsibility",
		description:
			"Students learn accountability, listening, and leadership through collaborative music-making.",
	},
	{
		icon: "Performance Confidence",
		title: "Performance Confidence",
		description:
			"Repeated low-risk performances build stage presence and reduce anxiety over time.",
	},
	{
		icon: "Feedback Literacy",
		title: "Feedback Literacy",
		description:
			"Students learn to give, receive, and act on constructive critique — a transferable life skill.",
	},
] as const;

const COMPARISONS = [
	{
		model: "Traditional Private School",
		difference: "Academics consume the full day. Music is an elective or after-school activity.",
	},
	{
		model: "Homeschool Co-op",
		difference:
			"Families carry the academic planning burden. Musical structure depends on parent coordination.",
	},
	{
		model: "Private Lesson Studio",
		difference: "Weekly lessons inspire, but don't provide daily structure or ensemble culture.",
	},
	{
		model: "Alpha Austin (General)",
		difference:
			"Same academic model, but afternoons focus on general life skills rather than conservatory training.",
	},
	{
		model: "Texas Sports Academy",
		difference:
			"Same ecosystem logic — but TSA uses the Alpha model through sports. TCA uses it through music.",
	},
] as const;

export function ModelPage() {
	return (
		<>
			<section className="bg-navy px-6 py-20 md:py-28">
				<div className="mx-auto max-w-5xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">
						The TCA Model
					</p>
					<h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
						Alpha academics through the lens of music.
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-light">
						The Classical Academy is built on a simple premise: when children complete academics
						efficiently and spend the rest of the day pursuing a serious passion, school becomes
						more purposeful. For TCA students, that passion is music.
					</p>
					<div className="mt-8">
						<CTAButton to="/events" size="lg">
							Attend an Info Session
						</CTAButton>
					</div>
				</div>
			</section>

			<Section>
				<SectionHeader
					eyebrow="A Day at TCA"
					title="Morning academics. Afternoon conservatory. All-day purpose."
					subtitle="Here's how a typical day unfolds for TCA students."
				/>
				<div className="space-y-3">
					{SCHEDULE.map((block) => (
						<div
							key={block.block}
							className="flex flex-col gap-4 rounded-xl border border-slate-light/50 bg-white p-6 sm:flex-row sm:items-start"
						>
							<div className="shrink-0 text-sm font-semibold text-cyan-dark sm:w-40">
								{block.time}
							</div>
							<div>
								<h3 className="font-bold text-navy">{block.block}</h3>
								<p className="mt-1 text-sm leading-relaxed text-slate-dark">{block.description}</p>
							</div>
						</div>
					))}
				</div>
			</Section>

			<Section dark>
				<SectionHeader
					eyebrow="What Students Build"
					title="Academics and artistry as mutually reinforcing."
					subtitle="The result is a day that treats academics and artistry as mutually reinforcing instead of competing for the same limited after-school hours."
					centered
					dark
				/>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{STUDENT_OUTCOMES.map((outcome) => (
						<Card key={outcome.title} dark>
							<IconPlaceholder label={outcome.icon} size="sm" className="mb-3" />
							<h3 className="mb-1.5 font-bold text-white">{outcome.title}</h3>
							<p className="text-sm leading-relaxed text-slate">{outcome.description}</p>
						</Card>
					))}
				</div>
			</Section>

			<Section>
				<SectionHeader
					eyebrow="How TCA Compares"
					title="What this is — and what it is not."
					subtitle="TCA occupies a specific category: Alpha academics plus daily conservatory life."
				/>
				<div className="space-y-4">
					{COMPARISONS.map((comp) => (
						<div
							key={comp.model}
							className="flex flex-col gap-4 rounded-xl border border-slate-light/50 p-6 sm:flex-row"
						>
							<div className="shrink-0 font-bold text-navy sm:w-56">{comp.model}</div>
							<p className="text-sm leading-relaxed text-slate-dark">{comp.difference}</p>
						</div>
					))}
				</div>
				<div className="mt-4 rounded-xl border-2 border-cyan/30 bg-cyan/5 p-6">
					<p className="text-sm leading-relaxed text-navy">
						<span className="font-bold">TCA:</span> Students use the Alpha academic structure, but
						afternoons are organized around music rather than general life-skills workshops. The day
						treats academics and artistry as mutually reinforcing.
					</p>
				</div>
			</Section>

			<section className="bg-navy px-6 py-20">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
						See the model in action.
					</h2>
					<p className="mt-4 text-lg text-slate-light">
						Attend an info session or register for a Saturday Conservatory Day.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<CTAButton to="/events" size="lg">
							Attend an Info Session
						</CTAButton>
						<CTAButton to="/admissions" variant="outline" size="lg">
							Book a Family Fit Call
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
