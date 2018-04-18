import React, { Component } from 'react';
import sups from './lib/supsList';
import moment from 'moment';
import AddSupInputForm from './components/AddSupInputForm';

// let Profile = ({ match }) =>
// {
//     return(
//         <div>
//             <h1>Welcome to {match.params.username}'s profile!</h1>
//             <div>
//                 {
//                     sups.filter(sup => match.params.username.toLowerCase() === sup.author.toLowerCase()).map(sup => 
//                         <p>{sup.body} | {moment(sup.time).fromNow()}</p>)
//                 }
//             </div>
//         </div>
//     )
// }


class Profile extends Component {
    constructor(props) {
        super(props);
        console.log("Comes in as", this.props);
        this.state = {
            sups: sups
        }
    }

    saveNewSup = (saveSup) => {
        let supsCopy = sups;
        let usernameForSavingNewSups = this.props.match.params.username;
        let userId = sups.filter(sup => sup.author.toLowerCase() === usernameForSavingNewSups.toLowerCase())[0].userId;
        console.log(userId);
        console.log(usernameForSavingNewSups);
        saveSup.userId = userId;
        saveSup.author = usernameForSavingNewSups;
        saveSup.time = new Date();
        supsCopy.push(saveSup);
        console.log('Entire sups Copy', supsCopy);
        this.setState({ 
            sups: supsCopy
        })
        console.log(sups);
    }

    render() {

        let { sups } = this.state;

        
        return(
            <div>
                <h1>Welcome to {this.props.match.params.username}'s profile!</h1>
                <div>
                {
                    sups.filter(sup => this.props.match.params.username.toLowerCase() === sup.author.toLowerCase()).map(sup => 
                    <p>{sup.body} | {moment(sup.time).fromNow()}</p>)
                }
                </div>
                <AddSupInputForm
                    sups={sups}
                    saveNewSup={this.saveNewSup}
                />
            </div>
        )
    }
}


   

export default Profile;