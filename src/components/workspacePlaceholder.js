import "./Notes.css";
import DateTime from "./DateTime";

const WSPlaceHolder = ({ selectedNote, updateTitle }) => {
	return selectedNote ? (
		<div className="workBox">
			<input
				className="inputBox"
				value={selectedNote.title}
				onChange={(e) => updateTitle(e.target.value)}></input>
			<DateTime />
		</div>
	) : (
		<div className="wsPlaceholder">Select a note, or create a new one</div>
	);
};

export default WSPlaceHolder;
