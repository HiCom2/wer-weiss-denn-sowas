import React from 'react';
import CategoryOverview from './components/CategoryOverview/CategoryOverview';
import './App.css';
import data from './data.json';

function App() {
    var logo_pic = "pictures/wwds_logo_trim.jpg"; // https://www.letsreact.org/how-to-add-images-in-jsx/
	return (
		<div className="App">
			<div className="headline">
                <img 
                    src={logo_pic} 
                    alt="Wer weiss denn sowas?" 
                    style={{ height: "150px", paddingRight: "0px" }} 
                    /> 
            </div>
            
			<div>
				<CategoryOverview data={data} />
			</div>
		</div>
	);
}

export default App;
