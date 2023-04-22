import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Container className="my-4">
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/new" element={<h1>New</h1>} />
				<Route path="/:id">
					<Route index element={<h1>Show</h1>} />
					<Route path="edit" element={<h1>Edit</h1>} />
				</Route>
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</Container>
	);
}

export default App;