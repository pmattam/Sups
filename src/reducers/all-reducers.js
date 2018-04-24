// import sort from "lodash/sortBy";

export let fetchSupsReducer = (state, action) => ({
    ...state,
    sups: action.payload.sups
});

export let saveSupReducer = (state, action) => ({
    ...state,
    sups: state.sups.concat(action.payload.newSup)
});

export let sortSupsReducer = (state, action) => {
    // console.log(action.payload.value);
    // console.log(state.sortBy);
    return {
        // if (action.payload.value === "user") {
        //     return {...state, sups: sort(state.sups, "author") }
        // }
        ...state,
        sups: state.sups,
        sortBy: state.sortBy.replace(state.sortBy, action.payload.value)
    }
}