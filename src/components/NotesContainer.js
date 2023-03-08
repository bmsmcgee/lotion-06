import { useState } from "react";

import "./Notes.css";
import NotesButton from "./NotesButton";
import WSPlaceHolder from "./workspacePlaceholder";
import NoteBox from "./NoteBox";
import Quill from "./Quill";

const NotesContainer = () => {
	const [notes, setNotes] = useState([]);
	const [selectedNote, setSelectedNote] = useState(null);

	const addNote = () => {
		setNotes([...notes, { title: "Untitled" }]);
		setSelectedNote({ title: "Untitled" });
	};

	const updateTitle = (title) => {
		setSelectedNote({ ...selectedNote, title });
	};

	// const selectNote = (note) => {
	// 	setSelectedNote(note);
	// };

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
					<WSPlaceHolder selectedNote={selectedNote} updateTitle={updateTitle} />
					<Quill selectedNote={selectedNote} updateTitle={updateTitle} />
				</div>
			</div>
		</>
	);
};

export default NotesContainer;
