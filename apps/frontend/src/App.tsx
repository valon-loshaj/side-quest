import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

const App = (): JSX.Element => {
	return (
		<Router>
			<div className="app">
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					{/* Add more routes here as needed */}
				</Routes>
			</div>
		</Router>
	);
};

export default App;
