import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Main from "./main";
import Grid from "@material-ui/core/Grid";

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		
		return (
			<Router>
				<Grid container  justify="center" spacing={24}>
					<Grid item xs={12} md={3}>
					  <Sidebar />
					</Grid>
					<Grid item xs={12} md={3}>
					  <Main />
					</Grid>
	  		</Grid>
  		</Router>
			)
	}
};