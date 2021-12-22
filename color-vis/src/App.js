import React, { useState, useEffect } from "react";
import "./App.css";
import { csv } from "d3";

const csvUrl =
	"https://gist.githubusercontent.com/BonkHo/e094309371d9e6fd3a96e9ded5234da0/raw/f588525bdf114bb02c08e0969376600886db7aba/cssNamedColors.csv";

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		csv(csvUrl).then(setData);
	}, []);

	if (!data) {
		return <pre>"Loading"</pre>;
	}

	console.log(data[0]);

	return data.map((d) => (
		<div
			style={{
				backgroundColor: d["RGB hex value"],
				width: "100px",
				height: "100px",
			}}
		/>
	));
}

export default App;
