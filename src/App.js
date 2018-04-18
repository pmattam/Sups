import React, { Component } from 'react';
import Sups from './components/Sups';
import { goFetch } from './lib/helper-functions';

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