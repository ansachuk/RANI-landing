import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import ReserveBtn from "../ReserveBtn/ReserveBtn";

import css from "./Header.module.scss";

export default function Header() {
	return (
		<header>
			<Container className={css.headerContainer}>
				<Logo />
				<Nav />
				<ReserveBtn />
			</Container>
		</header>
	);
}
