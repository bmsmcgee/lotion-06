import "./NavBar.css";

const NavButton = ({ setShowNotesHead }) => {
	return (
		<button
			onClick={() => {
				setShowNotesHead((prevShowNotesHead) => !prevShowNotesHead);
			}}>
			&#9776;
		</button>
	);
};

export default NavButton;
