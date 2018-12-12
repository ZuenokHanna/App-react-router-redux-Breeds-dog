export default function(state = null, action){
	console.log(action);
	switch (action.type) {
		case "SUB_BREEDS":
		return action.payload.message;
	}
	return state;
}