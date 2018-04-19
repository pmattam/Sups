// import React, { Component } from 'react';
// import { goFetch } from './lib/helper-functions';
// // import moment from 'moment';
// import Sups from './components/Sups';

// class SortByUsers extends Component {
//     constructor(props) {
//         super(props);
//         console.log("Coming here");
//         this.state = {
//             sups: []
//         }
//     }

//     componentDidMount() {
        
//         goFetch()
//             .then(res => res.json())
//             .then((result) => {
//                 this.setState({
//                   sups: result
//                 })
//             })
//       }
    
//     render() {
//     let { sups } = this.state;
//     console.log("Coming here");
//     return(
//         <div>
//             <Sups 
//                 sups={sups}
//             />
//         </div>
//     )
//     }
// }

// export default SortByUsers;