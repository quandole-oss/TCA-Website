import { type FormEvent, useState } from "react";

import { CTAButton } from "@/components/tca/ui/cta-button";
import { Section, SectionHeader } from "@/components/tca/ui/section";

const GRADE_OPTIONS = [
	"Pre-K",
	"Kindergarten",
	"1st Grade",
	"2nd Grade",
	"3rd Grade",
	"4th Grade",
	"5th Grade",
	"6th Grade",
	"7th Grade",
	"8th Grade",
	"9th Grade+",
] as const;

const INSTRUMENT_OPTIONS = [
	"Piano",
	"Violin",
	"Viola",
	"Cello",
	"Double Bass",
	"Voice / Choir",
	"Guitar",
	"Percussion",
	"Flute",
	"Clarinet",
	"Oboe",
	"Trumpet",
	"Trombone",
	"Other",
] as const;

const INVOLVEMENT_OPTIONS = [
	"Private lessons",
	"School ensemble",
	"Youth orchestra",
	"Homeschool music program",
	"Beginner",
	"Other",
] as const;

const FAMILIARITY_OPTIONS = [
	"New to Alpha",
	"Considering Alpha",
	"Current Alpha family",
	"Former Alpha family",
] as const;

const NEXT_STEP_OPTIONS = [
	"Attend an info session",
	"Register for a Saturday Conservatory Day",
	"Book a family fit call",
	"Guide / teacher inquiry",
	"Partner / collaboration inquiry",
	"General question",
] as const;

export function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setSubmitted(true);
	}

	return (
		<>
			<section className="bg-navy px-6 py-20 md:py-28">
				<div className="mx-auto max-w-5xl text-center">
					<p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan">Contact</p>
					<h1 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl lg:text-6xl">
						Let's start a conversation.
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-light">
						Whether you're a parent exploring TCA for your child, a musician-educator interested in
						guide opportunities, or a partner in Austin's music community, we'd love to hear from
						you.
					</p>
				</div>
			</section>

			<Section>
				<div className="mx-auto max-w-3xl">
					{submitted ? (
						<div className="rounded-2xl border-2 border-cyan/30 bg-cyan/5 p-12 text-center">
							<div className="mb-4 text-4xl">&#10003;</div>
							<h2 className="font-display text-2xl font-bold uppercase text-navy">
								Thank you for your interest!
							</h2>
							<p className="mt-4 text-lg text-slate-dark">
								Form submission is not yet connected to a backend. Please email us directly or check
								back soon. In the meantime, explore our site to learn more about TCA.
							</p>
							<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
								<CTAButton to="/the-model">Explore the Model</CTAButton>
								<CTAButton
									to="/faq"
									variant="outline"
									className="border-navy/30 text-navy hover:bg-navy/5"
								>
									Read the FAQ
								</CTAButton>
							</div>
						</div>
					) : (
						<>
							<SectionHeader
								eyebrow="Interest Form"
								title="Stay in the know."
								subtitle="Fill out the form below and we'll route your inquiry to the right person on our team."
							/>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid gap-6 sm:grid-cols-2">
									<div>
										<label
											htmlFor="parentName"
											className="mb-1.5 block text-sm font-medium text-navy"
										>
											Parent / Guardian Name *
										</label>
										<input
											id="parentName"
											name="parentName"
											type="text"
											required
											className="w-full rounded-lg border border-slate-light px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/20"
											placeholder="Full name"
										/>
									</div>
									<div>
										<label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
											Email Address *
										</label>
										<input
											id="email"
											name="email"
											type="email"
											required
											className="w-full rounded-lg border border-slate-light px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/20"
											placeholder="you@example.com"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
										Phone Number
									</label>
									<input
										id="phone"
										name="phone"
										type="tel"
										className="w-full rounded-lg border border-slate-light px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/20"
										placeholder="(555) 123-4567"
									/>
								</div>

								<div className="grid gap-6 sm:grid-cols-2">
									<div>
										<label htmlFor="grade" className="mb-1.5 block text-sm font-medium text-navy">
											Student Grade
										</label>
										<select
											id="grade"
											name="grade"
											className="w-full rounded-lg border border-slate-light bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/20"
										>
											<option value="">Select grade</option>
											{GRADE_OPTIONS.map((grade) => (
												<option key={grade} value={grade}>
													{grade}
												</option>
											))}
										</select>
									</div>
									<div>
										<label
											htmlFor="instrument"
											className="mb-1.5 block text-sm font-medium text-navy"
										>
											Instrument or Voice
										</label>
										<select
											id="instrument"
											name="instrument"
											className="w-full rounded-lg border border-slate-light bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/20"
										>
											<option value="">Select instrument</option>
											{INSTRUMENT_OPTIONS.map((inst) => (
												<option key={inst} value={inst}>
													{inst}
												</option>
											))}
										</select>
									</div>
								</div>

								<div>
									<label
										htmlFor="involvement"
										className="mb-1.5 block text-sm font-medium text-navy"
									>
										Current Music Involvement
									</label>
									<select
										id="involvement"
										name="involvement"
										className="w-full rounded-lg border border-slate-light bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/20"
									>
										<option value="">Select involvement</option>
										{INVOLVEMENT_OPTIONS.map((opt) => (
											<option key={opt} value={opt}>
												{opt}
											</option>
										))}
									</select>
								</div>

								<div>
									<label
										htmlFor="familiarity"
										className="mb-1.5 block text-sm font-medium text-navy"
									>
										Alpha School Familiarity
									</label>
									<select
										id="familiarity"
										name="familiarity"
										className="w-full rounded-lg border border-slate-light bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/20"
									>
										<option value="">Select familiarity</option>
										{FAMILIARITY_OPTIONS.map((opt) => (
											<option key={opt} value={opt}>
												{opt}
											</option>
										))}
									</select>
								</div>

								<div>
									<label htmlFor="nextStep" className="mb-1.5 block text-sm font-medium text-navy">
										Preferred Next Step *
									</label>
									<select
										id="nextStep"
										name="nextStep"
										required
										className="w-full rounded-lg border border-slate-light bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/20"
									>
										<option value="">Select next step</option>
										{NEXT_STEP_OPTIONS.map((opt) => (
											<option key={opt} value={opt}>
												{opt}
											</option>
										))}
									</select>
								</div>

								<div>
									<label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
										Message (optional)
									</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										className="w-full rounded-lg border border-slate-light px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan focus:ring-2 focus:ring-cyan/20"
										placeholder="Tell us about your family, your child's musical background, or any questions you have."
									/>
								</div>

								<button
									type="submit"
									className="w-full rounded-lg bg-cyan px-8 py-4 text-base font-semibold text-navy transition-colors hover:bg-cyan-light sm:w-auto"
								>
									Submit
								</button>
							</form>
						</>
					)}
				</div>
			</Section>

			<Section dark>
				<div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
					<div className="text-center">
						<h3 className="mb-2 font-bold text-white">For Parents</h3>
						<p className="text-sm text-slate">
							Attend an info session or book a family fit call to learn whether TCA is right for
							your child.
						</p>
					</div>
					<div className="text-center">
						<h3 className="mb-2 font-bold text-white">For Guides</h3>
						<p className="text-sm text-slate">
							Explore founding guide opportunities and join our bench of performer-educators.
						</p>
					</div>
					<div className="text-center">
						<h3 className="mb-2 font-bold text-white">For Partners</h3>
						<p className="text-sm text-slate">
							Let's discuss how TCA can support your students and strengthen Austin's music
							community.
						</p>
					</div>
				</div>
			</Section>
		</>
	);
}
