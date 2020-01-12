import React from 'react';
import CategoryOverview from './components/CategoryOverview/CategoryOverview';
import './App.css';
import data from './data.json';

function App() {
	return (
		<div className="App">
			<CategoryOverview data={data} />
		</div>
	);
}

export default App;
