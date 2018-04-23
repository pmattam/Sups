import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Screen from "./Screen";
import { createStore } from "redux";
import { Provider } from "react-redux";
import sort from "lodash/sortBy";
import { FETCH_SUPS, SAVE_SUP, SORT_SUPS } from "./actions/constants";

const initialState = {
    sups: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SUPS: 
            return { ...state, sups: action.payload.sups };
        case SAVE_SUP:
            return { ...state, sups: state.sups.concat(action.payload.newSup) };
        case SORT_SUPS:
            if(action.payload.value === "user") {
                return { ...state, sups: sort(state.sups, "author") };
            } 
            // else if(action.payload.value === "none") {
            //     console.log("state", state.sups);
            //     return { ...state, sups: state.sups };
            // }
            break;
        default: 
            return state;
    }
}

const store = createStore(reducer);

let reactAppReduxStore = 
    <Provider store={store}>
        <Screen />
    </Provider>
    
ReactDOM.render(reactAppReduxStore, document.getElementById("root"));