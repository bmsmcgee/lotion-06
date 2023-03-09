import "./Notes.css";
import DateTime from "./DateTime";
import Quill from "./Quill";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WSPlaceHolder = ({ selectedNote, updateTitle, setSelectedNote, updateIsSaved }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const [title, setTitle] = useState(selectedNote ? selectedNote.title : "");

	const [date, setDate] = useState(null);
	const [text, setText] = useState(null);
	const [data, setData] = useState([]);

	const [isReadOnly, setIsReadOnly] = useState(false);

	const [isSaved, setIsSaved] = useState(false);

	const handleSave = () => {
		const newData = {
			title: title,
			date: date,
			text: text,
		};

		const saveData = [...data, newData];
		setData(saveData);
		localStorage.setItem("data", JSON.stringify(data));

		const newPath = location.pathname.replace("/edit", "");
		navigate(newPath, { replace: true });

		setIsReadOnly(true);

		setTitle(title);
		updateTitle(title);
		localStorage.setItem("title", title);

		setIsSaved(true);
		updateIsSaved(true);

		const textArray = text.split(" ");
		let previewText = "";
		for (let i = 0; i < Math.min(textArray.length, 12); i++) {
			previewText += textArray[i] + " ";
		}
		previewText = previewText.trim();

		previewText = previewText.length > 80 ? previewText.substring(0, 80) + "..." : previewText;

		setSelectedNote({ ...selectedNote, title, previewText });

		window.onbeforeunload = function () {
			localStorage.clear();
		};
	};

	useEffect(() => {
		setDate(new Date().toISOString().substring(0, 16));
	}, []);

	useEffect(() => {
		localStorage.setItem("title", title);
		localStorage.setItem("date", JSON.stringify(date));
		localStorage.setItem("text", JSON.stringify(text));
	}, [title, date, text]);

	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(data));
	}, [data]);

	return selectedNote ? (
		<>
			<div className="workBox">
				<input
					className="inputBox"
					value={(selectedNote && selectedNote.title) || ""}
					onChange={(e) => {
						setTitle(e.target.value);
						updateTitle(e.target.value);
					}}
					disabled={isReadOnly}></input>
				<DateTime onChange={(value) => setDate(value)} readOnly={isReadOnly} />
				<button className="saveButton" onClick={handleSave}>
					Save
				</button>
				<button className="delButton">Delete</button>
			</div>
			<Quill
				placeholder="Your Text Here"
				value={text}
				readOnly={isReadOnly}
				onChange={(value) => {
					setText(value);
				}}
			/>
		</>
	) : (
		<div className="wsPlaceholder">Select a note, or create a new one</div>
	);
};

export default WSPlaceHolder;
