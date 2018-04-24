export let buildNewSupObj = (author, sups, newSup) => {
    let userId = sups.filter(sup => sup.author.toLowerCase() === author.toLowerCase())[0].userId

    newSup.userId = userId;
    newSup.author = author;
    newSup.time = new Date();
    return newSup;
};

export let goFetch = () =>
    fetch("http://localhost:5000/api/posts")

export let getSupText = (newSup, eventValue) =>
    newSup.body = eventValue;