import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		
		return (
					<List component="nav">
						<ListItem button><Typography variant="button" gutterBottom><Link to='/'>Home</Link></Typography></ListItem>
						<ListItem button><Typography variant="button" gutterBottom><Link to='/breeds'>Dog breeds</Link></Typography></ListItem>
						<ListItem button><Typography variant="button" gutterBottom><Link to='/about'>About project</Link></Typography></ListItem>
					</List	>
			)
		}
	};