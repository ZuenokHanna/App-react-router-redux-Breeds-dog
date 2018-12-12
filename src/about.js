import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';




export default class Breeds extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		
		return (
			<div>
		    <Typography variant="h4" gutterBottom>About us</Typography>
		  	<Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      	</Typography>
  		</div>
			)
	}
};