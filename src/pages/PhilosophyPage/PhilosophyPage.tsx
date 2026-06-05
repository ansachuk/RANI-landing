import Container from "../../components/Container/Container";
import ReserveBtn from "../../components/ReserveBtn/ReserveBtn";

import css from "./PhilosophyPage.module.scss";

import hero from "../../assets/images/philosophy/hero.webp";
import effect from "../../assets/images/philosophy/effect.webp";
import icon1 from "../../assets/images/philosophy/icon1.webp";
import icon2 from "../../assets/images/philosophy/icon2.webp";
import icon3 from "../../assets/images/philosophy/icon3.webp";
import icon4 from "../../assets/images/philosophy/icon4.webp";
import icon5 from "../../assets/images/philosophy/icon5.webp";
import icon6 from "../../assets/images/philosophy/icon6.webp";
import icon7 from "../../assets/images/philosophy/icon7.webp";

import hands from "../../assets/images/about/hands.webp";
import crown from "../../assets/images/about/crown.webp";
import lotus from "../../assets/images/lotus.webp";
import headLeft from "../../assets/images/head-left.webp";
import sun from "../../assets/images/sun.webp";

const improvements = [
	{
		icon: icon1,
		text: "poprawę owalu twarzy",
	},
	{
		icon: icon2,
		text: "wygładzenie bruzd i cieni",
	},
	{
		icon: icon3,
		text: "uniesienie policzków i środkowej części twarzy",
	},
	{
		icon: icon4,
		text: "przywrócenie bardziej świeżego i wypoczętego wyglądu",
	},
	{
		icon: icon5,
		text: "poprawę linii żuchwy",
	},
	{
		icon: icon6,
		text: "poprawę proporcji i harmonii twarzy",
	},
	{
		icon: icon7,
		text: "zmniejszenie efektu „opadania” tkanek",
	},
];

const values = [
	{
		icon: headLeft,
		title: "HOLISTYCZNE PODEJŚCIE",
		text: "Łączymy wiedzę medyczną z troską o ciało, umysł i emocje.",
	},
	{
		icon: lotus,
		title: "NATURALNE PIĘKNO",
		text: "Wydobywamy Twoje piękno, podkreślając to, co wyjątkowe.",
	},
	{
		icon: sun,
		title: "NOWOCZESNE TECHNOLOGIE",
		text: "Pracujemy na sprawdzonych i bezpiecznych rozwiązaniach.",
	},
	{
		icon: hands,
		title: "TROSKA O CIEBIE",
		text: "Tworzymy przestrzeń, w której możesz poczuć się sobą.",
	},
];

export default function PhilosophyPage() {
	return (
		<>
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

						<img className={css.heroImage} src={hero} alt="Hero" />
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

							<img className={css.decorPhoto} src={effect} alt="vase with candle" />
						</div>

						<div className={css.rightColumn}>
							<div className={css.improvementsCard}>
								<h2>Co można poprawić dzięki wolumetrii?</h2>
								<div className={css.cardDecor} />

								<div className={css.improvementsGrid}>
									{improvements.map((item, index) => (
										<div className={css.improvementItem} key={index}>
											<img className={css.improvementIcon} src={item.icon} alt={item.text} />

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
									<div className={css.infoIcon}>
										<img src={crown} alt="Korona" />
									</div>
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
						<ReserveBtn />
						<div className={css.line} />
					</div>

					<div className={css.valuesGrid}>
						{values.map((item, index) => (
							<div className={css.valueCard} key={index}>
								<img className={css.valueIcon} src={item.icon} alt={item.title} />

								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</>
	);
}
