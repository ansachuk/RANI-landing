import Container from "../Container/Container";

import css from "./ThumbsXL.module.scss";

import star from "../../assets/svg/star.svg";

export default function ThumbsXL() {
	return (
		<Container className={css.container}>
			<ul className={css.list}>
				<li className={`${css.thumb} ${css.medicine}`}>
					<h4>MEDYCYNA ESTETYCZNA</h4>
					<div className={css.starWrapper}>
						<img className={css.star} src={star} alt="Star" width={22} height={22} />
					</div>
					<p className={css.description}>Nowoczesne technologie Idocadezene da naturalnych efektów.</p>
				</li>
				<li className={`${css.thumb} ${css.philosophy}`}>
					<h4>FILOZOFIA RANI</h4>
					<div className={css.starWrapper}>
						<img className={css.star} src={star} alt="Star" width={22} height={22} />
					</div>
					<p className={css.description}>Holistyczne podejscie. które wspiera Twoje piękno od wewnatrz.</p>
				</li>
				<li className={`${css.thumb} ${css.contact}`}>
					<h4>KONTAKT</h4>
					<div className={css.starWrapper}>
						<img className={css.star} src={star} alt="Star" width={22} height={22} />
					</div>
					<div className={css.contactInfo}>
						<p>
							<a className={css.description} href="tel:+48 123 456 789">
								+48 123 456 789
							</a>
						</p>
						<p>
							<a className={css.description} href="mailto:kontakt@rani.pl">
								kontakt@rani.pl
							</a>
						</p>
						<p>
							<a className={css.description} target="_blank" rel="noopener noreferrer" href="https://www.rani.pl">
								ul. Orienta 18 00-123 Warszawa
							</a>
						</p>
					</div>
				</li>
			</ul>
		</Container>
	);
}
