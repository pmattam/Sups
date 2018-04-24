import { FETCH_SUPS, SAVE_SUP, SORT_SUPS } from "../constants/action-types";

export let fetchSups = (sups) => ({
    type: FETCH_SUPS,
    payload: { sups }
});

fetchSups.toString = () => FETCH_SUPS;

export let saveNewSup = (newSup) => ({
    type: SAVE_SUP,
    payload: { newSup }
});

saveNewSup.toString = () => SAVE_SUP;

export let sortSups = (value) => ({
    type: SORT_SUPS,
    payload: { value }
});

sortSups.toString = () => SORT_SUPS;