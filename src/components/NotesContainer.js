import { useState } from "react";

import "./Notes.css";
import NotesButton from "./NotesButton";
import Placeholder from "./NotesPlaceholder";
import WSPlaceHolder from "./workspacePlaceholder";
import NoteBox from "./NoteBox";

const NotesContainer = () => {
	const [notes, setNotes] = useState([]);
	const [selectedNote, setSelectedNote] = useState(null);
	const addNote = () => {
		setNotes([...notes, { title: "Untitled", content: "Your note here" }]);
		setSelectedNote({ title: "Untitled" });
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
						<NoteBox notes={notes} setSelectedNote={setSelectedNote} />
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
