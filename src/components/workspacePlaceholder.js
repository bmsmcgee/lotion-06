import "./Notes.css";

const WSPlaceHolder = ({ selectedNote }) => {
	return selectedNote ? (
		<div>
			<div>{selectedNote.title}</div>
			<div>{selectedNote.content}</div>
		</div>
	) : (
		<div className="wsPlaceholder">Select a note, or create a new one</div>
	);
};

export default WSPlaceHolder;
