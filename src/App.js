import React from 'react';
import Sups from './components/Sups';
// import { goFetch } from './lib/helper-functions';
import { Link } from 'react-router-dom';


let App = () => 
  <div>
    <Link to="/sort-by-users">
      <button>Users</button>
    </Link>
    <Sups />
  </div>

export default App;

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