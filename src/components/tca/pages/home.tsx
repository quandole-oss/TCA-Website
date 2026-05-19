import { Link } from "react-router-dom";

import { Card } from "@/components/tca/ui/card";
import { CTAButton } from "@/components/tca/ui/cta-button";
import { IconPlaceholder } from "@/components/tca/ui/icon-placeholder";
import { Section, SectionHeader } from "@/components/tca/ui/section";

function Hero() {
	return (
		<section className="relative overflow-hidden bg-navy px-6 py-24 md:py-36">
			<div className="absolute inset-0 opacity-10">
				<div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan blur-[120px]" />
				<div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gold blur-[100px]" />
			</div>

			<div className="relative mx-auto max-w-5xl text-center">
				<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan animate-fade-up">
					An Alpha School Specialty Academy
				</p>
				<h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl animate-fade-up">
					Accelerated Academics.
					<br />
					<span className="text-cyan">Serious Music.</span>
					<br />A School Day Built for Young Musicians.
				</h1>
				<p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-light animate-fade-up-delay">
					The Classical Academy is an Alpha School specialty academy for students whose musical life
					has outgrown the margins of the day. Students complete focused academics in the morning,
					then spend the afternoon in guided practice, musicianship, ensemble work, performance
					preparation, and music-centered life skills.
				</p>

				<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up-delay">
					<CTAButton to="/events" size="lg">
						Attend an Info Session
					</CTAButton>
					<CTAButton to="/events" variant="outline" size="lg">
						Join a Saturday Conservatory Day
					</CTAButton>
					<CTAButton to="/the-model" variant="secondary" size="lg">
						Explore the Model
					</CTAButton>
				</div>
			</div>

			<div className="relative mx-auto mt-16 max-w-4xl">
				<img
					src="/hero.png"
					alt="Young musicians rehearsing together in a sunlit conservatory"
					className="w-full rounded-2xl border border-white/10 object-cover"
				/>
			</div>
		</section>
	);
}

const MODEL_CARDS = [
	{
		icon: "Accelerated Academics",
		title: "Morning: Academic Mastery",
		description:
			"Focused, mastery-based academics through the Alpha model. Students complete core subjects efficiently, freeing the rest of the day for what drives them.",
	},
	{
		icon: "Guided Practice",
		title: "Afternoon: Conservatory Training",
		description:
			"Guided practice with feedback, musicianship and theory, ensemble collaboration, and performance preparation — structured like a professional conservatory.",
	},
	{
		icon: "Life Skills",
		title: "All Day: Music-Centered Life Skills",
		description:
			"Performance confidence, ensemble leadership, disciplined practice, feedback literacy, and the habits that make artistry sustainable.",
	},
] as const;

function ModelSnapshot() {
	return (
		<Section>
			<SectionHeader
				eyebrow="The TCA Model"
				title="A school day designed around the way serious young musicians grow."
				subtitle="The morning is for focused academic mastery. The afternoon is for structured musical development: practice with feedback, theory that connects to repertoire, ensemble collaboration, performance confidence, and the habits that make artistry sustainable."
				centered
			/>
			<div className="grid gap-8 md:grid-cols-3">
				{MODEL_CARDS.map((card) => (
					<Card key={card.title}>
						<IconPlaceholder label={card.icon} className="mb-4" />
						<h3 className="mb-2 text-lg font-bold text-navy">{card.title}</h3>
						<p className="text-sm leading-relaxed text-slate-dark">{card.description}</p>
					</Card>
				))}
			</div>
		</Section>
	);
}

function WhyThisExists() {
	return (
		<Section dark>
			<div className="grid items-center gap-12 lg:grid-cols-2">
				<div>
					<SectionHeader
						eyebrow="The Problem"
						title="Music matters. But school takes the best hours."
						dark
					/>
					<p className="text-lg leading-relaxed text-slate-light">
						For serious young musicians, the conflict is real: conventional school consumes the best
						hours of the day, practice becomes fragmented, and musical growth happens only in the
						leftover margins of an already full schedule.
					</p>
					<p className="mt-4 text-lg leading-relaxed text-slate-light">
						TCA solves this by giving music the school day it deserves — without sacrificing
						academic rigor.
					</p>
				</div>
				<img
					src="/the-problem.png"
					alt="The problem: academics dominate the day while music is squeezed into the margins"
					className="aspect-square w-full rounded-2xl border border-white/10 object-cover"
				/>
			</div>
		</Section>
	);
}

