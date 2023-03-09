import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Notes.css";

const Quill = ({ onChange, readOnly }) => {
	const [text, setText] = useState("");

	const handleTextChange = (value) => {
		setText(value);
		onChange(value.replace(/<[^>]+>/g, ""));
	};

	return (
		<ReactQuill
			value={text}
			onChange={handleTextChange}
			placeholder="Your Note Here"
			readOnly={readOnly}
		/>
	);
};

export default Quill;
