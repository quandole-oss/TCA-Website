import { createRoot } from "react-dom/client";

import { App } from "./App";
import "./styles.css";

const root = document.getElementById("root");

if (root === null) {
	document.body.innerHTML =
		'<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#334155"><p>Unable to load the application. Please refresh the page.</p></div>';
} else {
	createRoot(root).render(<App />);
}
