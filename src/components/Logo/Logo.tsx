import LogoIcon from "../../assets/svg/logo.svg";
import css from "./Logo.module.scss";

export default function Logo() {
	return (
		<div className={css.logoContainer}>
			<img src={LogoIcon} alt="Logo" width={150} height={150} />
			<div className={css.textWrapper}>
				<p className={css.brandName}>Rani</p>
				<p className={css.brandTagline}>Brain & Beauty Clinic</p>
			</div>
		</div>
	);
}
