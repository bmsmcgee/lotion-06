import "./NavBar.css";
import NavButton from "./NavButton";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary navBox">
			<div className="headText">Lotion</div>
			<div className="headSubText">Like Notion, but worse</div>
			<NavButton />
		</nav>
	);
};

export default NavBar;
