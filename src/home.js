import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';




export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		
		return (
			<div>
		    <Typography variant="h4" gutterBottom>Welcome!</Typography>
		  </div>
			)
	}
};