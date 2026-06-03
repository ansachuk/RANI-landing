import { NavLink } from "react-router-dom";
import css from "./Nav.module.scss";

export default function Nav() {
	return (
		<nav>
			<ul className={css.navList}>
				<li>
					<NavLink className={({ isActive }) => (isActive ? `${css.navLink} ${css.active}` : css.navLink)} to="/RANI-landing/about">
						<span> O nas</span>
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? `${css.navLink} ${css.active}` : css.navLink)} to="/RANI-landing/treatment">
						<span>Zabiegi</span>
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? `${css.navLink} ${css.active}` : css.navLink)} to="/RANI-landing/philosophy">
						<span>Filozofia</span>
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? `${css.navLink} ${css.active}` : css.navLink)} to="/RANI-landing/contact">
						<span>Kontakt</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
