import { CTAButton } from "@/components/tca/ui/cta-button";
import { Section } from "@/components/tca/ui/section";

export function NotFoundPage() {
	return (
		<Section dark className="text-center">
			<p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan">Page Not Found</p>
			<h1 className="font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
				404
			</h1>
			<p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-light">
				The page you're looking for doesn't exist or has been moved. Let's get you back on track.
			</p>
			<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
				<CTAButton to="/">Back to Home</CTAButton>
				<CTAButton to="/contact" variant="outline">
					Contact Us
				</CTAButton>
			</div>
		</Section>
	);
}
