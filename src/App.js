import React, { Component } from "react";
import Sups from "./components/Sups";
import { goFetch } from "./lib/helper-functions";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSups, sortSups } from "./actions/all-actions.js";

class AppForAllUsers extends Component {

  // constructor(props) {
  //   super(props);
  // }
    
  componentDidMount() {
      if(this.props.sups.length === 0) {
        // console.log("calling fetch");
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
            <option value="none"></option>
            <option value="date">Date</option>
            <option value="user">User</option>
          </select>
          {
            (this.props.sups.length === 0) ? 
              <p>Loading!</p> 
              : 
              <Sups 
                sups={this.props.sups}
              />
          }
        </div>
      )
    }
  }

let mapStateToProps = state => ({ sups: state.sups });

let mapDispatchToProps = dispatch => { 
  return { 
    fetchSups: sups => dispatch(fetchSups(sups)),
    sortSups: value => dispatch(sortSups(value))
};
  
};
  
let App = connect(mapStateToProps, mapDispatchToProps)(AppForAllUsers)

export default App;

// let App = () => 
//   <div>
//     <Link to="/sort-by-users">
//       <button>Users</button>
//     </Link>
//     <Sups />
//   </div>

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.state = {
//       sups: []
//     }
//   }

//   componentDidMount() {
//     goFetch()
//         .then(res => res.json())
//         .then((result) => {
//             this.setState({
//               sups: result
//             })
//         })
//   }
  
//   render() {

//     let { sups} = this.state;
 
//     return(
//       <div>
//           <Link to="/sort-by-users">
//           <button>Users</button>
//           </Link>
//           <select onChange={event => event.target.value}>
//             <option> </option>
//             <option>Users</option>
//           </select>
//         <Sups 
//           sups={sups}
//         />
//       </div>
//     )
//   }
// }