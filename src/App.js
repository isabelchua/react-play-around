import "./App.css";
import Form from "./Form";
import list from "./list";

function App() {
	return (
		<div className="App">
			{list.item.map(li => (
				<li key={li.name}>{li.name}</li>
			))}
			<Form />
		</div>
	);
}

export default App;
