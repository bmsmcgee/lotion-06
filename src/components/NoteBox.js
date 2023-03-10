import React, { useEffect } from "react";
import Placeholder from "./NotesPlaceholder";
import "./Notes.css";

const NoteBox = ({ selectedNote, notes, setSelectedNote, updateTitle, isSaved, isEdit }) => {
	const handleClick = (note) => {
		if (!isEdit) {
			setSelectedNote(note);
		}
	};

	// const handleClick = (note) => {
	// 	setSelectedNote(note);
	// };

	useEffect(() => {
		if (isSaved) {
			console.log("Updated title: ", selectedNote && selectedNote.title);
		}
	}, [selectedNote, isSaved]);

	return (
		<>
			{notes.length === 0 ? (
				<Placeholder />
			) : (
				notes.map((note, index) => (
					<div key={index} className="savedNotesBox" onClick={() => handleClick(note)}>
						{!isEdit && isSaved && selectedNote ? selectedNote.title : "Untitled"}

						<div className="saveDate">
							{selectedNote && selectedNote.saveDate
								? `${selectedNote.saveDate}`
								: ""}
						</div>
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
