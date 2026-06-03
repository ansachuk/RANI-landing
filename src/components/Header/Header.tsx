import { useState } from "react";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import ReserveBtn from "../ReserveBtn/ReserveBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import css from "./Header.module.scss";

export default function Header() {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);

	return (
		<header>
			<Container className={css.headerContainer}>
				<Logo />
				<Nav />
				<ReserveBtn className={css.reserveBtn} />
				<button className={css.burgerBtn} type="button" onClick={() => setIsBurgerOpen(true)}>
					☰
				</button>
				<BurgerMenu isOpen={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} />
			</Container>
		</header>
	);
}
