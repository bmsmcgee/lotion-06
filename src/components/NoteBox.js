import React, { useEffect } from "react";
import Placeholder from "./NotesPlaceholder";
import "./Notes.css";

const NoteBox = ({ selectedNote, notes, setSelectedNote, updateTitle, isSaved }) => {
	const handleClick = (note) => {
		setSelectedNote(note);
	};

	useEffect(() => {
		console.log("Updated title: ", selectedNote && selectedNote.title);
	}, [selectedNote]);

	return (
		<>
			{notes.length === 0 ? (
				<Placeholder />
			) : (
				notes.map((note, index) => (
					<div key={index} className="savedNotesBox" onClick={() => handleClick(note)}>
						{isSaved && selectedNote ? selectedNote.title : "Untitled"}
						<div className="boxEllipses">
							{isSaved && selectedNote ? selectedNote.previewText : "..."}
						</div>
					</div>
				))
			)}
		</>
	);
};

export default NoteBox;
