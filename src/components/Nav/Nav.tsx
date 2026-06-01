import css from "./Nav.module.scss";

export default function Nav() {
	return (
		<nav>
			<ul className={css.navList}>
				<li>
					<a href="#about">O nas</a>
				</li>
				<li>
					<a href="#treatments">Zabiegi</a>
				</li>
				<li>
					<a href="#philosophy">Filozofia</a>
				</li>
				<li>
					<a href="#blog">Blog</a>
				</li>
				<li>
					<a href="#contact">Kontakt</a>
				</li>
			</ul>
		</nav>
	);
}
