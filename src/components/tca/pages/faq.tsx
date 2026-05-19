import { useState } from "react";

import { CTAButton } from "@/components/tca/ui/cta-button";
import { Section } from "@/components/tca/ui/section";

const FAQ_ITEMS = [
	{
		category: "About TCA",
		questions: [
			{
				q: "Is TCA part of Alpha School?",
				a: "TCA is planned as an Alpha School specialty academy for young musicians. Like Texas Sports Academy uses the Alpha model through the lens of sports, TCA uses it through the lens of music. Final public wording will match approved Alpha brand guidance.",
			},
			{
				q: "How is this different from Alpha Austin?",
				a: "Students use the same Alpha academic structure, but afternoons are organized around music — guided practice, musicianship, ensemble work, and performance preparation — rather than general life-skills workshops.",
			},
			{
				q: "How is this different from Texas Sports Academy?",
				a: "TSA uses the Alpha model through sports; TCA uses it through music. Same ecosystem logic, different passion lens.",
			},
			{
				q: "What is a 'specialty academy' in the Alpha ecosystem?",
				a: "A specialty academy applies the Alpha academic model — accelerated, mastery-based morning academics — through a specific passion lens. The afternoon is organized around that passion rather than a general life-skills program.",
			},
		],
	},
	{
		category: "Students & Fit",
		questions: [
			{
				q: "Is this only for advanced students?",
				a: "No. TCA is for motivated, coachable students who would benefit from daily musical structure. Students do not need to be prodigies. They do need curiosity, coachability, and a willingness to practice with purpose.",
			},
			{
				q: "What grades will launch first?",
				a: "We recommend grades 4\u20138 or 5\u20138 for pilot clarity, with expansion based on demand and staffing.",
			},
			{
				q: "What instruments are supported?",
				a: "The founding program will begin with the strongest guide bench and expand by demand. Likely initial areas include piano, strings, voice/choir, guitar, percussion, and winds.",
			},
			{
				q: "Does my child need to audition?",
				a: "TCA uses a fit-first process, not a high-pressure audition. Students participate in a Conservatory Day or musicianship diagnostic so we can observe readiness and interest — not rank ability.",
			},
		],
	},
	{
		category: "Academics",
		questions: [
			{
				q: "What happens in academics?",
				a: "Students complete focused mastery-based academics in the morning through the Alpha model. Core subjects are completed efficiently, allowing the rest of the day for structured musical development.",
			},
			{
				q: "Will my child fall behind academically?",
				a: "The Alpha model is designed for academic excellence through personalized, mastery-based progression. Students complete core academics thoroughly before moving to the afternoon conservatory program.",
			},
		],
	},
	{
		category: "Music & Teachers",
		questions: [
			{
				q: "Should my child keep their private teacher?",
				a: "Often, yes. TCA is designed to coordinate with and support existing teachers when appropriate. Daily guided practice and musicianship training can make weekly lessons more productive.",
			},
			{
				q: "Will TCA guarantee auditions, competitions, or scholarships?",
				a: "No. TCA can provide process quality, coaching, accountability, and preparation, but outcomes depend on many factors. We are honest about what we can and cannot promise.",
			},
			{
				q: "What does 'guided practice' mean?",
				a: "Guided practice means students practice their instrument with adult feedback, clear goals, and accountability — not alone in a practice room. A guide is present to help with technique, focus, and musical decisions.",
			},
		],
	},
	{
		category: "Logistics & Cost",
		questions: [
			{
				q: "What are the school hours?",
				a: "A typical day runs from approximately 8:00 AM to 3:30 PM. Morning is dedicated to academics, afternoon to the conservatory program, with breaks and transitions built in.",
			},
			{
				q: "What is the tuition?",
				a: "Tuition details will be shared during the family fit conversation. We believe in full transparency about costs before any commitment is made.",
			},
			{
				q: "Is TCA eligible for TEFA (Texas Education Freedom Account)?",
				a: "TEFA eligibility and applicability will be discussed during the admissions process as guidance becomes available.",
			},
			{
				q: "Is this a pilot program?",
				a: "Yes. TCA is launching as a pilot. Founding families will receive full transparency about pilot status, expectations, and the roadmap for growth.",
			},
		],
	},
	{
		category: "Next Steps",
		questions: [
			{
				q: "What are the next steps?",
				a: "Attend an info session, register for a Conservatory Day, then schedule a family fit conversation. This sequence lets you learn about the model, experience it, and discuss fit before applying.",
			},
			{
				q: "How do I stay informed?",
				a: "Join our interest list through the Contact page. You'll receive updates about events, admissions timelines, and school news.",
			},
		],
	},
] as const;

function FAQAccordion({ question, answer }: { question: string; answer: string }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="border-b border-slate-light/30 last:border-0">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="flex w-full items-start justify-between gap-4 py-5 text-left"
				aria-expanded={open}
			>
				<span className="font-semibold text-navy">{question}</span>
				<span className="mt-1 shrink-0 text-slate-dark">{open ? "\u2212" : "+"}</span>
			</button>
			{open && (
				<div className="pb-5">
					<p className="text-sm leading-relaxed text-slate-dark">{answer}</p>
				</div>
			)}
		</div>
	);
}

export function FAQPage() {
	return (
		<>
			<section className="bg-navy px-6 py-20 md:py-28">
				<div className="mx-auto max-w-5xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">FAQ</p>
					<h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
						Founding families deserve clarity before commitment.
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-light">
						We believe in radical transparency. Here are honest answers to the questions families
						ask most.
					</p>
				</div>
			</section>

			<Section>
				<div className="mx-auto max-w-3xl">
					{FAQ_ITEMS.map((category) => (
						<div key={category.category} className="mb-12 last:mb-0">
							<h2 className="mb-6 font-serif text-2xl font-bold text-navy">{category.category}</h2>
							<div className="rounded-2xl border border-slate-light/50 bg-white px-6">
								{category.questions.map((faq) => (
									<FAQAccordion key={faq.q} question={faq.q} answer={faq.a} />
								))}
							</div>
						</div>
					))}
				</div>
			</Section>

			<section className="bg-navy px-6 py-20">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
						Still have questions?
					</h2>
					<p className="mt-4 text-lg text-slate-light">
						We're happy to help. Reach out directly or attend an info session.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<CTAButton to="/contact" size="lg">
							Contact Us
						</CTAButton>
						<CTAButton to="/events" variant="outline" size="lg">
							Attend an Info Session
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
