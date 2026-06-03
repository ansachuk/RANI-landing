import { Suspense, lazy } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";

const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const TreatmentPage = lazy(() => import("./pages/TreatmentPage/TreatmentPage"));
const PhilosophyPage = lazy(() => import("./pages/PhilosophyPage/PhilosophyPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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

				<Route path="*" element={<Navigate to="/RANI-landing`" replace />} />
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
