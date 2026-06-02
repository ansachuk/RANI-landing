import Container from "../Container/Container";
import ReserveBtn from "../ReserveBtn/ReserveBtn";

import css from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer>
			<Container className={css.container}>
				<div className={css.wrapper}>
					<p className={css.regular}>Zasługujesz na to, by czuć sie soba na nowo.</p>
					<p className={css.caramel}>Jestesmy tutaj, by Cię poprowadzic.</p>
				</div>
				<ReserveBtn className={css.reserveBtn} />
			</Container>
		</footer>
	);
}
