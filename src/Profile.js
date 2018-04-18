import React from 'react';
import sups from './lib/supsList';
import moment from 'moment';

let Profile = ({ match }) =>
{
    return(
        <div>
            <h1>Welcome to {match.params.username}'s profile!</h1>
            <div>
                {
                    sups.filter(sup => match.params.username.toLowerCase() === sup.author.toLowerCase()).map(sup => 
                        <p>{sup.body} | {moment(sup.time).fromNow()}</p>)
                }
            </div>
        </div>
    )
}
   

export default Profile;