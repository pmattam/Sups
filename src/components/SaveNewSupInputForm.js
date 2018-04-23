// import React from 'react';
// import { getSupText } from '../lib/helper-functions';
// import { connect } from "react-redux";

// let AddSupInputForm = ({ sups, author }) => {
//     let newSup = {};
//     return(
//         <div>
//             <form>
//                 <input className="sup-input" onChange={(event) => {
//                     event.preventDefault()
//                     getSupText(newSup, event.target.value)
//                     }
//                  }/>
//                 <button className="save-btn" onClick={ (event) => buildNewSupObj(author, sups, newSup) }>Save</button>
//             </form>
//         </div>
//     )
// };

// let buildNewSupObj = (author, sups, newSup ) => {
//     let userId = sups.filter(sup => sup.author.toLowerCase() === author.toLowerCase())[0].userId;

//     newSup.userId = userId;
//     newSup.author = author;
//     newSup.time = new Date();
    
// }

// let mapDispatchToProps = dispatch => ({ dispatch: dispatch });

// let SaveNewSupInputForm = connect(mapDispatchToProps)(AddSupInputForm);

// export default SaveNewSupInputForm;