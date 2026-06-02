import star from "../../assets/svg/star.svg";
import css from "./ReserveBtn.module.scss";

export default function ReserveBtn({ className }: { className?: string }) {
	return (
		<button className={`${css.reserveBtn} ${className || ""}`}>
			Zarezerwuj wizytę <img src={star} alt="Star" width={16} height={16} />
		</button>
	);
}
