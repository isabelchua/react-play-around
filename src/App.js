import "./App.css";
import List from "./components/List";
import Data from "./Data";
import Form from "./Form";
import list from "./list";

function App() {
	return (
		<div className="App">
			<Data />
			{list.item.map(li => (
				<li key={li.name}>{li.name}</li>
			))}
			{list.item.map(li => (
				<List key={li.name} li={li} />
			))}
			<Form />
		</div>
	);
}

export default App;
