import "./Notes.css";
import NotesButton from "./NotesButton";

const NotesContainer = () => {
	return (
		<div className="noteContainer">
			<div className="notesHead">
				<div className="notesTitle">
					Notes
					<NotesButton />
				</div>
			</div>
		</div>
	);
};

export default NotesContainer;
