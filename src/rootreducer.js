import {combineReducers} from "redux";
import breedsReducer from "./reducers/breedsreducer";
import imagesReducer from "./reducers/imagesreducer";
import subbreedsReducer from "./reducers/subbreedsreducer";


let rootReducer = combineReducers({
	breeds: breedsReducer, /// []
	images: imagesReducer,
	subbreeds: subbreedsReducer,
});

export default rootReducer;