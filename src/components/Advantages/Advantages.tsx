import Container from "../Container/Container";
import AdvantageItem from "../AdvantageItem/AdvantageItem";

import css from "./Advantages.module.scss";

import star from "../../assets/svg/star.svg";
import headLeft from "../../assets/images/head-left.webp";
import headRight from "../../assets/images/head-right.webp";
import lotus from "../../assets/images/lotus.webp";
import sun from "../../assets/images/sun.webp";

const advantagesData = [
	{
		icon: headLeft,
		title: "Medycyna estetyczna",
		description: "Zaawansowane technologie oparte na wiedzy i doswiadczeniu.",
	},
	{
		icon: lotus,
		title: "Holistyczne podejście",
		description: "Ciato, umysi i emocje w pelnej harmonii.",
	},
	{
		icon: sun,
		title: "Świadoma troska o siebie",
		description: "Przestrzen, w której odnajdziesz siebie na nowo.",
	},
	{
		icon: headRight,
		title: "Naturalne piękno",
		description: "Wydobywamy Twoje wewnętrzne światło",
	},
];

export default function Advantages() {
	return (
		<Container className={css.advantagesContainer}>
			<h2 className={css.advantagesTitle}>Holistyczne podejście do Twojego piękna</h2>
			<div className={css.starWrapper}>
				<img className={css.star} src={star} alt="Star" width={40} height={40} />
			</div>
			<ul className={css.advantagesList}>
				{advantagesData.map((advantage, index) => (
					<AdvantageItem key={index} icon={advantage.icon} title={advantage.title} description={advantage.description} />
				))}
			</ul>
		</Container>
	);
}
