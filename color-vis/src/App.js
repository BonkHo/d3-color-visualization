import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import LineChart from "./pages/LineChart";
import PieChart from "./pages/PieChart";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/linechart" element={<LineChart />} />
				<Route exact path="/piechart" element={<PieChart />} />
			</Routes>
		</Router>
	);
}

export default App;
