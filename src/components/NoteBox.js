import React from "react";
import Placeholder from "./NotesPlaceholder";
import "./Notes.css";

const NoteBox = ({ notes, setSelectedNote }) => {
	return (
		<>
			{notes.length === 0 ? (
				<Placeholder />
			) : (
				notes.map((note, index) => (
					<div
						key={index}
						className="savedNotesBox"
						onClick={() => setSelectedNote(note)}>
						{note.title}
					</div>
				))
			)}
		</>
	);
};

export default NoteBox;
