import React from "react";
import ReactDom from "react-dom";
import App from "./app-page";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import rootReducer from "./rootreducer";

let myStore = createStore(rootReducer, applyMiddleware(reduxPromise, reduxThunk));

ReactDom.render(<Provider store={myStore}><App /></Provider>, document.getElementById("reactcontainer"));