export let fetchSupsReducer = (state, action) => ({
    ...state,
    sups: action.payload.sups
});

export let saveSupReducer = (state, action) => ({
    ...state,
    sups: state.sups.concat(action.payload.newSup)
});

export let sortSupsReducer = (state, action) => ({
    ...state,
    sups: state.sups,
    sortBy: state.sortBy.replace(state.sortBy, action.payload.value)
})