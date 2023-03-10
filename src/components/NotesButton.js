import React, { useState } from "react";

const NotesButton = ({ onClick }) => {
	const [isSaved, setIsSaved] = useState(false);

	return (
		<button
			className={`notesButton ${isSaved ? "saved" : ""}`}
			onClick={() => {
				setIsSaved(false);
				onClick();
			}}>
			+
		</button>
	);
};

export default NotesButton;
