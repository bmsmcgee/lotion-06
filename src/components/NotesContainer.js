import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notes.css";
import NotesButton from "./NotesButton";
import WSPlaceHolder from "./workspacePlaceholder";
import NoteBox from "./NoteBox";

const NotesContainer = () => {
	const [notes, setNotes] = useState([]);
	const [selectedNote, setSelectedNote] = useState(null);
	const [isSaved, setIsSaved] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	const [title, setTitle] = useState("");

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
		setTitle(title);
	};

	const saveTitle = () => {
		setSelectedNote({ ...selectedNote, title });
		setTitle("");
		setIsSaved(true);
	};

	const updateIsSaved = (value) => {
		setIsSaved(value);
	};

	const updateIsEdit = (value) => {
		setIsEdit(value);
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
						<NoteBox
							selectedNote={selectedNote}
							notes={notes}
							setSelectedNote={setSelectedNote}
							updateTitle={updateTitle}
							isSaved={isSaved}
							isEdit={isEdit}
						/>
					</div>
				</div>
				<div className="notesWorkspaceContainer">
					<WSPlaceHolder
						selectedNote={selectedNote}
						title={title}
						setTitle={setTitle}
						setSelectedNote={setSelectedNote}
						updateIsSaved={updateIsSaved}
						saveTitle={saveTitle}
					/>
				</div>
			</div>
		</>
	);
};

export default NotesContainer;
