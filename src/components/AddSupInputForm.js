import React from 'react';
import { getSupText } from '../lib/helper-functions';

let AddSupInputForm = ({ sups, saveNewSup }) => {
    let newSup = {};
    return(
        <div>
            <form>
                <input className="sup-input" onChange={(event) => {
                     event.preventDefault()
                    getSupText(newSup, event.target.value)
               
            }}/>
                <button className="save-btn" onClick={() => saveNewSup(newSup)}>Submit</button>
            </form>
        </div>
    )
};

export default AddSupInputForm;