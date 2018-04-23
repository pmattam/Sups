import { FETCH_SUPS, SAVE_SUP, SORT_SUPS } from "./constants";

export const fetchSups = (sups) => ({
    type: FETCH_SUPS,
    payload: { sups }
});

export const saveNewSup = (newSup) => ({
    type: SAVE_SUP,
    payload: { newSup }
});

export const sortSups = (value) => ({
    type: SORT_SUPS,
    payload: { value }
});