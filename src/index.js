import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import thunk from "redux-thunk";

import App from "./component/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

const root = document.getElementById("root");

render(
	<Provider store={store}>
		<App />
	</Provider>,
	root
);
