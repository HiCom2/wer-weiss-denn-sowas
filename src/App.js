import React from 'react';
import CategoryOverview from './components/CategoryOverview/CategoryOverview';
import './App.css';
import data from './data.json';

function App() {
	return (
		<div className="App">
			<div className="headline">Wer weiß denn sowas?</div>
			<div>
				<CategoryOverview data={data} />
			</div>
		</div>
	);
}

export default App;
