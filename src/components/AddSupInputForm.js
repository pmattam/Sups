import React from 'react';
import { getAuthorNameAndId, getSupText } from '../lib/helper-functions';  

let AddSupInputForm = ({ sups, saveNewSup }) => {
    let newSup = {};
    return(
        <div>
            <form>
                <input className="author-input" onChange={(event) => getAuthorNameAndId(sups, newSup, event.target.value)}/>
                <input className="sup-input" onChange={(event) => getSupText(newSup, event.target.value)}/>
                <button className="save-btn" onClick={() => saveNewSup(newSup)}>Submit</button>
            </form>
        </div>
    )
};

export default AddSupInputForm;