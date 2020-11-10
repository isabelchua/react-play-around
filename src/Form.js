import React, { useState } from "react";

const Form = () => {
	const [search, setSearch] = useState({
		name: "",
		age: 0
	});

	const { name, age } = search;

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
				<input
					name="name"
					value={name}
					type="text"
					onChange={e => onChange(e)}
				/>
				<input
					name="age"
					value={age}
					type="text"
					onChange={e => onChange(e)}
				/>
			</form>
			{/* {search && search} */}
			{name} - {age}
		</div>
	);
};

export default Form;
