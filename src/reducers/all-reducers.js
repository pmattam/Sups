import sort from "lodash/sortBy";

export let fetchSupsReducer = (state, action) => ({
    ...state,
    sups: action.payload.sups
});

export let saveSupReducer = (state, action) => ({
    ...state,
    sups: state.sups.concat(action.payload.newSup)
});

export let sortSupsReducer = (state, action) => {
    if (action.payload.value === "user") {
        return {...state, sups: sort(state.sups, "author") }
    }
};