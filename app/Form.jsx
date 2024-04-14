"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Form = () => {
	const BASE_URL = "https://innovation-backend-h876.onrender.com";

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [expectations, setExpectations] = useState("");
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Hit backend to jumpstart the server and reduce time of spin-down
		async function hitDB() {
			await axios.get(`${BASE_URL}/`);
		}

		hitDB();
	}, []);

	const submitHandler = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		try {
			const res = await axios.post(
				`${BASE_URL}/api/register`,
				{ name, email, phoneNumber, expectations, address },
				config
			);

			setLoading(false);
			setSuccess(res.data.success);
			setError(null);
		} catch (error) {
			setLoading(false);
			setSuccess(false);
			setError(error.response.data.message);
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<h4>Registration</h4>
			<p>
				<span>Please register for Innovation 3.0</span>
				<span>Fill the form below</span>
			</p>
			<div>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="phoneNumber">Phone number</label>
				<input
					onWheel={(e) => e.target.blur()}
					type="number"
					id="phoneNumber"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="address">Address</label>
				<input
					id="address"
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="expectations">Expectations</label>
				<textarea
					id="expectations"
					type="text"
					value={expectations}
					onChange={(e) => setExpectations(e.target.value)}
				></textarea>
			</div>
			<h5>{error && error}</h5>
			<div>
				<button disabled={success} className="btn btn-white-outline">
					{loading ? (
						<div className="loader"></div>
					) : success ? (
						`${success}`
					) : (
						"Register"
					)}
				</button>
			</div>
		</form>
	);
};

export default Form;
