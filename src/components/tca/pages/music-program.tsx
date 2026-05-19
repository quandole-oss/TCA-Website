import { Card } from "@/components/tca/ui/card";
import { CTAButton } from "@/components/tca/ui/cta-button";
import { IconPlaceholder } from "@/components/tca/ui/icon-placeholder";
import { Section, SectionHeader } from "@/components/tca/ui/section";

const PROGRAM_COMPONENTS = [
	{
		icon: "Guided Practice",
		title: "Guided Practice",
		description:
			"Students practice with adult feedback, clear goals, and accountability. Practice becomes productive instead of parent-policed.",
		parentBenefit: "Practice becomes productive instead of parent-policed.",
	},
	{
		icon: "Musicianship",
		title: "Musicianship & Theory",
		description:
			"Ear training, notation, rhythm, harmony, sight-reading, analysis, and listening. Students understand the music they play.",
		parentBenefit: "Students understand the music they play.",
	},
	{
		icon: "Repertoire",
		title: "Repertoire Planning",
		description:
			"Students coordinate goals with guides and, when appropriate, outside teachers. Lessons and daily practice connect.",
		parentBenefit: "Lessons and daily practice connect.",
	},
	{
		icon: "Ensemble",
		title: "Ensemble & Collaboration",
		description:
			"Chamber music, choir, rhythm labs, studio classes, accompaniment, and peer feedback. Students learn responsibility to others.",
		parentBenefit: "Students learn responsibility to others.",
	},
	{
		icon: "Performance Lab",
		title: "Performance Lab",
		description:
			"Recitals, mock auditions, studio classes, stage presence, and reflection. Students build confidence through repeated low-risk performance.",
		parentBenefit: "Students build confidence through repeated low-risk performance.",
	},
	{
		icon: "Life Skills",
		title: "Music-Centered Life Skills",
		description:
			"Discipline, critique, leadership, communication, financial literacy for artists, and portfolio building.",
		parentBenefit: "Students learn transferable skills through music.",
	},
] as const;

const INSTRUMENTS = [
	"Piano",
	"Violin",
	"Viola",
	"Cello",
	"Voice / Choir",
	"Guitar",
	"Percussion",
	"Winds",
] as const;

export function MusicProgramPage() {
	return (
		<>
			<section className="bg-navy px-6 py-20 md:py-28">
				<div className="mx-auto max-w-5xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">
						Music Program
					</p>
					<h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
						Daily conservatory training for young musicians.
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-light">
						Weekly lessons can inspire a student, but daily structure changes a student. TCA
						surrounds the young musician with the routines, feedback, peer culture, and performance
						opportunities that make musical growth visible.
					</p>
				</div>
			</section>

			<Section>
				<SectionHeader
					eyebrow="Program Components"
					title="Six pillars of the TCA conservatory afternoon."
					centered
				/>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{PROGRAM_COMPONENTS.map((comp) => (
						<Card key={comp.title}>
							<IconPlaceholder label={comp.icon} className="mb-4" />
							<h3 className="mb-2 text-lg font-bold text-navy">{comp.title}</h3>
							<p className="mb-4 text-sm leading-relaxed text-slate-dark">{comp.description}</p>
							<div className="rounded-lg bg-cyan/5 px-4 py-3">
								<p className="text-xs font-semibold text-cyan-dark">
									Parent benefit: {comp.parentBenefit}
								</p>
							</div>
						</Card>
					))}
				</div>
			</Section>

			<Section dark>
				<SectionHeader
					eyebrow="Instruments"
					title="Instruments supported at launch."
					subtitle="The founding program will begin with the strongest guide bench and expand by demand."
					centered
					dark
				/>
				<div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
					{INSTRUMENTS.map((instrument) => (
						<div
							key={instrument}
							className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 text-center"
						>
							<span className="font-semibold text-white">{instrument}</span>
						</div>
					))}
				</div>
			</Section>

			<Section>
				<div className="mx-auto max-w-3xl text-center">
					<SectionHeader
						eyebrow="Philosophy"
						title="Practice with purpose, not just minutes."
						centered
					/>
					<p className="text-lg leading-relaxed text-slate-dark">
						TCA's music program is not about logging hours. It is about developing the habits,
						skills, and artistic sensibility that allow a young musician to grow with intention.
						Every component of the afternoon connects back to a clear purpose: helping students hear
						better, play better, perform with confidence, and build a sustainable relationship with
						their craft.
					</p>
				</div>
			</Section>

			<section className="bg-navy px-6 py-20">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
						Experience the conservatory afternoon.
					</h2>
					<p className="mt-4 text-lg text-slate-light">
						Join a Saturday Conservatory Day to see the music program in action.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<CTAButton to="/events" size="lg">
							Register for Conservatory Day
						</CTAButton>
						<CTAButton to="/the-model" variant="outline" size="lg">
							See the Full Day
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
