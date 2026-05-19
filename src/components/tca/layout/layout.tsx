import { Outlet } from "react-router-dom";

import { Footer } from "./footer";
import { Header } from "./header";
import { useScrollToTop } from "./use-scroll-to-top";

export function Layout() {
	useScrollToTop();

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
