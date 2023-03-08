import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notes.css";
import NotesButton from "./NotesButton";
import WSPlaceHolder from "./workspacePlaceholder";
import NoteBox from "./NoteBox";

const NotesContainer = () => {
	const [notes, setNotes] = useState([]);
	const [selectedNote, setSelectedNote] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (!selectedNote) {
			navigate("/notes");
		}
	}, [selectedNote, navigate]);

	const addNote = () => {
		setNotes([...notes, { title: "Untitled" }]);
		setSelectedNote({ title: "Untitled" });
		navigate(`/notes/${notes.length + 1}/edit`);
	};

	const updateTitle = (title) => {
		setSelectedNote({ ...selectedNote, title });
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
					<WSPlaceHolder selectedNote={selectedNote} updateTitle={updateTitle} />
				</div>
			</div>
		</>
	);
};

export default NotesContainer;
