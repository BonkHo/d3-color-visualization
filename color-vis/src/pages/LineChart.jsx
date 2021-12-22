import React, { useState, useEffect } from "react";
import { csv } from "d3";

const LineChart = () => {
	const csvUrl =
		"https://gist.githubusercontent.com/BonkHo/e094309371d9e6fd3a96e9ded5234da0/raw/f588525bdf114bb02c08e0969376600886db7aba/cssNamedColors.csv";

	const [data, setData] = useState(null);

	useEffect(() => {
		csv(csvUrl).then(setData);
	}, []);

	if (!data) {
		return <pre>"Loading"</pre>;
	}

	return data.map((d) => (
		<div
			style={{
				backgroundColor: d["RGB hex value"],
				width: "100%",
				height: "4.5px",
			}}
		/>
	));
};

export default LineChart;
