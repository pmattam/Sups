import React, { Component } from 'react';
import Sups from './components/Sups';
import { goFetch, compare } from './lib/helper-functions';
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
  
  render() {

    let { sups, supsAnother } = this.state;
    let { search } = this.props.location;
    
    let checkAndSort = () => {

      if (search === "?sort=author") {
        console.log("coming here");
        let supsCopy = sups;
        supsCopy.sort(compare);
        this.setState({
          sups: supsCopy
        })
      } else {
        this.setState({
          sups: supsAnother
        })
      }

    }

    checkAndSort();

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