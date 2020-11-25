import React, { useState } from "react";

const Form = () => {
	const [search, setSearch] = useState({
		name: "",
		age: 0,
		gender: ""
	});

	const { name, age, gender } = search;

	const onChange = e =>
		setSearch({ ...search, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		console.log(search);
		setSearch(search);
	};

	return (
		<div>
			<form action="" onSubmit={e => onSubmit(e)}>
				Name
				<input
					name="name"
					value={name}
					type="text"
					onChange={e => onChange(e)}
				/>
				Age
				<input
					name="age"
					value={age}
					type="text"
					onChange={e => onChange(e)}
				/>
				Gender
				<input
					name="gender"
					value={gender}
					type="text"
					onChange={e => onChange(e)}
				/>
			</form>
			{/* {search && search} */}
			Name: {name} - Age {age} - Gender {gender}
		</div>
	);
};

export default Form;
