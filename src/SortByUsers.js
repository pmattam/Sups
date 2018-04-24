// //########## NEW CODE ##########//

// // import React, { Component } from 'react';
// //import { goFetch, sortUsers } from './lib/helper-functions';
// import React from 'react';
// import { sortUsers } from './lib/helper-functions';
// //import Sups from './components/Sups';
// import Sup from "./components/Sup";
// import { connect } from "react-redux";

// let mapStateToProps = state => {
//     return {sups: state.sups};
// };

// let SortByUsersList = ({ sups }) => {
//     let sortedSups = sortUsers(sups);
//     console.log("sorted sups", sortedSups);
//     return <div>
//         {
//             sortedSups.map(sup =>
//             <Sup 
//                 sup={sup}
//             />)
//         }
//     </div>
// }

// const SortByUsers = connect(mapStateToProps)(SortByUsersList);

// export default SortByUsers;

// //########## OLD CODE ##########//

// // class SortByUsers extends Component {
// //     constructor(props) {
// //         super(props);
// //         console.log("Coming here");
// //         this.state = {
// //             sups: []
// //         }
// //     }

// //     componentDidMount() {

// //         goFetch()
// //             .then(res => res.json())
// //             .then((result) => {
// //                 let sortedResult = sortUsers(result);
// //                 this.setState({
// //                   sups: sortedResult
// //                 })
// //             })
// //       }

// //     render() {
// //         let { sups } = this.state;

// //         return(
// //             <div>
// //                 <Sups 
// //                     sups={sups}
// //                 />
// //             </div>
// //         )
// //     }
// // }