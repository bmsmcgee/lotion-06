import { useState, useEffect } from "react";
import "./Notes.css";

const DisplayText = () => {
	const [text, setText] = useState("");

	useEffect(() => {
		const textFromLocal = localStorage.getItem("text");
		setText(textFromLocal);
	}, []);

	return (
		<>
			<div className="displayText">{text}</div>
		</>
	);
};

export default DisplayText;
