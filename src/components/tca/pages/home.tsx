import { Link } from "react-router-dom";

import { CTAButton } from "@/components/tca/ui/cta-button";
import { IconPlaceholder } from "@/components/tca/ui/icon-placeholder";
import { Section, SectionHeader } from "@/components/tca/ui/section";

function Hero() {
	return (
		<section className="relative flex min-h-[90vh] items-center overflow-hidden bg-navy">
			<div className="absolute inset-0">
				<video
					src="/hero-video.mp4"
					autoPlay
					loop
					muted
					playsInline
					tabIndex={-1}
					className="pointer-events-none h-full w-full object-cover opacity-40"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />
			</div>

			<div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40">
				<p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-cyan animate-fade-up">
					An Alpha School Specialty Academy
				</p>
				<h1 className="max-w-4xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl animate-fade-up">
					This Is
					<br />
					The Classical
					<br />
					<span className="text-cyan">Academy</span>
				</h1>
				<p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-light animate-fade-up-delay">
					Accelerated academics in the morning. Conservatory-level music training all afternoon. A
					new model for serious young musicians.
				</p>

				<div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up-delay">
					<CTAButton to="/events" size="lg">
						Apply Now
					</CTAButton>
					<CTAButton to="/the-model" variant="ghost" size="lg">
						See the Program
					</CTAButton>
				</div>
			</div>
		</section>
	);
}

const STATS = [
	{ value: "2", label: "Hour Academics", desc: "Focused mastery-based learning each morning" },
	{ value: "6", label: "Music Components", desc: "Daily conservatory training every afternoon" },
	{ value: "Top", label: "National Scores", desc: "Alpha School academic performance results" },
	{ value: "Pro", label: "Level Instruction", desc: "Expert guides and working musicians" },
] as const;

