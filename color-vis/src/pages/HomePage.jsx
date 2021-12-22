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
			<div id="visualizations" className="flex justify-center">
				<div className="bg-red-500 w-1/5 text-center rounded-lg text-neutral-200 p-2">
					<a href="/linechart">Color Lines</a>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
