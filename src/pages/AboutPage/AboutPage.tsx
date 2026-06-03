import Container from "../../components/Container/Container";
import css from "./AboutPage.module.scss";

const values = [
	{
		icon: "♕",
		title: "Królowa nie jest symbolem perfekcji.",
		text: "Jest symbolem obecności, spokoju, siły i godności. Kobiety, która zna siebie.",
	},
	{
		icon: "✺",
		title: "Subtelna sztuka odnowy.",
		text: "Sposób wspierania jakości skóry, naturalnych rysów i pewności siebie.",
	},
	{
		icon: "☼",
		title: "Piękno spokojne i naturalne.",
		text: "Bez presji, bez przesady, bez utraty indywidualności.",
	},
];

const bottomItems = [
	"Subtelność zamiast przesady",
	"Indywidualne podejście i zrozumienie",
	"Naturalne rezultaty i harmonia",
	"Komfort, bezpieczeństwo i nowoczesna technologia",
	"Ty jesteś królową. My to podkreślamy.",
];

export default function AboutPage() {
	return (
		<main className={css.aboutPage}>
			<section className={css.hero}>
				<Container>
					<div className={css.heroInner}>
						<div className={css.heroContent}>
							<h1>RANI to piękno z klasą.</h1>

							<p>
								Kobiecość bez presji.
								<br />
								Luksus bez przesady.
								<br />
								Nowoczesna medycyna estetyczna
								<br />z ciepłem, delikatnością i intencją.
							</p>

							<div className={css.decorLine} />
						</div>

						<div className={css.heroImage}>PHOTO</div>
					</div>
				</Container>
			</section>

			<section className={css.intro}>
				<Container>
					<p className={css.introText}>
						Zainspirowana znaczeniem słowa „RANI” — oznaczającego królową — marka została stworzona wokół idei kobiety, która nie musi niczego
						udowadniać, by czuć swoją wartość.
					</p>

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

			<section className={css.story}>
				<Container>
					<div className={css.storyCard}>
						<div className={css.storyImage}>PHOTO</div>

						<div className={css.storyContent}>
							<p className={css.storyTitle}>
								Inspirowana ciepłem kobiecości i subtelną estetyką Indii, RANI reprezentuje nowoczesną wizję kobiecości —
							</p>

							<p className={css.caramel}>spokojną, elegancką, zmysłową, spełnioną i pełną wewnętrznego światła.</p>

							<div className={css.decorLine} />

							<p>
								To przestrzeń stworzona dla kobiet, które chcą czuć się dobrze same ze sobą — we własnej skórze, we własnym ciele, we własnej energii.
							</p>
						</div>
					</div>
				</Container>
			</section>

			<section className={css.truth}>
				<Container>
					<div className={css.truthCard}>
						<div className={css.truthContent}>
							<div className={css.smallIcon}>✺</div>

							<h2>
								Bo prawdziwe piękno nie polega
								<br />
								na stawaniu się kimś innym.
							</h2>

							<p className={css.truthLead}>Nie polega na pogoni za perfekcją ani ciągłym poprawianiu siebie.</p>

							<div className={css.decorLine} />

							<p>
								Prawdziwe piękno zaczyna się wtedy, gdy kobieta czuje się spokojnie, lekko i dobrze sama ze sobą. Gdy odzyskuje pewność siebie,
								harmonię i poczucie, że nadal jest sobą.
							</p>
						</div>

						<div className={css.truthImage}>PHOTO</div>
					</div>
				</Container>
			</section>

			<section className={css.final}>
				<Container>
					<h2>To nie transformacja.</h2>
					<p className={css.caramel}>To powrót do siebie.</p>

					<div className={css.finalLine} />

					<div className={css.bottomGrid}>
						{bottomItems.map((item, index) => (
							<div className={css.bottomItem} key={index}>
								<div className={css.bottomIcon}>✦</div>
								<p>{item}</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</main>
	);
}
