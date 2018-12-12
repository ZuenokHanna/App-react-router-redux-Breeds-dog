import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Breeds from "./breeds";
import About from "./about";
import Home from "./home";


export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		
		return (

			<main>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/breeds' component={Breeds}/>
					<Route path='/about' component={About}/>
				</Switch>
			</main>

			)
		
	}
};



