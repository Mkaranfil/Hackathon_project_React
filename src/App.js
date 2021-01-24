import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header';
import Carousel1 from './component/Carousel';
import Formulaire from './component/Formulaire';
import  Section_1  from  "./component/Section_1";


class App extends Component {

	render() {
		return (
			<div className="App" >
				<Header />
				<Carousel1 />
				<Section_1 />
				<Formulaire />
			</div>
		)
	}
}

export default App;