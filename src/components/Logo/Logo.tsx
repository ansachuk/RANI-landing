import { Link } from "react-router-dom";
import LogoIcon from "../../assets/images/logo.webp";

import css from "./Logo.module.scss";

export default function Logo() {
	return (
		<Link to="/RANI-landing" className={css.logoContainer}>
			<img className={css.logoImage} src={LogoIcon} alt="Logo" />
			<div className={css.textWrapper}>
				<p className={css.brandName}>Rani</p>
				<p className={css.brandTagline}>Brain & Beauty Clinic</p>
			</div>
		</Link>
	);
}
