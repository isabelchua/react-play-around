import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchRandomData = pageNumber => {
	return axios
		.get(`https://randomuser.me/api?page=${pageNumber}`)
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
	const [nextPageNumber, setNextPageNumber] = useState(1);

	const fetchNextUser = () => {
		fetchRandomData().then(randomData => {
			//setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || "No user data found."
			const newUserInfos = [...userInfos, ...randomData.results];
			setUserInfos(newUserInfos);
			setNextPageNumber(randomData.info.page + 1);
		});
		// fetchRandomData().then(randomData => {
		// 	setRandomUserDataJSON(
		// 		JSON.stringify(randomData, null, 2) || "No user data found.",
		// 		setUserInfos(randomData.results),
		// 		setNextPageNumber(randomData.info.page +1)
		// 	);
		// });
	};

	useEffect(() => {
		//fetchNextUser()
		fetchNextUser();
	}, []);
	return (
		<div>
			<button
				onClick={() => {
					fetchNextUser();
				}}
			>
				Fetch Another User
			</button>
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
