import "./Notes.css";

const DateTime = () => {
	const currentDateTime = new Date();
	currentDateTime.setMinutes(currentDateTime.getMinutes() - 420);
	const seconds = currentDateTime.getSeconds();
	const actualTime =
		currentDateTime.toISOString().substring(0, 16) +
		":" +
		(seconds < 10 ? "0" + seconds : seconds);

	return <input className="dateTime" type={"datetime-local"} defaultValue={actualTime} />;
};

export default DateTime;
