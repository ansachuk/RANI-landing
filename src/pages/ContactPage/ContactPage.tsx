import Container from "../../components/Container/Container";
import css from "./ContactPage.module.scss";

import hero from "../../assets/images/contact/hero.webp";

import call from "../../assets/svg/call.svg";
import mail from "../../assets/svg/mail.svg";
import pin from "../../assets/svg/pin.svg";
import clock from "../../assets/svg/clock.svg";

const contactItems = [
	{
		icon: call,
		text: "+48 123 456 789",
	},
	{
		icon: mail,
		text: "kontakt@rani.pl",
	},
	{
		icon: pin,
		text: (
			<>
				ul. Orienta 18
				<br />
				00-123 Warszawa
			</>
		),
	},
	{
		icon: clock,
		text: (
			<>
				Poniedziałek – Piątek: 9:00 – 20:00
				<br />
				Sobota: 10:00 – 16:00
			</>
		),
	},
];

export default function ContactPage() {
	return (
		<>
			<section className={css.hero}>
				<Container>
					<div className={css.heroInner}>
						<div className={css.content}>
							<h1>
								Skontaktuj się
								<br />z nami
							</h1>

							<div className={css.decorLine} />

							<p className={css.description}>
								Jesteśmy tutaj, aby odpowiedzieć
								<br />
								na Twoje pytania i pomóc w wyborze
								<br />
								najlepszej ścieżki dla Ciebie.
							</p>

							<p className={css.script}>Zadbaj o siebie. Zasługujesz.</p>

							<ul className={css.contactList}>
								{contactItems.map((item, index) => (
									<li className={css.contactItem} key={index}>
										<img className={css.icon} src={item.icon} alt="icon" />
										<p>{item.text}</p>
									</li>
								))}
							</ul>
						</div>

						<div className={css.imageWrap}>
							<img className={css.heroImage} src={hero} alt="Contact hero" />
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
