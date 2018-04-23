import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Screen from "./Screen";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index";

const store = createStore(reducer);

let reactAppReduxStore = 
    <Provider store={store}>
        <Screen />
    </Provider>
    
ReactDOM.render(reactAppReduxStore, document.getElementById("root"));