import Container from "../Container/Container";

import star from "../../assets/svg/star.svg";
import arch1 from "../../assets/images/arch.png";
import jasmine from "../../assets/images/jasmine.png";

import css from "./Hero.module.scss";
import ReserveBtn from "../ReserveBtn/ReserveBtn";

export default function Hero() {
	return (
		<Container>
			<div className={css.wrapper}>
				<div className={css.heroInfo}>
					<h1 className={css.title}>Piękno w harmonii ciała i ducha</h1>
					<div className={css.starWrapper}>
						<img className={css.star} src={star} alt="Star" width={36} height={36} />
					</div>

					<p className={css.desc}>Nowoczesna regeneracja skóry i swiadoma troska o siebie.</p>
					<div className={css.btnWrapper}>
						<ReserveBtn />
						<a className={css.approachLink} href="#">
							Nasze podejście
						</a>
					</div>
					<img className={css.jasmine} src={jasmine} alt="Jasmine" />
				</div>

				<img className={css.arch} src={arch1} alt="Hero" />
			</div>
		</Container>
	);
}
