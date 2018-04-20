import React from "react";
import Sup from "./Sup";
import { connect } from "react-redux";

// Explicit Return didn't work ... why?
// let mapStateToProps = state => {sups: state.sups};

let mapStateToProps = state => {
    return {sups: state.sups};
};

let SupsList = ({ sups }) => (
    <div>
        {
            sups.map(sup =>
            <Sup 
                sup={sup}
            />)
        }
    </div>
);

const Sups = connect(mapStateToProps)(SupsList);

export default Sups;








