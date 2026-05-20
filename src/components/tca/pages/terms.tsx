import { Section, SectionHeader } from "@/components/tca/ui/section";

export function TermsPage() {
	return (
		<>
			<Section dark>
				<SectionHeader
					eyebrow="Legal"
					title="Terms of Use"
					subtitle="Terms and conditions for using The Classical Academy website."
					centered
					dark
				/>
			</Section>

			<Section>
				<div className="prose prose-lg mx-auto max-w-3xl text-slate-dark">
					<h2 className="font-display text-2xl font-extrabold uppercase text-navy">
						Acceptance of Terms
					</h2>
					<p>
						By accessing and using this website, you accept and agree to be bound by these terms of
						use. If you do not agree, please do not use this site.
					</p>

					<h2 className="mt-10 font-display text-2xl font-extrabold uppercase text-navy">
						Use of Content
					</h2>
					<p>
						All content on this website — including text, images, logos, and design — is the
						property of The Classical Academy and is protected by copyright. You may not reproduce,
						distribute, or modify any content without written permission.
					</p>

					<h2 className="mt-10 font-display text-2xl font-extrabold uppercase text-navy">
						Disclaimer
					</h2>
					<p>
						This website is for informational purposes only. The Classical Academy is in its
						founding stage, and all program details, schedules, tuition, and other information are
						subject to change. Nothing on this site constitutes a binding offer or guarantee.
					</p>

					<h2 className="mt-10 font-display text-2xl font-extrabold uppercase text-navy">
						Contact
					</h2>
					<p>
						Questions about these terms? Reach out at{" "}
						<a
							href="mailto:info@classicalacademy.school"
							className="text-cyan-dark underline hover:text-navy"
						>
							info@classicalacademy.school
						</a>
						.
					</p>

					<p className="mt-10 text-sm text-slate-dark/60">Last updated: May 2026</p>
				</div>
			</Section>
		</>
	);
}
