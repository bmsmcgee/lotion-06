import React, { useEffect, useState, useRef } from "react";
import Placeholder from "./NotesPlaceholder";
import "./Notes.css";

const NoteBox = ({ selectedNote, notes, setSelectedNote, updateTitle, isSaved, isEdit }) => {
	const [mostRecentIndex, setMostRecentIndex] = useState(null);
	const notesLengthRef = useRef(notes.length);

	const handleClick = (note) => {
		if (!isEdit) {
			setSelectedNote(note);
		}
	};

	useEffect(() => {
		setMostRecentIndex(0);
	}, [notes]);

	return (
		<>
			{notes.length === 0 ? (
				<Placeholder />
			) : (
				notes.map((note, index) => (
					<div
						key={index}
						className={`savedNotesBox ${index === 0 ? "most-recent" : ""}`}
						onClick={() => handleClick(note)}>
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
