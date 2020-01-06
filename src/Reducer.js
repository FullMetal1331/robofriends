import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
 } from './Constants.js';

const initialState = {
	searchField: ''
}


export const searchRobots = (state=initialState, action={}) => {
	
	//console.log(action.type);
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
				return Object.assign({}, state, {searchField: action.payload})
		default:
			return state;
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) =>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return (Object.assign({}, state, {isPendind: true}));
		case REQUEST_ROBOTS_SUCCESS:
			return (Object.assign({}, state, { robots: action.payload, isPendind: false }));
		case REQUEST_ROBOTS_FAILED:
			return (Object.assign({}, state, { error: action.payload, isPendind: false }));
		default:
			return state;
	}
}