function AlphaEcosystem() {
	return (
		<Section>
			<div className="grid items-center gap-12 lg:grid-cols-2">
				<img
					src="/alpha-ecosystem.png"
					alt="Alpha ecosystem diagram showing Alpha Austin, Texas Sports Academy, and The Classical Academy"
					className="order-2 w-full rounded-2xl border border-slate-light/50 object-cover lg:order-1"
				/>
				<div className="order-1 lg:order-2">
					<SectionHeader
						eyebrow="Alpha Ecosystem"
						title="The Alpha model, through the lens of music."
					/>
					<p className="text-lg leading-relaxed text-slate-dark">
						Like Texas Sports Academy applies the Alpha academic structure through athletics, The
						Classical Academy applies it through musicianship: academics are accelerated, afternoons
						are purposeful, and students learn through a passion that already matters to them.
					</p>
					<div className="mt-6">
						<CTAButton to="/the-model">Learn More About the Model</CTAButton>
					</div>
				</div>
			</div>
		</Section>
	);
}

const AFTERNOON_COMPONENTS = [
	{
		icon: "Guided Practice",
		title: "Guided Practice",
		description: "Practice with adult feedback, clear goals, and accountability.",
	},
	{
		icon: "Musicianship",
		title: "Musicianship & Theory",
		description: "Ear training, notation, rhythm, harmony, sight-reading, and listening.",
	},
	{
		icon: "Ensemble",
		title: "Ensemble & Collaboration",
		description: "Chamber music, choir, rhythm labs, studio classes, and peer feedback.",
	},
	{
		icon: "Performance",
		title: "Performance Lab",
		description: "Recitals, mock auditions, stage presence, and reflection.",
	},
	{
		icon: "Repertoire",
		title: "Repertoire Planning",
		description: "Coordinated goals with guides and outside teachers.",
	},
	{
		icon: "Life Skills",
		title: "Music-Centered Life Skills",
		description: "Discipline, critique, leadership, communication, and portfolio building.",
	},
] as const;

function ConservatoryAfternoon() {
	return (
		<Section dark>
			<SectionHeader
				eyebrow="The Conservatory Afternoon"
				title="Weekly lessons inspire. Daily structure transforms."
				subtitle="TCA surrounds the young musician with the routines, feedback, peer culture, and performance opportunities that make musical growth visible."
				centered
				dark
			/>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{AFTERNOON_COMPONENTS.map((comp) => (
					<Card key={comp.title} dark>
						<IconPlaceholder label={comp.icon} size="sm" className="mb-3" />
						<h3 className="mb-1.5 font-bold text-white">{comp.title}</h3>
						<p className="text-sm leading-relaxed text-slate">{comp.description}</p>
					</Card>
				))}
			</div>
			<div className="mt-10 text-center">
				<CTAButton to="/music-program">Explore the Full Music Program</CTAButton>
			</div>
		</Section>
	);
}

function WhoThrivesHere() {
	return (
		<Section>
			<SectionHeader
				eyebrow="Fit"
				title="Who thrives at TCA?"
				subtitle="TCA is for motivated, coachable students who would benefit from a school day organized around both academic mastery and serious musical development."
				centered
			/>
			<div className="mx-auto max-w-3xl">
				<div className="grid gap-4 sm:grid-cols-2">
					{[
						"Students whose musical life has outgrown the margins of the day",
						"Curious, coachable learners who respond to structured feedback",
						"Families seeking Alpha-style academics with a music focus",
						"Students who practice with purpose, not just minutes",
						"Young musicians ready for daily ensemble and performance culture",
						"Students who do not need to be prodigies — but need to love music",
					].map((item) => (
						<div key={item} className="flex gap-3 rounded-xl bg-muted p-4">
							<span className="mt-0.5 text-cyan-dark">&#10003;</span>
							<p className="text-sm leading-relaxed text-navy">{item}</p>
						</div>
					))}
				</div>
				<div className="mt-10 text-center">
					<CTAButton to="/admissions">Explore Admissions</CTAButton>
				</div>
			</div>
		</Section>
	);
}

