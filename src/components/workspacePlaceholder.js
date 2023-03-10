import "./Notes.css";
import DateTime, { monthNames } from "./DateTime";
import Quill from "./Quill";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WSPlaceHolder = ({
	selectedNote,
	title,
	setTitle,
	setSelectedNote,
	updateIsSaved,
	saveTitle,
}) => {
	const navigate = useNavigate();
	const location = useLocation();

	const [date, setDate] = useState(null);
	const [text, setText] = useState(null);
	const [data, setData] = useState([]);

	const [isReadOnly, setIsReadOnly] = useState(false);

	const [isSaved, setIsSaved] = useState(false);

	const [isEdit, setIsEdit] = useState(false);

	const handleSave = () => {
		if (title) {
			setTitle(title);
		}
		if (!isEdit) {
			saveTitle();

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

			setIsSaved(true);
			updateIsSaved(true);

			const textArray = text.split(" ");
			let previewText = "";
			for (let i = 0; i < Math.min(textArray.length, 12); i++) {
				previewText += textArray[i] + " ";
			}
			previewText = previewText.trim();

			previewText =
				previewText.length > 80 ? previewText.substring(0, 80) + "..." : previewText;

			const dateObject = new Date(date);
			dateObject.setMinutes(dateObject.getMinutes() - 420);
			const saveDate = `${
				monthNames[dateObject.getMonth()]
			} ${dateObject.getDate()}, ${dateObject.getFullYear()} at ${dateObject.toLocaleTimeString(
				[],
				{ hour: "2-digit", minute: "2-digit", hour12: false }
			)}`;

			setSelectedNote({ ...selectedNote, title, previewText, saveDate });

			window.onbeforeunload = function () {
				localStorage.clear();
			};

			setIsEdit(true);
		} else {
			navigate(location.pathname + "/edit", { replace: true });
			setIsReadOnly(!isReadOnly);
			setIsSaved(false);
			setIsEdit(false);
		}
	};

	useEffect(() => {
		setDate(new Date().toISOString().substring(0, 16));
	}, []);

	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(data));
	}, [data]);

	return selectedNote ? (
		<>
			<div className="workBox">
				<input
					className="inputBox"
					value={title || selectedNote.title || ""}
					onChange={(e) => setTitle(e.target.value)}
					disabled={isReadOnly || isEdit}
				/>

				<DateTime onChange={(value) => setDate(value)} readOnly={isReadOnly} />

				<button
					className="saveButton"
					onClick={() => {
						saveTitle();
						handleSave();
					}}>
					{isEdit ? "Edit" : "Save"}
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
