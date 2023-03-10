import React, { useEffect, useState } from "react";
import Placeholder from "./NotesPlaceholder";
import "./Notes.css";

const NoteBox = ({ selectedNote, notes, setSelectedNote, updateTitle, isSaved, isEdit }) => {
	const [mostRecentIndex, setMostRecentIndex] = useState(0);

	const handleClick = (note) => {
		if (!isEdit) {
			setSelectedNote(note);
		}
	};

	useEffect(() => {
		const storedNotes = [];
		for (let i = notes.length; i > 0; i--) {
			const storedNote = localStorage.getItem(`data_${i}`);
			storedNotes.push(JSON.parse(storedNote));
		}
		setMostRecentIndex(storedNotes.length - 1);
	}, [notes]);

	return (
		<>
			{notes.length === 0 ? (
				<Placeholder />
			) : (
				notes.map((note, index) => {
					const storedNote = localStorage.getItem(`data_${mostRecentIndex - index + 1}`);
					const parsedNote = JSON.parse(storedNote);
					return (
						<div
							key={index}
							className={`savedNotesBox ${index === 0 ? "most-recent" : ""}`}
							onClick={() => handleClick(parsedNote)}>
							{index === 0 && isSaved && selectedNote
								? selectedNote.title
								: parsedNote
								? parsedNote.title
								: "Untitled"}

							<div className="saveDate">
								{index === 0 && selectedNote && selectedNote.saveDate
									? `${selectedNote.saveDate}`
									: parsedNote
									? parsedNote.date
									: ""}
							</div>
							<div className="boxEllipses">
								{index === 0 && isSaved && selectedNote
									? selectedNote.previewText
									: parsedNote
									? parsedNote.text
									: "..."}
							</div>
						</div>
					);
				})
			)}
		</>
	);
};

export default NoteBox;
