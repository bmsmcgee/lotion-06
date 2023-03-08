import "./Notes.css";
import DateTime from "./DateTime";
import Quill from "./Quill";

const WSPlaceHolder = ({ selectedNote, updateTitle }) => {
	return selectedNote ? (
		<>
			<div className="workBox">
				<input
					className="inputBox"
					value={selectedNote.title}
					onChange={(e) => updateTitle(e.target.value)}></input>
				<DateTime />
				<button className="saveButton">Save</button>
				<button className="delButton">Delete</button>
			</div>
			<Quill placeholder="Your Text Here"></Quill>
		</>
	) : (
		<div className="wsPlaceholder">Select a note, or create a new one</div>
	);
};

export default WSPlaceHolder;
