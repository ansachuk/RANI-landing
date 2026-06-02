import Container from "../Container/Container";

import css from "./ThumbsSM.module.scss";

import vase from "../../assets/images/vase.webp";
import syringes from "../../assets/images/syringes.webp";
import injection from "../../assets/images/injection.webp";
import ampoules from "../../assets/images/ampoules.webp";
import dropper from "../../assets/images/dropper.webp";

const thumbs = [
	{
		image: syringes,
		title: "Medycyna estetyczna",
		description: "Bezpieczne i skuteczne zabiegi poprawiające wygląd i samopoczucie.",
	},
	{
		image: injection,
		title: "Regeneracja skóry",
		description: "Stymulujemy naturaine procesy odnowy i nravwacamy zdrowy blask.",
	},
	{
		image: vase,
		title: "Terapie wspierające",
		description: "Indywidualnie dobrane terapie wspierające cialo, umysl i dusze.",
	},
	{
		image: ampoules,
		title: "Diagnostyka",
		description: "Nowoczesna diagnostyka pozwala nam dzialać skutecznie i precyzyjnie.",
	},
	{
		image: dropper,
		title: "Wellbeing",
		description: "Troska o dobre samopoczucie. Energia i zarowie na co dzieni.",
	},
];

export default function ThumbsSM() {
	return (
		<Container className={css.container}>
			<h2>Nasze podejście do zdrowia i piękna</h2>
			<ul className={css.list}>
				{thumbs.map((thumb, index) => (
					<li key={index} className={css.thumb}>
						<img className={css.image} src={thumb.image} alt={thumb.title} />
						<div className={css.info}>
							<h4 className={css.title}>{thumb.title}</h4>
							<p className={css.description}>{thumb.description}</p>
						</div>
					</li>
				))}
			</ul>
		</Container>
	);
}
