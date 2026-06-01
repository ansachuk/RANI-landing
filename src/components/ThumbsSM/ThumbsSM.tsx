import Container from "../Container/Container";

import css from "./ThumbsSM.module.scss";

import vase from "../../assets/images/vase.png";

const thumbs = [
	{
		image: vase,
		title: "Medycyna estetyczna",
		description: "Bezpieczne i skuteczne zabiegi poprawiające wygląd i samopoczucie.",
	},
	{
		image: vase,
		title: "Regeneracja skóry",
		description: "Stymulujemy naturaine procesy odnowy i nravwacamy zdrowy blask.",
	},
	{
		image: vase,
		title: "Terapie wspierające",
		description: "Indywidualnie dobrane terapie wspierające cialo, umysl i dusze.",
	},
	{
		image: vase,
		title: "Diagnostyka",
		description: "Nowoczesna diagnostyka pozwala nam dzialać skutecznie i precyzyjnie.",
	},
	{
		image: vase,
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
						<img src={thumb.image} alt={thumb.title} />
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
