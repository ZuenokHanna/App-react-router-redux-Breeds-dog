import webService from "./service";

export function getList(){
	return function(dispatch){
		webService.getData("https://dog.ceo/api/breeds/list/all")
		.then( breeds => {
			dispatch({
				type: "ALL_BREEDS",
				payload: breeds,
			});
		})
	}	
};

export function getImage(){
	return function(dispatch){
		webService.getData("https://dog.ceo/api/breed/hound/images/random")
		.then( images => {
			dispatch({
				type: "ALL_IMAGES",
				payload: images,
			});
		})
	}	
};

export function getListSubbreeds(){
	return function(dispatch){
		webService.getData("https://dog.ceo/api/breed/hound/list")
		.then( subbreeds => {
			dispatch({
				type: "SUB_BREEDS",
				payload: subbreeds,
			});
		})
	}	
};


