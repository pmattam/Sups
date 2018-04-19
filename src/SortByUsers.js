import React, { Component } from 'react';
import { goFetch, sortUsers } from './lib/helper-functions';
import Sups from './components/Sups';

class SortByUsers extends Component {
    constructor(props) {
        super(props);
        console.log("Coming here");
        this.state = {
            sups: []
        }
    }

    componentDidMount() {
        
        goFetch()
            .then(res => res.json())
            .then((result) => {
                let sortedResult = sortUsers(result);
                this.setState({
                  sups: sortedResult
                })
            })
      }

    render() {
        let { sups } = this.state;

        return(
            <div>
                <Sups 
                    sups={sups}
                />
            </div>
        )
    }
}

export default SortByUsers;