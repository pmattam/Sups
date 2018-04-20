import React, { Component } from "react";
import Sups from "./components/Sups";
import { goFetch } from "./lib/helper-functions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSups } from "./actions/all-actions.js";

let mapStateToProps = state => ({sups: state.sups});

let mapDispatchToProps = dispatch => ({ dispatch: dispatch });

class AppForAllUsers extends Component {

  constructor(props) {
    super(props);
  }
    
  componentDidMount() {
      goFetch()
          .then(res => res.json())
          .then((sups) => {
            this.props.dispatch(fetchSups(sups));
          })
    }

    render() {   
      return(
        <div>
          <Sups />
        </div>
      )
    }
  }

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