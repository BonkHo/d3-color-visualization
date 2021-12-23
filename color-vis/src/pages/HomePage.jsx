import React from "react";

const HomePage = () => {
	return (
		<div>
			<h1
				className="text-center text-3xl mt-7 mb-7"
				style={{ fontFamily: "Chivo" }}
			>
				D3 Color Visualization
			</h1>
			<div
				id="visualizations"
				className=""
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<div className="bg-red-600 w-1/5 text-center rounded-lg text-neutral-200 p-3 m-3">
					<a href="/linechart">Color Lines</a>
				</div>
				<div className="bg-orange-500 w-1/5 text-center rounded-lg text-neutral-200 p-3 m-3">
					<a href="/piechart">Color Circle</a>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
