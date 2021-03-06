import React, { useState, useEffect } from "react";
import { csv, arc, pie } from "d3";

const PieChart = () => {
	const csvUrl =
		"https://gist.githubusercontent.com/BonkHo/e094309371d9e6fd3a96e9ded5234da0/raw/f588525bdf114bb02c08e0969376600886db7aba/cssNamedColors.csv";

	const [data, setData] = useState(null);

	const width = 1280;
	const height = 700;

	const centerX = width / 2;
	const centerY = height / 2;

	const colorArc = arc().innerRadius(0).outerRadius(width);

	const colorPie = pie().value(1);

	useEffect(() => {
		csv(csvUrl).then(setData);
	}, []);

	if (!data) {
		return <pre>"Loading"</pre>;
	}

	return (
		<svg width={width} height={height}>
			<g transform={`translate(${centerX}, ${centerY})`}>
				{colorPie(data).map((d) => (
					<path fill={d.data["RGB hex value"]} d={colorArc(d)} />
				))}
			</g>
		</svg>
	);
};

export default PieChart;
