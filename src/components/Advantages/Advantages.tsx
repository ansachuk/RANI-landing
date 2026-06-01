import Container from "../Container/Container";

import css from "./Advantages.module.scss";

import star from "../../assets/star.svg";
import AdvantageItem from "../AdvantageItem/AdvantageItem";

const advantagesData = [
	{
		icon: star,
		title: "Medycyna estetyczna",
		description: "Zaawansowane technologie oparte na wiedzy i doswiadczeniu.",
	},
	{
		icon: star,
		title: "Holistyczne podejście",
		description: "Ciato, umysi i emocje w pelnej harmonii.",
	},
	{
		icon: star,
		title: "Świadoma troska o siebie",
		description: "Przestrzen, w której odnajdziesz siebie na nowo.",
	},
	{
		icon: star,
		title: "Naturalne piękno",
		description: "Wydobywamy Twoje wewnętrzne światło",
	},
];

export default function Advantages() {
	return (
		<Container className={css.advantagesContainer}>
			<h2 className={css.advantagesTitle}>Holistyczne podejście do Twojego piękna</h2>
			<div className={css.starWrapper}>
				<img className={css.star} src={star} alt="Star" width={22} height={22} />
			</div>
			<ul className={css.advantagesList}>
				{advantagesData.map((advantage, index) => (
					<AdvantageItem key={index} icon={advantage.icon} title={advantage.title} description={advantage.description} />
				))}
			</ul>
		</Container>
	);
}
