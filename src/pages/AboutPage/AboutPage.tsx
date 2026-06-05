import Container from "../../components/Container/Container";

import hero from "../../assets/images/about/hero.webp";
import vase from "../../assets/images/about/vase.webp";
import wall from "../../assets/images/about/wall.webp";
import crown from "../../assets/images/about/crown.webp";
import hands from "../../assets/images/about/hands.webp";
import rectStar from "../../assets/images/about/rect-star.webp";
import lotus from "../../assets/images/lotus.webp";
import headRight from "../../assets/images/head-right.webp";
import sun from "../../assets/images/sun.webp";

import star from "../../assets/svg/star.svg";

import css from "./AboutPage.module.scss";

const values = [
	{
		icon: crown,
		title: "Królowa nie jest symbolem perfekcji.",
		text: "Jest symbolem obecności, spokoju, siły i godności. Kobiety, która zna siebie.",
	},
	{
		icon: lotus,
		title: "Subtelna sztuka odnowy.",
		text: "Sposób wspierania jakości skóry, naturalnych rysów i pewności siebie.",
	},
	{
		icon: sun,
		title: "Piękno spokojne i naturalne.",
		text: "Bez presji, bez przesady, bez utraty indywidualności.",
	},
];

const bottomItems = [
	{ title: "Subtelność zamiast przesady", icon: lotus },
	{ title: "Indywidualne podejście i zrozumienie", icon: hands },
	{ title: "Naturalne rezultaty i harmonia", icon: sun },
	{ title: "Komfort, bezpieczeństwo i nowoczesna technologia", icon: rectStar },
	{ title: "Ty jesteś królową. My to podkreślamy.", icon: crown },
];

export default function AboutPage() {
	return (
		<>
			<section className={css.hero}>
				<Container>
					<div className={css.heroInner}>
						<div className={css.heroContent}>
							<h1>RANI to piękno z klasą.</h1>
							<p>Kobiecość bez presji.</p>
							<p>Luksus bez przesady.</p>
							<p> Nowoczesna medycyna estetyczna</p>
							<p>z ciepłem, delikatnością i intencją.</p>

							<div className={css.starWrapper}>
								<img className={css.star} src={star} alt="Star" />
							</div>
						</div>

						<div className={css.heroImage}>
							<img src={hero} alt="About RANI" />
						</div>
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
								<div className={css.valueIcon}>
									<img src={item.icon} alt={item.title} />
								</div>
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
						<div className={css.storyImage}>
							<img src={vase} alt="Vase" />
						</div>

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
							<div className={css.smallIcon}>
								<img src={headRight} alt="Head right" />
							</div>

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

						<div className={css.truthImage}>
							<img src={wall} alt="Wall" />
						</div>
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
								<div className={css.iconWrapper}>
									<img className={css.bottomIcon} src={item.icon} alt={item.title} />
								</div>
								<p>{item.title}</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</>
	);
}
