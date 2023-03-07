import "./Notes.css";
import NotesButton from "./NotesButton";
import Placeholder from "./NotesPlaceholder";
import WSPlaceHolder from "./workspacePlaceholder";

const NotesContainer = () => {
	return (
		<>
			<div className="noteContainer">
				<div className="notesHead">
					<div className="notesTitle">
						Notes
						<NotesButton />
					</div>
					<div className="savedNotes">
						<Placeholder />
					</div>
				</div>
				<div className="notesWorkspaceContainer">
					<WSPlaceHolder />
				</div>
			</div>
		</>
	);
};

export default NotesContainer;
