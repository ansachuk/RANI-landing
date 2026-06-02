import css from "./AdvantageItem.module.scss";

import star from "../../assets/svg/star.svg";

const AdvantageItem = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
	return (
		<li className={css.advantageItem}>
			<img src={icon} alt={title} width={70} height={70} />
			<h3 className={css.title}>{title}</h3>
			<p className={css.description}>{description}</p>
			<img src={star} alt={title} width={32} height={32} />
		</li>
	);
};

export default AdvantageItem;
