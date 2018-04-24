import { fetchSups, saveNewSup, sortSups } from "../actions/all-actions";
import { fetchSupsReducer, saveSupReducer, sortSupsReducer } from "./all-reducers";

const initialState = {
    sups: [],
    sortBy: ""
};

let reducers = {
    [fetchSups]: fetchSupsReducer,
    [saveNewSup]: saveSupReducer,
    [sortSups]: sortSupsReducer
};

// fallbackReducer acts like default return state like in switch...case when initialize the app when action.type is @@INIT
let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
    let miniReducer = reducers[action.type];
    miniReducer = miniReducer || fallbackReducer;
    let newState = miniReducer(state, action);
    return newState;
};

export default reducer;