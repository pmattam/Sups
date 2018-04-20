import React, { Component } from 'react';
import { goFetch } from './lib/helper-functions';
import moment from 'moment';
import AddSupInputForm from './components/AddSupInputForm';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log("Comes in as", this.props);
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

    saveNewSup = (saveSup) => {
        // let supsCopy = Object.assign([], this.state.sups);
        let usernameForSavingNewSups = this.props.match.params.username;
        let userId = this.state.sups.filter(sup => sup.author.toLowerCase() === usernameForSavingNewSups.toLowerCase())[0].userId;

        saveSup.userId = userId;
        saveSup.author = usernameForSavingNewSups;
        saveSup.time = new Date();
        // supsCopy.push(saveSup);

        this.setState(state => ({
            sups: state.sups.concat(saveSup)
        }))
    }

    render() {

        let { sups } = this.state;

        return ( <
            div >
            <
            h1 > Welcome to { this.props.match.params.username }
            's profile!</h1> <
            div > {
                sups.filter(sup => this.props.match.params.username.toLowerCase() === sup.author.toLowerCase()).map(sup =>
                    <
                    p > { sup.body } | { moment(sup.time).fromNow() } < /p>)
                } <
                /div> <
                AddSupInputForm
                sups = { sups }
                saveNewSup = { this.saveNewSup }
                /> <
                /div>
            )
        }
    }

    export default Profile;