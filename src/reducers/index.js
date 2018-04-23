// import { FETCH_SUPS, SAVE_SUP, SORT_SUPS } from "../actions/constants";
import { fetchSups, saveNewSup, sortSups } from "../actions/all-actions";
import { fetchSupsReducer, saveSupReducer, sortSupsReducer } from "./all-reducers";

const initialState = {
    sups: []
};

let reducers = {
    [fetchSups]: fetchSupsReducer,
    [saveNewSup]: saveSupReducer,
    [sortSups]: sortSupsReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
    let miniReducer = reducers[action.type];
    miniReducer = miniReducer || fallbackReducer;
    let newState = miniReducer(state, action);
    return newState;
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_SUPS:
//             return {...state, sups: action.payload.sups };
//         case SAVE_SUP:
//             return {...state, sups: state.sups.concat(action.payload.newSup) };
//         case SORT_SUPS:
//             if (action.payload.value === "user") {
//                 return {...state, sups: sort(state.sups, "author") };
//             }
//             // else if(action.payload.value === "none") {
//             //     console.log("state", state.sups);
//             //     return { ...state, sups: state.sups };
//             // }
//             break;
//         default:
//             return state;
//     }
// }

export default reducer;