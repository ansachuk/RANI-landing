import Container from "../../components/Container/Container";
import css from "./PhilosophyPage.module.scss";

const improvements = [
	{
		icon: "◯",
		text: "poprawę owalu twarzy",
	},
	{
		icon: "≋",
		text: "wygładzenie bruzd i cieni",
	},
	{
		icon: "♧",
		text: "uniesienie policzków i środkowej części twarzy",
	},
	{
		icon: "✧",
		text: "przywrócenie bardziej świeżego i wypoczętego wyglądu",
	},
	{
		icon: "⌣",
		text: "poprawę linii żuchwy",
	},
	{
		icon: "⚖",
		text: "poprawę proporcji i harmonii twarzy",
	},
	{
		icon: "∪",
		text: "zmniejszenie efektu „opadania” tkanek",
	},
];

const values = [
	{
		icon: "♕",
		title: "HOLISTYCZNE PODEJŚCIE",
		text: "Łączymy wiedzę medyczną z troską o ciało, umysł i emocje.",
	},
	{
		icon: "✺",
		title: "NATURALNE PIĘKNO",
		text: "Wydobywamy Twoje piękno, podkreślając to, co wyjątkowe.",
	},
	{
		icon: "☼",
		title: "NOWOCZESNE TECHNOLOGIE",
		text: "Pracujemy na sprawdzonych i bezpiecznych rozwiązaniach.",
	},
	{
		icon: "♡",
		title: "TROSKA O CIEBIE",
		text: "Tworzymy przestrzeń, w której możesz poczuć się sobą.",
	},
];

export default function PhilosophyPage() {
	return (
		<main className={css.page}>
			<section className={css.hero}>
				<Container>
					<div className={css.heroInner}>
						<div className={css.heroContent}>
							<h1>
								Wolumetria twarzy —
								<br />
								przywrócenie harmonii
								<br />i proporcji
							</h1>

							<div className={css.decorLine} />

							<p>
								Przywracamy naturalną objętość tam,
								<br />
								gdzie czas ją odebrał.
							</p>

							<p className={css.script}>Piękno w harmonii.</p>
						</div>

						<div className={css.heroImage}>PHOTO</div>
					</div>
				</Container>
			</section>

			<section className={css.contentSection}>
				<Container>
					<div className={css.contentGrid}>
						<div className={css.leftColumn}>
							<div className={css.textBlock}>
								<div className={css.sideIcon}>✥</div>

								<div>
									<p>
										Z wiekiem twarz traci nie tylko jędrność skóry, ale również naturalną objętość tkanek. Dochodzi do stopniowego zaniku tkanki
										tłuszczowej, osłabienia rusztowania kolagenowego oraz zmiany proporcji twarzy.
									</p>

									<p>Efektem może być utrata owalu, opadanie tkanek, pogłębienie bruzd oraz bardziej zmęczony wygląd.</p>
								</div>
							</div>

							<div className={css.textBlock}>
								<div className={css.sideIcon}>✥</div>

								<div>
									<p>
										Wolumetria twarzy to zabieg mający na celu przywrócenie harmonii rysów, poprawę konturu twarzy oraz subtelne uniesienie tkanek.
									</p>

									<p>
										Nowoczesna wolumetria nie polega na nadmiernym „powiększaniu” twarzy, ale na strategicznej odbudowie objętości w miejscach, gdzie
										została ona utracona.
									</p>
								</div>
							</div>

							<div className={css.decorPhoto}>PHOTO</div>
						</div>

						<div className={css.rightColumn}>
							<div className={css.improvementsCard}>
								<h2>Co można poprawić dzięki wolumetrii?</h2>
								<div className={css.cardDecor} />

								<div className={css.improvementsGrid}>
									{improvements.map((item, index) => (
										<div className={css.improvementItem} key={index}>
											<div className={css.improvementIcon}>{item.icon}</div>
											<p>{item.text}</p>
										</div>
									))}
								</div>
							</div>

							<div className={css.naturalBlock}>
								<div className={css.smallDecorIcon}>✥</div>

								<h2>
									Naturalny efekt
									<br />i indywidualne podejście
								</h2>

								<p>W RaniMed stawiamy na naturalne rezultaty i zachowanie indywidualnych rysów twarzy.</p>

								<p>Celem zabiegu jest subtelne odmłodzenie oraz przywrócenie twarzy świeżości i struktury, a nie stworzenie sztucznego efektu.</p>

								<div className={css.infoBox}>
									<div className={css.infoIcon}>♕</div>
									<p>
										Każda twarz starzeje się inaczej, dlatego plan terapii zawsze dobierany jest indywidualnie — z uwzględnieniem anatomii, jakości
										skóry oraz oczekiwanego efektu.
									</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<section className={css.ctaSection}>
				<Container>
					<div className={css.ctaTop}>
						<div className={css.line} />
						<h2>Gotowa na zmianę, która przywraca harmonię?</h2>
						<a href="#contact" className={css.button}>
							ZAREZERWUJ KONSULTACJĘ ✥
						</a>
						<div className={css.line} />
					</div>

					<div className={css.valuesGrid}>
						{values.map((item, index) => (
							<div className={css.valueCard} key={index}>
								<div className={css.valueIcon}>{item.icon}</div>
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</main>
	);
}
