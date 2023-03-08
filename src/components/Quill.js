import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Notes.css";

const Quill = ({ selectedNote, updateContent }) => {
	return (
		<ReactQuill
			value={selectedNote ? selectedNote.content : ""}
			onChange={(content) => updateContent(content)}
		/>
	);
};

export default Quill;
