import star from "../../assets/svg/star.svg";
import css from "./ReserveBtn.module.scss";

export default function ReserveBtn() {
	return (
		<button className={css.reserveBtn}>
			Zarezerwuj wizytę <img src={star} alt="Star" width={16} height={16} />
		</button>
	);
}
