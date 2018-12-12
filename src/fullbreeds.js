import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getListSubbreeds, getList, getImage } from "./actions";
import { bindActionCreators } from "redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';




class FullBreeds extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	componentDidMount(){
		this.props.getListSubbreeds();
	}

	componentDidUpdate(){
		console.log("Updated!");
	}

	render(){
		console.log("From render", this.props.subbreeds);
		let subbreeds;
		if(this.props.subbreeds){
			
			subbreeds = this.props.subbreeds.map( subbreed => {
				return (
					<ListItem
					 button
					 key={subbreed}
					>
					<ListItemText>
            <Link to={`/breeds/${subbreed}`}>{subbreed}</Link>
          </ListItemText>
					</ListItem>
					)
			}
			)
		}
		return (
				<List	>
					<ListItem>
						<Typography variant="h4" gutterBottom>Sub-breeds</Typography>
					</ListItem>
					{subbreeds}
				</List>
		) 
	}
};

function mapStateToProps(state){
	return {subbreeds: state.subbreeds}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({getListSubbreeds, getList, getImage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FullBreeds);

