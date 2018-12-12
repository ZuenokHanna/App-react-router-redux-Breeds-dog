import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getListSubbreeds, getList, getImage } from "./actions";
import DogImage from "./dog-image";
import { bindActionCreators } from "redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';




class Dog extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}


	componentDidMount(){
		this.props.getList();
	}

	componentDidUpdate(){
		console.log("Updated!");
	}

	render(){
		console.log("From render", this.props.allbreeds);
		let breeds;
		if(this.props.allbreeds){
			let arrP = this.props.allbreeds;
			let user = Object.keys(arrP);
			console.log("From render", user);
			breeds = user.map( breed => {
				return (
					<ListItem
					 key={breed}>
					 <Typography variant="button" gutterBottom>
            {breed}
            </Typography>
					</ListItem>
					)
			}
			)
		}
		return (
			<div>
					<List	>
						<ListItem>
							<Typography variant="h4" gutterBottom>{this.props.match.params.goodId}</Typography>
						</ListItem>
						<ListItem>
							<Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Typography>
						</ListItem>
					</List	>
				<List	>
					{breeds}
				</List	>
				<DogImage/>
			</div>
		) 
	}
};

function mapStateToProps(state){
	return {allbreeds: state.breeds}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({getListSubbreeds, getList, getImage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dog);




