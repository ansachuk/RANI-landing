import { Suspense } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import TreatmentPage from "./pages/TreatmentPage/TreatmentPage";
import PhilosophyPage from "./pages/PhilosophyPage/PhilosophyPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";

import "./App.scss";

function App() {
	return (
		<>
			<Routes>
				<Route path="/RANI-landing" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="treatment" element={<TreatmentPage />} />
					<Route path="philosophy" element={<PhilosophyPage />} />
					<Route path="contact" element={<ContactPage />} />
				</Route>
			</Routes>
		</>
	);
}

const SharedLayout = () => {
	return (
		<>
			<Header />

			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>

			<Footer />
		</>
	);
};

export default App;
