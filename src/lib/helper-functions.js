export let buildNewSupObj = (author, sups, newSup) => {
    let userId = sups.filter(sup => sup.author.toLowerCase() === author.toLowerCase())[0].userId

    newSup.userId = userId;
    newSup.author = author;
    newSup.time = new Date();
    return newSup;
};

export let compare = (a, b) => {
    console.log("started comparing");
    const authorA = a.author.toUpperCase();
    const authorB = b.author.toUpperCase();

    let comparison = 0;
    if (authorA > authorB) {
        comparison = 1;
    } else if (authorA < authorB) {
        comparison = -1;
    }
    return comparison;
};

export let goFetch = () =>
    fetch("http://localhost:5000/api/posts")

export let getSupText = (newSup, eventValue) =>
    newSup.body = eventValue;

export let sortUsers = (result) => {
    console.log("coming here");
    return result.sort(compare);
};