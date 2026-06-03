import Container from "../../components/Container/Container";
import css from "./ContactPage.module.scss";

const contactItems = [
	{
		icon: "☎",
		text: "+48 123 456 789",
	},
	{
		icon: "✉",
		text: "kontakt@rani.pl",
	},
	{
		icon: "◆",
		text: (
			<>
				ul. Orienta 18
				<br />
				00-123 Warszawa
			</>
		),
	},
	{
		icon: "◷",
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
		<main className={css.page}>
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
										<div className={css.icon}>{item.icon}</div>
										<p>{item.text}</p>
									</li>
								))}
							</ul>
						</div>

						<div className={css.imageWrap}>
							<div className={css.heroImage}>PHOTO</div>
						</div>
					</div>
				</Container>
			</section>
		</main>
	);
}