function StatsBar() {
	return (
		<section className="bg-navy-dark px-6 py-16">
			<div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{STATS.map((stat) => (
					<div key={stat.label} className="text-center">
						<p className="font-display text-5xl font-black uppercase text-gold md:text-6xl">
							{stat.value}
						</p>
						<p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-light">
							{stat.label}
						</p>
						<p className="mt-2 text-sm text-slate">{stat.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}

const MARQUEE_QUOTES = [
	'"When music gets the school day, everything changes."',
	'"My daughter finally has time to practice properly."',
	'"Academics accelerated, afternoons purposeful."',
	'"A school that treats music as seriously as we do."',
	'"The daily structure transformed his musicianship."',
];

function TestimonialMarquee() {
	return (
		<div className="overflow-hidden border-y border-white/10 bg-navy py-4">
			<div className="flex animate-marquee whitespace-nowrap">
				{[...MARQUEE_QUOTES, ...MARQUEE_QUOTES].map((quote, idx) => (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: marquee items are duplicated for seamless loop
						key={`${quote}-${idx}`}
						className="mx-8 inline-flex items-center gap-3 text-sm italic text-slate-light"
					>
						<svg
							className="h-4 w-4 shrink-0 text-gold"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						{quote}
					</span>
				))}
			</div>
		</div>
	);
}

function GiveYourKidTheEdge() {
	return (
		<Section>
			<div className="grid items-center gap-16 lg:grid-cols-2">
				<div>
					<SectionHeader eyebrow="The TCA Model" title="Give Your Kid the Edge" />
					<p className="text-lg leading-relaxed text-slate-dark">
						We are the music academy built for serious young musicians. With academics finished in
						just two focused hours each morning, students have all afternoon for conservatory-level
						music training and life skills development.
					</p>
					<p className="mt-4 text-lg leading-relaxed text-slate-dark">
						Our students learn at two times the speed of traditional school while training with
						expert musicians daily. This is the future of music education.
					</p>
					<div className="mt-8">
						<CTAButton to="/the-model">School Overview</CTAButton>
					</div>
				</div>
				<img
					src="/feature-student.png"
					alt="Student with violin receiving feedback from a guide"
					className="w-full rounded-2xl object-cover shadow-2xl"
				/>
			</div>
		</Section>
	);
}

const COMMITMENTS = [
	{
		icon: "Accelerated Academics",
		title: "Learn 2x Faster",
		description:
			"Using the same academic software as Alpha School, students learn at 2x the speed in just 2 hours each morning.",
	},
	{
		icon: "Guided Practice",
		title: "Train Like a Pro",
		description:
			"Guided practice with feedback, musicianship, ensemble collaboration, and performance preparation — structured like a professional conservatory.",
	},
	{
		icon: "Life Skills",
		title: "Love School",
		description:
			"Students aren't chained to a desk all day. After 2 focused hours of academics, they make music all afternoon.",
	},
] as const;

function ThreeCommitments() {
	return (
		<Section dark>
			<SectionHeader
				eyebrow="Our 3 Commitments"
				title="Academics. Music. Life Skills."
				centered
				dark
			/>
			<div className="grid gap-8 md:grid-cols-3">
				{COMMITMENTS.map((card) => (
					<div
						key={card.title}
						className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-cyan/30 hover:bg-white/10"
					>
						<IconPlaceholder label={card.icon} className="mb-5" />
						<h3 className="mb-3 font-display text-xl font-bold uppercase text-white">
							{card.title}
						</h3>
						<p className="text-sm leading-relaxed text-slate">{card.description}</p>
					</div>
				))}
			</div>
		</Section>
	);
}

function SplitFeatures() {
	return (
		<section className="grid md:grid-cols-2">
			<div className="flex flex-col bg-navy-light">
				<div className="relative h-64 overflow-hidden md:h-80">
					<img
						src="/learn-faster-bg.png"
						alt="Student learning with tablet and violin"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-light to-transparent" />
				</div>
				<div className="p-10 md:p-12">
					<h3 className="font-display text-3xl font-black uppercase text-white md:text-4xl">
						Learn 2x Faster
					</h3>
					<p className="mt-4 max-w-md text-sm leading-relaxed text-slate-light">
						Powered by AI, personalized learning, and mastery-based progression, students complete
						core subjects in just two hours each morning. They only advance once they've truly
						understood the material, then spend the rest of the day in music.
					</p>
					<ul className="mt-4 space-y-1.5">
						{[
							"AI-powered personalized learning",
							"Mastery-based progression",
							"Top academic growth",
						].map((item) => (
							<li key={item} className="flex items-center gap-2 text-sm text-cyan">
								<span className="h-1.5 w-1.5 rounded-full bg-cyan" />
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex flex-col bg-navy-light">
				<div className="relative h-64 overflow-hidden md:h-80">
					<img
						src="/train-pro-bg.png"
						alt="Chamber ensemble rehearsing"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-light to-transparent" />
				</div>
				<div className="p-10 md:p-12">
					<h3 className="font-display text-3xl font-black uppercase text-white md:text-4xl">
						Train Like a Pro
					</h3>
					<p className="mt-4 max-w-md text-sm leading-relaxed text-slate-light">
						With music starting at noon, students get all afternoon to train with expert guides. By
						4pm, they've already completed 6-7 quality hours of academics, music training, and life
						skills.
					</p>
					<ul className="mt-4 space-y-1.5">
						{[
							"4 full hours for music and life skills",
							"Expert coaching, grades 4 through 8",
							"Built to develop the next generation of musicians",
						].map((item) => (
							<li key={item} className="flex items-center gap-2 text-sm text-cyan">
								<span className="h-1.5 w-1.5 rounded-full bg-cyan" />
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
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
		<Section>
			<SectionHeader
				eyebrow="The Conservatory Afternoon"
				title="Weekly lessons inspire. Daily structure transforms."
				subtitle="TCA surrounds the young musician with the routines, feedback, peer culture, and performance opportunities that make musical growth visible."
				centered
			/>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{AFTERNOON_COMPONENTS.map((comp) => (
					<div
						key={comp.title}
						className="rounded-2xl border border-slate-light/50 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-cyan/30"
					>
						<IconPlaceholder label={comp.icon} size="sm" className="mb-3" />
						<h3 className="mb-1.5 font-display text-lg font-bold uppercase text-navy">
							{comp.title}
						</h3>
						<p className="text-sm leading-relaxed text-slate-dark">{comp.description}</p>
					</div>
				))}
			</div>
			<div className="mt-10 text-center">
				<CTAButton to="/music-program">Explore the Full Music Program</CTAButton>
			</div>
		</Section>
	);
}

function ScheduleComparison() {
	return (
		<Section dark>
			<SectionHeader
				eyebrow="The Daily Schedule"
				title="2 Hours to Learn, All Afternoon to Play"
				centered
				dark
			/>
			<div className="mx-auto max-w-4xl">
				<div className="grid gap-8 md:grid-cols-2">
					<div className="rounded-2xl border border-white/10 bg-white/5 p-8">
						<h3 className="mb-4 font-display text-xl font-bold uppercase text-gold">
							Standard School
						</h3>
						<div className="space-y-2">
							{["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"].map((time) => (
								<div key={time} className="flex items-center gap-3">
									<span className="w-12 text-xs text-slate">{time}</span>
									<div className="h-8 flex-1 rounded bg-slate-dark/30 flex items-center px-3">
										<span className="text-xs text-slate-light">Sitting in class</span>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="rounded-2xl border border-cyan/30 bg-white/5 p-8">
						<h3 className="mb-4 font-display text-xl font-bold uppercase text-cyan">
							The Classical Academy
						</h3>
						<div className="space-y-2">
							{[
								{ time: "9am", label: "2 Hour Learning", color: "bg-cyan/30", text: "text-cyan" },
								{ time: "10am", label: "2 Hour Learning", color: "bg-cyan/30", text: "text-cyan" },
								{
									time: "11am",
									label: "Break & Transition",
									color: "bg-gold/20",
									text: "text-gold",
								},
								{
									time: "12pm",
									label: "Music Training",
									color: "bg-gold/30",
									text: "text-gold-light",
								},
								{
									time: "1pm",
									label: "Music Training",
									color: "bg-gold/30",
									text: "text-gold-light",
								},
								{
									time: "2pm",
									label: "Music Training",
									color: "bg-gold/30",
									text: "text-gold-light",
								},
								{ time: "3pm", label: "Life Skills", color: "bg-cyan/20", text: "text-cyan-light" },
							].map((slot) => (
								<div key={slot.time} className="flex items-center gap-3">
									<span className="w-12 text-xs text-slate">{slot.time}</span>
									<div className={`h-8 flex-1 rounded ${slot.color} flex items-center px-3`}>
										<span className={`text-xs font-medium ${slot.text}`}>{slot.label}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

function WhoThrivesHere() {
	return (
		<Section>
			<SectionHeader
				eyebrow="Fit"
				title="Who Thrives at TCA?"
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
				title="Experience TCA Before You Apply"
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
					<div
						key={event.title}
						className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-cyan/30 hover:bg-white/10"
					>
						<h3 className="mb-2 font-display text-lg font-bold uppercase text-white">
							{event.title}
						</h3>
						<p className="mb-6 text-sm leading-relaxed text-slate">{event.desc}</p>
						<Link
							to="/events"
							className="text-sm font-bold uppercase tracking-wider text-cyan transition-colors hover:text-cyan-light"
						>
							{event.cta} &rarr;
						</Link>
					</div>
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
					title="Built to Strengthen Austin's Music Ecosystem"
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
				title="Founding Families Deserve Clarity"
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
		<section className="relative overflow-hidden bg-navy px-6 py-28">
			<div className="absolute inset-0">
				<img
					src="/cta-bg.png"
					alt=""
					className="h-full w-full object-cover opacity-20"
					aria-hidden="true"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
			</div>
			<div className="relative mx-auto max-w-3xl text-center">
				<h2 className="font-display text-4xl font-black uppercase text-white md:text-5xl lg:text-6xl">
					Double Your Child's
					<br />
					<span className="text-cyan">Musical Potential</span>
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-lg text-slate-light">
					Give your kid the best shot at musical, academic, and personal success. Take the next step
					that feels right for your family.
				</p>
				<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<CTAButton to="/events" size="lg">
						Attend an Info Session
					</CTAButton>
					<CTAButton to="/admissions" variant="outline" size="lg">
						Book a Family Fit Call
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
			<StatsBar />
			<TestimonialMarquee />
			<GiveYourKidTheEdge />
			<ThreeCommitments />
			<SplitFeatures />
			<ConservatoryAfternoon />
			<ScheduleComparison />
			<WhoThrivesHere />
			<EventsPreview />
			<EthicalReassurance />
			<FAQPreview />
			<FinalCTA />
		</>
	);
}
