import React, { Component } from 'react';
import Sups from './components/Sups';
import { goFetch, compare } from './lib/helper-functions';
// import { goFetch } from './lib/helper-functions';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      sups: [],
      supsAnother: []
    }
  }

  componentDidMount() {
    goFetch()
        .then(res => res.json())
        .then((result) => {
            this.setState({
              sups: result,
              supsAnother: result
            })
        })
  }
  
  checkAndSort = () => {
    if (this.props.location.search === "?sort=author") {
      console.log("coming here");
      let supsCopy = Object.assign([], this.state.sups);
      supsCopy.sort(compare);
      this.state.sups = supsCopy;
    } 
  }

  render() {

    let { sups, supsAnother } = this.state;
    let { search } = this.props.location;
    
    this.checkAndSort();
    
    return(
      <div>
            <Link to="/users?sort=author">
            <button>Users</button>
            </Link>
        <Sups 
          sups={sups}
        />
      </div>
    )
  }
}

export default App;