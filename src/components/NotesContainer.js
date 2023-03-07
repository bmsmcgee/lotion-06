import { useState } from "react";

import "./Notes.css";
import NotesButton from "./NotesButton";
import Placeholder from "./NotesPlaceholder";
import WSPlaceHolder from "./workspacePlaceholder";

const NotesContainer = () => {
	const [notes, setNotes] = useState([]);
	const [selectedNote, setSelectedNote] = useState(null);
	const addNote = () => {
		setNotes([...notes, { title: "Untitled", content: "Your note here" }]);
		setSelectedNote({ title: "Untitled", content: "Your note here" });
	};
	const selectNote = (note) => {
		setSelectedNote(note);
	};
	return (
		<>
			<div className="noteContainer">
				<div className="notesHead">
					<div className="notesTitle">
						Notes
						<NotesButton onClick={addNote} />
					</div>
					<div className="savedNotes">
						{notes.map((note, index) => (
							<div
								key={index}
								className="savedNotesBox"
								onClick={() => selectNote(note)}>
								{note.title}
							</div>
						))}
					</div>
				</div>
				<div className="notesWorkspaceContainer">
					<WSPlaceHolder selectedNote={selectedNote} />
				</div>
			</div>
		</>
	);
};

export default NotesContainer;
