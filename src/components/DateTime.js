import "./Notes.css";
import React, { useEffect, useState } from "react";

const DateTime = ({ onLoad, onChange }) => {
	const [value, setValue] = useState(null);
	const currentDateTime = new Date();
	currentDateTime.setMinutes(currentDateTime.getMinutes() - 420);
	const seconds = currentDateTime.getSeconds();
	const actualTime =
		currentDateTime.toISOString().substring(0, 16) +
		":" +
		(seconds < 10 ? "0" + seconds : seconds);

	useEffect(() => {
		if (onLoad) {
			setValue(actualTime);
			onLoad(actualTime);
		}
	}, [onLoad, actualTime]);

	const handleChange = (e) => {
		setValue(e.target.value);
		if (onChange) {
			onChange(e.target.value);
		}
	};

	return (
		<input
			className="dateTime"
			type={"datetime-local"}
			value={value || actualTime}
			onChange={handleChange}
		/>
	);
};

export default DateTime;
