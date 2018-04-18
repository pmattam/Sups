export let getSupText = (newSup, eventValue) =>
    newSup.body = eventValue;

export let goFetch = () =>
    fetch("http://localhost:5000/api/posts")