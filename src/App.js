import "./App.css";
import List from "./components/List";
import Form from "./Form";
import list from "./list";

function App() {
	return (
		<div className="App">
			{list.item.map(li => (
				<li key={li.name}>{li.name}</li>
			))}
			{list.item.map(li => (
				<List key={li.name} li={li.name} />
			))}
			<Form />
		</div>
	);
}

export default App;
