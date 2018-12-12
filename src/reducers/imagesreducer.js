export default function(state = null, action){
	console.log(action);
	switch (action.type) {
		case "ALL_IMAGES":
		return action.payload.message;
	}
	return state;
}