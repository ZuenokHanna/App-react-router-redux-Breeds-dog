import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FullBreeds from "./fullBreeds";
import Dog from "./dog";





export default class Breeds extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		
		return (
				<Switch>
		    	<Route exact path='/breeds' component={FullBreeds}/>
		    	<Route path='/breeds/:goodId' component={Dog}/>
				</Switch>
			)
	}

};