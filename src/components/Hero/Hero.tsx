import { Link } from "react-router-dom";

import Container from "../Container/Container";
import ReserveBtn from "../ReserveBtn/ReserveBtn";

import star from "../../assets/svg/star.svg";
import arch from "../../assets/images/arch.webp";
import jasmine from "../../assets/images/jasmine.webp";

import css from "./Hero.module.scss";

export default function Hero() {
	return (
		<Container className={css.container}>
			<div className={css.wrapper}>
				<div className={css.heroInfo}>
					<h1 className={css.title}>Piękno w harmonii ciała i ducha</h1>
					<div className={css.starWrapper}>
						<img className={css.star} src={star} alt="Star" />
					</div>

					<p className={css.desc}>Nowoczesna regeneracja skóry i swiadoma troska o siebie.</p>
					<div className={css.btnWrapper}>
						<ReserveBtn className={css.reserveBtn} />
						<Link className={css.approachLink} to="/RANI-landing/about">
							Nasze podejście
						</Link>
					</div>
				</div>

				<img className={css.jasmine} src={jasmine} alt="Jasmine" />

				<img className={css.arch} src={arch} alt="Hero" />
			</div>
		</Container>
	);
}
