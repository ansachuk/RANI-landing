import css from "./Container.module.scss";

export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
	return <div className={`${css.container} ${className || ""}`}>{children}</div>;
}
