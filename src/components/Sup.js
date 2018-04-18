import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

let Sup = ({ sup }) => 
  <div>
    <h2>{sup.body}</h2>
    <p><Link to={`/users/${sup.author}`}>{sup.author}</Link> | {moment(sup.time).fromNow()}</p>
  </div>


export default Sup;