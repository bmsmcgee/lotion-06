import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary navBox">
			<div
				className="container-fluid"
				style={{
					justifyContent: "center",
					fontFamily: "Muli, sans-serif",
					fontSize: 38,
					fontWeight: "bold",
				}}>
				Lotion
			</div>
		</nav>
	);
};

export default NavBar;
