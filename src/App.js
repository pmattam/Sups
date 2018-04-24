import React, { Component } from "react";
import { connect } from "react-redux";
import Sups from "./components/Sups";
import { goFetch } from "./lib/helper-functions";
import { fetchSups, sortSups } from "./actions/all-actions.js";
import sort from "lodash/sortBy";

class AppForAllUsers extends Component {    
  componentDidMount() {
      if(this.props.sups.length === 0) {
        goFetch()
        .then(res => res.json())
        .then((sups) => {
          this.props.fetchSups(sups);
        })
      }
    }

    render() {   
      return(
        <div>
          <select
            onChange={ event => this.props.sortSups(event.target.value) }>
            <option value="none">All</option>
            <option value="date">Date</option>
            <option value="author">User</option>
          </select>
          {
            (this.props.sups.length === 0) ? 
              <p>Loading!</p> 
              : 
              <Sups 
                sups={sort(this.props.sups, this.props.sortBy)}
              />
          }
        </div>
      )
    }
  }

let mapStateToProps = state => ({ sups: state.sups, sortBy: state.sortBy });

let mapDispatchToProps = dispatch => { 
  return { 
    fetchSups: sups => dispatch(fetchSups(sups)),
    sortSups: value => dispatch(sortSups(value))
  };
};
  
let App = connect(mapStateToProps, mapDispatchToProps)(AppForAllUsers)

export default App;