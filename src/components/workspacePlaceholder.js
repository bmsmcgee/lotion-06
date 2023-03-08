import "./Notes.css";
import DateTime from "./DateTime";
import Quill from "./Quill";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WSPlaceHolder = ({ selectedNote, updateTitle }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const [title, setTitle] = useState(selectedNote);
	const [date, setDate] = useState(null);
	const [text, setText] = useState(null);
	const [data, setData] = useState([]);

	const handleSave = () => {
		const newData = {
			title: title,
			date: date,
			text: text,
		};

		// localStorage.setItem("title", title);
		// localStorage.setItem("date", JSON.stringify(date));
		// localStorage.setItem("text", JSON.stringify(text));
		const saveData = [...data, newData];
		setData(saveData);
		localStorage.setItem("data", JSON.stringify(data));
		const newPath = location.pathname.replace("/edit", "");
		navigate(newPath, { replace: true });
		window.onbeforeunload = function () {
			localStorage.clear();
		};
	};

	useEffect(() => {
		setDate(new Date().toISOString().substring(0, 16));
		// const storedData = JSON.parse(localStorage.getItem("data")) || [];
		// setData(storedData);
	}, []);

	useEffect(() => {
		localStorage.setItem("title", title);
		localStorage.setItem("date", JSON.stringify(date));
		localStorage.setItem("text", JSON.stringify(text));
	}, [title, date, text]);

	return selectedNote ? (
		<>
			<div className="workBox">
				<input
					className="inputBox"
					value={selectedNote.title}
					onChange={(e) => {
						setTitle(e.target.value);
						updateTitle(e.target.value);
					}}></input>
				{/* <DateTime onLoad={(value) => setDate(value)} /> */}
				<DateTime onChange={(value) => setDate(value)} />

				<button className="saveButton" onClick={handleSave}>
					Save
				</button>
				<button className="delButton">Delete</button>
			</div>
			<Quill
				placeholder="Your Text Here"
				value={text}
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
