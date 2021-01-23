import './App.css';
import Section_1 from "./component/Section_1";
import React, { Component } from 'react';

// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


class App extends Component {

	stat = {
	}

	render() {
		return (
			<div className="App" >

				<Section_1 />
				


			
			</div>
		)
	}
}

export default App;
