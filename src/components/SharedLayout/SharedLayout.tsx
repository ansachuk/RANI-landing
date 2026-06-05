import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./SharedLayout.module.scss";

export default function SharedLayout() {
	return (
		<>
			<Header />

			<main>
				<Suspense fallback={<div className={styles.loading}>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>

			<Footer />
		</>
	);
}
