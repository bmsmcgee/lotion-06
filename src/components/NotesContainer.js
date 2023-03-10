import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notes.css";
import NotesButton from "./NotesButton";
import WSPlaceHolder from "./workspacePlaceholder";
import NoteBox from "./NoteBox";
import { NotesContext } from "./notesContext";

const NotesContainer = () => {
	const [notes, setNotes] = useState([]);
	const [selectedNote, setSelectedNote] = useState(null);
	const [isSaved, setIsSaved] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	const [isNotesHeadHidden, setIsNotesHeadHidden] = useState(false);

	const [title, setTitle] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		if (!selectedNote) {
			navigate("/notes");
		}
	}, [selectedNote, navigate]);

	const addNote = () => {
		const newNote = { id: notes.length + 1, title: "Untitled" };
		setNotes([...notes, newNote]);
		setSelectedNote(newNote);
		navigate(`/notes/${notes.length + 1}/edit`);
		setIsSaved(false);
		setIsEdit(false);
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

	const handleSave = () => {
		setIsSaved(true);
	};

	return (
		<>
			<NotesContext.Provider value={{ isNotesHeadHidden, setIsNotesHeadHidden }}>
				<div className="noteContainer">
					<div className={`notesHead ${isNotesHeadHidden ? "hidden" : ""}`}>
						<div className="notesTitle">
							Notes
							<NotesButton
								onClick={() => {
									addNote();
									handleSave();
								}}
								setIsEdit={setIsEdit}
								setIsSaved={setIsSaved}
							/>
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
			</NotesContext.Provider>
		</>
	);
};

export default NotesContainer;
