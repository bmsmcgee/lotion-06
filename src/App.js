import NavBar from "./components/NavBar";
import "./App.css";
import NotesContainer from "./components/NotesContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/notes" element={<NotesContainer />}></Route>
					<Route path="/" element={<Navigate replace to="/notes" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
