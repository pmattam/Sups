import React, { Component } from 'react';
// import React from 'react';
import Sups from './components/Sups';
// import sups from './lib/supsList';
import { goFetch } from './lib/helper-functions';
// import AddSupInputForm from './components/AddSupInputForm';

// let App = () => 
//   <div>
//     <Sups 
//       sups={}
//     />
//   </div>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sups: []
    }
  }

  componentDidMount() {
    goFetch()
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            this.setState({
              sups: result
            })
        })
  }

  render() {
    let { sups } = this.state;
    console.log(sups);
    return(
      <div>
        <Sups 
          sups={sups}
        />
      </div>
    )
  }
}

export default App;


// let App = () => 
//   <div>
//     <Sups 
//       sups={sups}
//     />
//     <AddSupInputForm
//         sups={sups}
//         saveNewSup={saveNewSup}
//     />
//   </div>

// class App extends Component {

//   constructor(props) {
//       super(props);
//       this.state = {
//          sups: sups
//       }
//   }

//   render() {
//       let { sups } = this.state;

//       let saveNewSup = (saveSup) => {
//         let supsCopy = sups;
//         let userId = sups.filter(sup => sup.author.toLowerCase() === saveSup.author.toLowerCase())[0].userId;
//         console.log("uid", userId);
//         saveSup.userId = userId;
//         saveSup.time = new Date();
//         supsCopy.push(saveSup);
//         console.log(supsCopy);
//         this.setState({
//           sups: supsCopy
//         })
//       }
      
//       return (
//         <div>
//           <Sups 
//             sups={sups}
//           />
//           {/* <AddSupInputForm
//             sups={sups}
//             saveNewSup={saveNewSup}
//           /> */}
//         </div>
//       )      
//   }
// }

