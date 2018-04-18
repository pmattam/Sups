import React from 'react';
import Sups from './components/Sups';
import sups from './lib/supsList';
import AddSupInputForm from './components/AddSupInputForm';

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

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
         sups: sups
      }
  }

  render() {
      let { sups } = this.state;

      let saveNewSup = (saveSup) => {
        let supsCopy = sups;
        let userId = sups.filter(sup => sup.author.toLowerCase() === saveSup.author.toLowerCase())[0].userId;
        console.log("uid", userId);
        saveSup.userId = userId;
        saveSup.time = new Date();
        supsCopy.push(saveSup);
        console.log(supsCopy);
        this.setState({
          sups: supsCopy
        })
      }
      
      return (
        <div>
          <Sups 
            sups={sups}
          />
          <AddSupInputForm
            sups={sups}
            saveNewSup={saveNewSup}
          />
        </div>
      )      
  }
}


export default App;