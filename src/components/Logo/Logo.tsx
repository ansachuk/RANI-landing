import LogoIcon from "../../assets/images/logo.webp";

import css from "./Logo.module.scss";

export default function Logo() {
	return (
		<div className={css.logoContainer}>
			<img src={LogoIcon} alt="Logo" width={80} />
			<div className={css.textWrapper}>
				<p className={css.brandName}>Rani</p>
				<p className={css.brandTagline}>Brain & Beauty Clinic</p>
			</div>
		</div>
	);
}
