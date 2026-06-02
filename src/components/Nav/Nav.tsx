import { NavLink } from "react-router-dom";
import css from "./Nav.module.scss";

export default function Nav() {
	return (
		<nav>
			<ul className={css.navList}>
				<li>
					<NavLink to="/RANI-landing/about">O nas</NavLink>
				</li>
				<li>
					<NavLink to="/RANI-landing/treatment">Zabiegi</NavLink>
				</li>
				<li>
					<NavLink to="/RANI-landing/philosophy">Filozofia</NavLink>
				</li>

				<li>
					<NavLink to="/RANI-landing/contact">Kontakt</NavLink>
				</li>
			</ul>
		</nav>
	);
}
