import React, { Component } from "react";
import { connect } from "react-redux";
import { buildNewSupObj, goFetch, getSupText } from "./lib/helper-functions";
import { fetchSups, saveNewSup } from "./actions/all-actions"
import moment from 'moment';

class ProfileForUser extends Component {

    componentDidMount() {
        if(this.props.sups.length === 0) {
            goFetch() 
                .then(res => res.json())
                .then((sups) => {
                    this.props.fetchSups(sups)
                })
        }
    }

    render() {
        let propsAuthor = this.props.match.params.username;
        let propsSups = this.props.sups;
        let newSup = {};

        return(
            <div>
                <h1>Welcome to {propsAuthor}'s profile!</h1>
                <div>
                {
                    propsSups.filter(sup => sup.author.toLowerCase() === propsAuthor.toLowerCase()).map(sup => 
                        <p>{sup.body} | {moment(sup.time).fromNow()}</p>)
                }
                </div>
                <div>
                    <form ref="form">
                        <input className="sup-input" ref="sup-body" onChange={(event) => {
                                event.preventDefault();
                                getSupText(newSup, event.target.value)
                            }
                        }/>
                        <button className="save-btn" onClick={ (event) => {
                                event.preventDefault();
                                this.refs.form.reset();
                                return this.props.saveNewSup(buildNewSupObj(propsAuthor, propsSups, newSup)) 
                            }
                        }>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => ({sups: state.sups});

let mapDispatchToProps = dispatch => {
    return { 
        fetchSups: sups => dispatch(fetchSups(sups)),
        saveNewSup: newSup => dispatch(saveNewSup(newSup))
    };
};
  
let Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileForUser);

export default Profile;