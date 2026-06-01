import Container from "../Container/Container";

import css from "./ThumbsXL.module.scss";

import star from "../../assets/svg/star.svg";

export default function ThumbsXL() {
	return (
		<Container className={css.container}>
			<ul className={css.list}>
				<li>
					<div className={css.thumb}>
						<h4>1</h4>
						<div className={css.starWrapper}>
							<img className={css.star} src={star} alt="Star" width={22} height={22} />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptate quae autem.</p>
						</div>
					</div>
				</li>
				<li>
					<div className={css.thumb}>
						<h4>2</h4>
					</div>
				</li>
				<li>
					<div className={css.thumb}>
						<h4>3</h4>
					</div>
					<div className={css.thumb}></div>
				</li>
			</ul>
		</Container>
	);
}
