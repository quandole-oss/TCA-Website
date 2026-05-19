import { Card } from "@/components/tca/ui/card";
import { CTAButton } from "@/components/tca/ui/cta-button";
import { Section, SectionHeader } from "@/components/tca/ui/section";

const ADMISSIONS_STEPS = [
	{
		step: "01",
		title: "Stay in the Know",
		description: "Enter your email, student instrument, and grade to join our interest list.",
		purpose: "Build relationship and tailor communication.",
	},
	{
		step: "02",
		title: "Attend an Info Session",
		description:
			"Learn the model, Alpha connection, schedule, and expectations in a virtual or in-person session.",
		purpose: "Educate before selling.",
	},
	{
		step: "03",
		title: "Student Conservatory Experience",
		description:
			"Your child attends a Saturday Conservatory Day or musicianship diagnostic to experience the TCA rhythm.",
		purpose: "Observe readiness and interest.",
	},
	{
		step: "04",
		title: "Family Fit Conversation",
		description:
			"Discuss goals, current teacher relationships, academics, logistics, and cost with our admissions team.",
		purpose: "Screen for mutual fit.",
	},
	{
		step: "05",
		title: "Application",
		description: "Submit a formal application with student records and musical background.",
		purpose: "Gather decision data.",
	},
	{
		step: "06",
		title: "Founding Family Offer",
		description:
			"Receive a transparent offer including pilot terms, expectations, and founding family benefits.",
		purpose: "Convert responsibly.",
	},
] as const;

export function AdmissionsPage() {
	return (
		<>
			<section className="bg-navy px-6 py-20 md:py-28">
				<div className="mx-auto max-w-5xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">
						Admissions
					</p>
					<h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
						Admissions for founding families.
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-light">
						TCA is intentionally fit-first. We are looking for students who love music, respond to
						coaching, can grow in independence, and would benefit from a school day organized around
						both academic mastery and serious musical development.
					</p>
				</div>
			</section>

			<Section>
				<SectionHeader
					eyebrow="The Process"
					title="Six steps to joining TCA."
					subtitle="Our admissions process is designed to educate and qualify — not pressure."
				/>
				<div className="space-y-6">
					{ADMISSIONS_STEPS.map((step) => (
						<div
							key={step.step}
							className="flex flex-col gap-6 rounded-2xl border border-slate-light/50 bg-white p-8 sm:flex-row sm:items-start"
						>
							<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-lg font-bold text-cyan">
								{step.step}
							</div>
							<div className="flex-1">
								<h3 className="text-lg font-bold text-navy">{step.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-slate-dark">{step.description}</p>
							</div>
							<div className="shrink-0 rounded-lg bg-cyan/5 px-4 py-2 sm:max-w-48">
								<p className="text-xs font-medium text-cyan-dark">{step.purpose}</p>
							</div>
						</div>
					))}
				</div>
			</Section>

			<Section dark>
				<SectionHeader
					eyebrow="Who We're Looking For"
					title="Students do not need to be prodigies."
					subtitle="They do need curiosity, coachability, and a willingness to practice with purpose."
					centered
					dark
				/>
				<div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
					<Card dark>
						<h3 className="mb-4 font-bold text-cyan">A strong fit looks like...</h3>
						<ul className="space-y-3">
							{[
								"A child who lights up when they play or sing",
								"A family seeking structured daily practice, not just weekly lessons",
								"Openness to constructive feedback and coaching",
								"Academic readiness for mastery-based, self-paced learning",
								"Willingness to engage in ensemble culture and peer collaboration",
							].map((item) => (
								<li key={item} className="flex gap-2 text-sm text-slate-light">
									<span className="mt-0.5 text-cyan">&#10003;</span>
									{item}
								</li>
							))}
						</ul>
					</Card>
					<Card dark>
						<h3 className="mb-4 font-bold text-gold">This may not be the right fit if...</h3>
						<ul className="space-y-3">
							{[
								"The student's musical interest is casual or exploratory",
								"The family expects guaranteed competition outcomes or college placement",
								"The student is not ready for independent academic work",
								"The family prefers a traditional full-day school schedule",
								"The student is not open to group learning and peer feedback",
							].map((item) => (
								<li key={item} className="flex gap-2 text-sm text-slate-light">
									<span className="mt-0.5 text-gold">&mdash;</span>
									{item}
								</li>
							))}
						</ul>
					</Card>
				</div>
			</Section>

			<Section>
				<div className="mx-auto max-w-3xl text-center">
					<SectionHeader
						eyebrow="Tuition & Costs"
						title="Transparent pricing for founding families."
						centered
					/>
					<p className="text-lg leading-relaxed text-slate-dark">
						Tuition details and founding family pricing will be shared during the family fit
						conversation. We believe in full transparency about costs, expectations, and pilot-stage
						realities before any commitment is made.
					</p>
					<p className="mt-4 text-sm text-slate-dark">
						TEFA (Texas Education Freedom Account) eligibility and applicability will be discussed
						during the admissions process as guidance becomes available.
					</p>
				</div>
			</Section>

			<section className="bg-navy px-6 py-20">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
						Start your family's journey.
					</h2>
					<p className="mt-4 text-lg text-slate-light">
						The best first step is to attend an info session or book a family fit call.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<CTAButton to="/events" size="lg">
							Attend an Info Session
						</CTAButton>
						<CTAButton to="/contact" variant="outline" size="lg">
							Book a Family Fit Call
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
