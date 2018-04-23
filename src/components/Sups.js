import React from "react";
import Sup from "./Sup";
// import { connect } from "react-redux";

// let mapStateToProps = state => ({sups: state.sups});

let Sups = ({ sups }) => (
    <div>
        {
            sups.map(sup =>
            <Sup 
                sup={sup}
            />)
        }
    </div>
);

// const Sups = connect(mapStateToProps)(SupsList);

export default Sups;








