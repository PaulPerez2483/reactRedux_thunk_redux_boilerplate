import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
	//dummy: () => "dummy" // to get the error message to go away
	posts: postReducer,
	users: usersReducer
});
