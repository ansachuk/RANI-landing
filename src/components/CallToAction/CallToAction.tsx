import Container from "../Container/Container";
import ReserveBtn from "../ReserveBtn/ReserveBtn";

import css from "./CallToAction.module.scss";

import candle from "../../assets/images/candle.png";

export default function CallToAction() {
	return (
		<section className={css.callToAction}>
			<Container className={css.container}>
				<div className={css.wrapper}>
					<h2 className={css.title}>Twoja podróż do równowagi zaczyna się tutaj.</h2>
					<ReserveBtn />
				</div>
				<div className={css.imgWrapper}>
					<img src={candle} alt="candle" className={css.candle} />
				</div>
			</Container>
		</section>
	);
}