function EventsPreview() {
	return (
		<Section dark>
			<SectionHeader
				eyebrow="Upcoming Events"
				title="Experience TCA before you apply."
				subtitle="Attend an info session, join a Saturday Conservatory Day, or schedule a musicianship diagnostic."
				centered
				dark
			/>
			<div className="grid gap-8 md:grid-cols-3">
				{[
					{
						title: "Parent Info Session",
						desc: "Virtual or in-person introduction to the TCA model. Understand the school before applying.",
						cta: "Register Now",
					},
					{
						title: "Saturday Conservatory Day",
						desc: "Half-day student experience with musicianship, guided practice, ensemble, and parent Q&A.",
						cta: "Sign Up",
					},
					{
						title: "Musicianship Diagnostic",
						desc: "Friendly assessment of theory, rhythm, ear, sight-reading, and practice habits with a personalized plan.",
						cta: "Book a Spot",
					},
				].map((event) => (
					<Card key={event.title} dark>
						<h3 className="mb-2 text-lg font-bold text-white">{event.title}</h3>
						<p className="mb-6 text-sm leading-relaxed text-slate">{event.desc}</p>
						<Link
							to="/events"
							className="text-sm font-semibold text-cyan transition-colors hover:text-cyan-light"
						>
							{event.cta} &rarr;
						</Link>
					</Card>
				))}
			</div>
		</Section>
	);
}

function EthicalReassurance() {
	return (
		<Section>
			<div className="mx-auto max-w-3xl text-center">
				<SectionHeader
					eyebrow="Our Commitment"
					title="Built to strengthen Austin's music ecosystem."
					centered
				/>
				<p className="text-lg leading-relaxed text-slate-dark">
					We are not here to replace Austin's teachers, studios, youth orchestras, or school
					ensembles. We are here to create a daytime structure around the child's musical life, so
					existing instruction can become more effective, better supported, and easier for families
					to coordinate.
				</p>
				<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<CTAButton to="/partners">Partner With Us</CTAButton>
					<CTAButton to="/guides" variant="outline">
						Join the Founding Guide Bench
					</CTAButton>
				</div>
			</div>
		</Section>
	);
}

const FAQ_PREVIEW = [
	{
		q: "Is TCA part of Alpha School?",
		a: "TCA is planned as an Alpha School specialty academy for young musicians. Final public wording should match approved Alpha brand guidance.",
	},
	{
		q: "Is this only for advanced students?",
		a: "No. It is for motivated, coachable students who would benefit from daily musical structure.",
	},
	{
		q: "Should my child keep their private teacher?",
		a: "Often, yes. TCA is designed to coordinate with and support existing teachers when appropriate.",
	},
	{
		q: "What grades will launch first?",
		a: "We recommend grades 4\u20138 or 5\u20138 for pilot clarity, with expansion based on demand and staffing.",
	},
] as const;

function FAQPreview() {
	return (
		<Section dark>
			<SectionHeader
				eyebrow="Frequently Asked Questions"
				title="Founding families deserve clarity before commitment."
				centered
				dark
			/>
			<div className="mx-auto max-w-3xl space-y-4">
				{FAQ_PREVIEW.map((item) => (
					<div key={item.q} className="rounded-xl border border-white/10 bg-white/5 p-6">
						<h3 className="mb-2 font-bold text-white">{item.q}</h3>
						<p className="text-sm leading-relaxed text-slate">{item.a}</p>
					</div>
				))}
			</div>
			<div className="mt-10 text-center">
				<CTAButton to="/faq">View All FAQs</CTAButton>
			</div>
		</Section>
	);
}

function FinalCTA() {
	return (
		<section className="relative overflow-hidden bg-navy px-6 py-24">
			<div className="absolute inset-0 opacity-10">
				<div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan blur-[150px]" />
			</div>
			<div className="relative mx-auto max-w-3xl text-center">
				<h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
					Ready to explore TCA?
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-lg text-slate-light">
					Take the next step that feels right for your family.
				</p>
				<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<CTAButton to="/events" size="lg">
						Attend an Info Session
					</CTAButton>
					<CTAButton to="/admissions" variant="secondary" size="lg">
						Book a Family Fit Call
					</CTAButton>
					<CTAButton to="/guides" variant="outline" size="lg">
						Join the Guide Bench
					</CTAButton>
				</div>
			</div>
		</section>
	);
}

export function HomePage() {
	return (
		<>
			<Hero />
			<ModelSnapshot />
			<WhyThisExists />
			<AlphaEcosystem />
			<ConservatoryAfternoon />
			<WhoThrivesHere />
			<EventsPreview />
			<EthicalReassurance />
			<FAQPreview />
			<FinalCTA />
		</>
	);
}
