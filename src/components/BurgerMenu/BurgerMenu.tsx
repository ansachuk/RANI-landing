import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import css from "./BurgerMenu.module.scss";
import Logo from "../Logo/Logo";
import ReserveBtn from "../ReserveBtn/ReserveBtn";

export default function BurgerMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const getNavLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? `${css.navLink} ${css.active}` : css.navLink);

	return (
		<div className={`${css.burgerMenu} ${isOpen ? css.open : ""}`}>
			<div className={css.header}>
				<Logo />
				<button className={css.closeBtn} type="button" onClick={onClose} aria-label="Close menu">
					×
				</button>
			</div>

			<nav className={css.nav}>
				<NavLink end className={getNavLinkClass} to="/RANI-landing" onClick={onClose}>
					<span>Home</span>
				</NavLink>

				<NavLink className={getNavLinkClass} to="/RANI-landing/about" onClick={onClose}>
					<span>O nas</span>
				</NavLink>

				<NavLink className={getNavLinkClass} to="/RANI-landing/treatment" onClick={onClose}>
					<span>Zabiegi</span>
				</NavLink>

				<NavLink className={getNavLinkClass} to="/RANI-landing/philosophy" onClick={onClose}>
					<span>Filozofia</span>
				</NavLink>

				<NavLink className={getNavLinkClass} to="/RANI-landing/contact" onClick={onClose}>
					<span>Kontakt</span>
				</NavLink>
			</nav>

			<ReserveBtn />
		</div>
	);
}
