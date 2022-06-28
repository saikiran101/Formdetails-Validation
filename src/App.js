import React from "react";
import FormDetails from "../src/components/FormDetails";
import { Row, Col } from "react-bootstrap";
import Navbar1 from "./components/Navbar1";

const App = () => {
	return (
		<>
			<Navbar1 />
			<Row>
				<Col>
					<FormDetails />
				</Col>
			</Row>
		</>
	);
};

export default App;
