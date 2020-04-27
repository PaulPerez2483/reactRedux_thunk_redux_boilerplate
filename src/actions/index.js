import _ from "lodash";
import jsonPlaceHolder from "../api/jsonPlaceHolder";
// understanding async/await and redux-thunk
export const fetchPosts = () => async (dispatch, getState) => {
	const response = (await jsonPlaceHolder.get("/posts")).data;

	dispatch({
		type: "FETCH_POSTS",
		payload: response
	});
};

/* 
w/o lodash
export const fetchUser = (id) => async (dispatch, getState) => {
	const response = (await jsonPlaceHolder.get(`/users/${id}`)).data;

	dispatch({
		type: "FETCH_USER",
		payload: response
	});
};

*/
// with lodash
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = (await jsonPlaceHolder.get(`/users/${id}`)).data;

	dispatch({
		type: "FETCH_USER",
		payload: response
	});
}); // private functions
