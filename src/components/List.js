import React from "react";

const List = ({ li: { name, age, gender } }) => {
	return (
		<div>
			{name} - {age} - {gender}
		</div>
	);
};

export default List;
