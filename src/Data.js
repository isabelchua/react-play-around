import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchRandomData = () => {
	return axios
		.get("https://randomuser.me/api")
		.then(({ data }) => {
			console.log(data);
			return data;
			//return JSON.stringify(data, null, 2);
		})
		.catch(err => {
			console.error(err);
		});
};

const getFullUserName = userInfo => {
	const {
		name: { first, last }
	} = userInfo;
	return `${first} ${last}`;
};

const Data = () => {
	const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
	const [userInfos, setUserInfos] = useState([]);

	useEffect(() => {
		fetchRandomData().then(randomData => {
			setRandomUserDataJSON(
				JSON.stringify(randomData, null, 2) || "No user data found.",
				setUserInfos(randomData.results)
			);
		});
	}, []);
	return (
		<div>
			{userInfos.map((userInfo, idx) => (
				<div key={idx}>
					<p>{getFullUserName(userInfo)}</p>
					<img src={userInfo.picture.thumbnail} alt="pic" />
				</div>
			))}
			<pre>{randomUserDataJSON}</pre>
		</div>
	);
};

export default Data;
