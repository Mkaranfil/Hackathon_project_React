import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header';
import Carousel1 from './component/Carousel';
import Formulaire from './component/Formulaire';
class App extends Component {

	render() {
		return (
			<div className="App" >
				<Header />
				<Carousel1 />
				<Formulaire />

			</div>
		)
	}
}

export default App;
