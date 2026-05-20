import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@/components/tca/layout/layout";
import { AboutPage } from "@/components/tca/pages/about";
import { AdmissionsPage } from "@/components/tca/pages/admissions";
import { ContactPage } from "@/components/tca/pages/contact";
import { EventsPage } from "@/components/tca/pages/events";
import { FAQPage } from "@/components/tca/pages/faq";
import { GuidesPage } from "@/components/tca/pages/guides";
import { HomePage } from "@/components/tca/pages/home";
import { ModelPage } from "@/components/tca/pages/model";
import { MusicProgramPage } from "@/components/tca/pages/music-program";
import { NotFoundPage } from "@/components/tca/pages/not-found";
import { PartnersPage } from "@/components/tca/pages/partners";
import { PrivacyPage } from "@/components/tca/pages/privacy";
import { TermsPage } from "@/components/tca/pages/terms";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="the-model" element={<ModelPage />} />
					<Route path="music-program" element={<MusicProgramPage />} />
					<Route path="admissions" element={<AdmissionsPage />} />
					<Route path="events" element={<EventsPage />} />
					<Route path="guides" element={<GuidesPage />} />
					<Route path="partners" element={<PartnersPage />} />
					<Route path="faq" element={<FAQPage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="privacy" element={<PrivacyPage />} />
					<Route path="terms" element={<TermsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
