import React, { useEffect } from "react";

const fetchRandomData = () => {
	return axios
		.get("https://randomuser.me/api")
		.then(({ data }) => {
			console.log(data);
			return JSON.stringify(data, null, 2);
		})
		.catch(err => {
			console.error(err);
		});
};

const Data = () => {
	const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

	useEffect(() => {
		fetchRandomData().then(randomData => {
			setRandomUserDataJSON(randomData || "No user data found.");
		});
	}, []);
	return <div>{randomUserDataJSON}</div>;
};

export default Data;
