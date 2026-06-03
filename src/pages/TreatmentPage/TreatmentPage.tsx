import Container from "../../components/Container/Container";
import css from "./TreatmentPage.module.scss";

const treatments = [
	{
		num: "01",
		name: "Laser tulowy — terapia przebarwień, blasku i fotostarzenia",
		cardTitle: "Rani Thulium Glow",
		sideTitle: "Laser tulowy — efekt glow, baby face i rozświetlenia skóry",
		icon: "✦",
	},
	{
		num: "02",
		name: "Laser erbowo-szklany — nieablacyjna przebudowa skóry",
		cardTitle: "Rani Collagen Renewal",
		sideTitle: "Dla kogo?",
		icon: "✺",
	},
];

const benefits = [
	"Konsultacja i plan terapii dopasowany do skóry",
	"Nowoczesne technologie laserowe",
	"Bezpieczeństwo i komfort na każdym etapie",
	"Naturalne efekty, regeneracja i zdrowy wygląd skóry",
];

export default function TreatmentPage() {
	return (
		<main className={css.page}>
			<section className={css.hero}>
				<Container>
					<div className={css.heroInner}>
						<div className={css.heroText}>
							<p className={css.overline}>ZABIEGI</p>
							<div className={css.smallDecor} />

							<h1>LASERY</h1>

							<p className={css.script}>technologie prowadzące skórę przez proces odbudowy</p>

							<p>
								W RaniMed laseroterapia nie jest przypadkowym zabiegiem wykonywanym „na problem”. To precyzyjna forma pracy ze skórą — jej kolorytem,
								strukturą, napięciem, przebarwieniami i procesami regeneracji.
							</p>

							<p>
								Wykorzystujemy technologie laserowe, które pozwalają działać na różnych poziomach skóry: od poprawy świetlistości i redukcji
								przebarwień, po stymulację kolagenu, wygładzenie struktury i odbudowę jakości tkanek.
							</p>

							<p>
								Każdy zabieg poprzedzony jest konsultacją, podczas której oceniamy stan skóry, jej fototyp, skłonność do przebarwień, potrzeby
								regeneracyjne oraz realny cel terapii.
							</p>

							<div className={css.note}>
								<div className={css.noteIcon}>♕</div>
								<p>
									Naszą filozofią nie jest agresywna zmiana twarzy, ale inteligentna regeneracja skóry — tak, aby wyglądała zdrowiej, świeżej i
									bardziej harmonijnie.
								</p>
							</div>
						</div>

						<div className={css.heroImage}>PHOTO</div>
					</div>
				</Container>
			</section>

			<section className={css.treatments}>
				<Container>
					<div className={css.cards}>
						{treatments.map(item => (
							<article className={css.treatmentCard} key={item.num}>
								<div className={css.photoBox}>
									<div className={css.photo}>PHOTO</div>

									<div className={css.floatingCard}>
										<div className={css.floatingIcon}>{item.icon}</div>
										<div>
											<h3>{item.cardTitle}</h3>
											<p>LASEROWA TERAPIA BLASKU, PRZEBARWIEŃ I FOTOSTARZENIA</p>
										</div>
									</div>
								</div>

								<div className={css.mainContent}>
									<div className={css.titleRow}>
										<span>{item.num}</span>
										<h2>{item.name}</h2>
									</div>

									<p>Laser działa w sposób precyzyjny, wspierając naturalną regenerację skóry i poprawiając jej jakość bez zmiany rysów twarzy.</p>

									<h4>DLA KOGO JEST TEN ZABIEG?</h4>

									<ul>
										<li>przebarwienia posłoneczne</li>
										<li>nierówny koloryt skóry</li>
										<li>utrata blasku</li>
										<li>rozszerzone pory</li>
										<li>drobne nierówności skóry</li>
										<li>szara, zmęczona cera</li>
									</ul>

									<h4>JAKICH EFEKTÓW MOŻNA OCZEKIWAĆ?</h4>

									<p>
										Po serii zabiegów skóra może stać się bardziej jednolita, rozświetlona, gładsza i świeższa. Efekty narastają stopniowo, ponieważ
										laser pobudza naturalne procesy regeneracyjne skóry.
									</p>
								</div>

								<aside className={css.sideBox}>
									<div className={css.sideIcon}>{item.icon}</div>
									<h3>{item.sideTitle}</h3>
									<p>
										Skóra może wyglądać na bardziej miękką, jednolitą, promienną i wygładzoną — jak po dobrze przespanej nocy, wakacjach i idealnej
										pielęgnacji naraz.
									</p>
								</aside>
							</article>
						))}
					</div>
				</Container>
			</section>

			<section className={css.cta}>
				<Container>
					<div className={css.ctaTop}>
						<div className={css.line} />
						<div>
							<h2>Technologia. Wiedza. Indywidualne podejście.</h2>
							<p>Laseroterapia, która regeneruje, nie zmienia.</p>
						</div>
						<a href="#contact" className={css.button}>
							ZAREZERWUJ KONSULTACJĘ ✦
						</a>
						<div className={css.line} />
					</div>

					<div className={css.benefits}>
						{benefits.map((item, index) => (
							<div className={css.benefit} key={index}>
								<div className={css.benefitIcon}>✺</div>
								<p>{item}</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</main>
	);
}
