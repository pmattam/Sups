import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Screen from "./Screen";
import { createStore } from "redux";
import { Provider } from "react-redux";

const supsList = [
        { userId: 1, author: 'Prathyusha', body: 'Hello World!', time: new Date() },
        { userId: 2, author: 'Anvika', body: 'Having fun at school', time: new Date() },
        { userId: 3, author: 'Riansh', body: 'Playing hide and seek', time: new Date() },
        { userId: 4, author: 'Arjun', body: 'hey yo', time: new Date() }
    ];

const initialState = {
    sups: supsList
};

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);
let reactAppReduxStore = 
    <Provider store={store}>
        <Screen />
    </Provider>
    
ReactDOM.render(reactAppReduxStore, document.getElementById('root'));