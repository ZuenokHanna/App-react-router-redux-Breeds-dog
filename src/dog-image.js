import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getImage } from "./actions";




class DogImage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	componentDidMount(){
		this.props.getImage();
	}

	componentDidUpdate(){
		console.log("Updated!");
	}

	render(){
		console.log("From render", this.props.allImages);
		let images;
		if(this.props.allImages){
				return (
					 <img src={this.props.allImages}/>
					)
			}
		return (
			<div>
				<ul className="list-group">
					{images}
				</ul>
			</div>
		) 
	}
};

function mapStateToProps(state){
	return {allImages: state.images}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({getImage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DogImage);

