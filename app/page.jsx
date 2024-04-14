import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const page = () => {
	return (
		<div className="registerpage">
			<Header />
			<div className="form-container">
				<h2>Dream | Dare | Innovate</h2>
				<Form />
			</div>
			<Footer />
		</div>
	);
};

export default page;
