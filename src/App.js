import "./App.css";
import Form from "./Form";
import list from "./list";

function App() {
	return (
		<div className="App">
			{list.item.map(li => (
				<li>{li.name}</li>
			))}
			<Form />
		</div>
	);
}

export default App;
