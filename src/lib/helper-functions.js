// export let getAuthorNameAndId = (sups, newSup, eventValue) => {
//     // let userId = sups.filter(sup => sup.author.toLowerCase() === eventValue.toLowerCase())[0].userId;
//     newSup.author = eventValue;
//     // newSup.userId = userId;
//     // return newSup;
// }

export let getSupText = (newSup, eventValue) =>
    newSup.body = eventValue;