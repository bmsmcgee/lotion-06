import "./Notes.css";
import React, { useState } from "react";

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const DateTime = ({ onChange, readOnly }) => {
	const [value, setValue] = useState(null);
	const currentDateTime = new Date();
	currentDateTime.setMinutes(currentDateTime.getMinutes() - 420);
	const seconds = currentDateTime.getSeconds();
	const actualTime =
		currentDateTime.toISOString().substring(0, 16) +
		":" +
		(seconds < 10 ? "0" + seconds : seconds);

	const month = monthNames[currentDateTime.getMonth()];
	const date = currentDateTime.getDate();
	const year = currentDateTime.getFullYear();

	const handleChange = (e) => {
		setValue(e.target.value);
		if (onChange) {
			onChange(e.target.value);
		}
	};

	return (
		<input
			readOnly={readOnly}
			className={`dateTime ${readOnly ? "disabled" : ""}`}
			type={readOnly ? "text" : "datetime-local"}
			value={
				readOnly
					? `${month} ${date}, ${year} at ${currentDateTime
							.toISOString()
							.substring(11, 16)}`
					: value || actualTime
			}
			onChange={handleChange}
		/>
	);
};

export default DateTime;
