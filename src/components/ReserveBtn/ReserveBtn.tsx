import { Link } from "react-router-dom";

import star from "../../assets/svg/star.svg";
import css from "./ReserveBtn.module.scss";

export default function ReserveBtn({ className }: { className?: string }) {
	return (
		<Link to="https://booksy.com/pl-pl/" target="_blank" rel="noopener noreferrer" className={`${css.reserveBtn} ${className || ""}`}>
			Zarezerwuj wizytę <img src={star} alt="Star" width={16} height={16} />
		</Link>
	);
}
