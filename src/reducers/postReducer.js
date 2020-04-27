export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_POSTS":
			return action.payload;
			break;
		default:
			return state;
	}
};

/* 
Array : 
    removing:: state.filter((state) => state.id !=== action.payload.id)
    adding:: [...state, action.payload]
    deleting:: state.map((el)=> el === action.payload.name ? el : null)

Object :
    removing::{... state, age: undefined}
    adding:: {...state, amount : action.payload.amount}
    updating:: {...state, action.payload}
*/
