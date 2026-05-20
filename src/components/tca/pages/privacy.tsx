import { Section, SectionHeader } from "@/components/tca/ui/section";

export function PrivacyPage() {
	return (
		<>
			<Section dark>
				<SectionHeader
					eyebrow="Legal"
					title="Privacy Policy"
					subtitle="How The Classical Academy collects, uses, and protects your information."
					centered
					dark
				/>
			</Section>

			<Section>
				<div className="prose prose-lg mx-auto max-w-3xl text-slate-dark">
					<h2 className="font-display text-2xl font-extrabold uppercase text-navy">
						Information We Collect
					</h2>
					<p>
						When you fill out our interest form, we collect your name, email address, phone number,
						student grade, instrument, and other details you choose to provide. We use this
						information solely to communicate with you about The Classical Academy.
					</p>

					<h2 className="mt-10 font-display text-2xl font-extrabold uppercase text-navy">
						How We Use Your Information
					</h2>
					<p>
						We use the information you provide to respond to inquiries, send updates about TCA
						events and admissions, and improve our programs. We do not sell or share your personal
						information with third parties for marketing purposes.
					</p>

					<h2 className="mt-10 font-display text-2xl font-extrabold uppercase text-navy">
						Data Protection
					</h2>
					<p>
						We take reasonable measures to protect your personal information. However, no method of
						electronic transmission or storage is completely secure.
					</p>

					<h2 className="mt-10 font-display text-2xl font-extrabold uppercase text-navy">
						Contact
					</h2>
					<p>
						If you have questions about this privacy policy, please contact us at{" "}
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
