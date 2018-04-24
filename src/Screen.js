import React from 'react';
import Homepage from './Homepage';
import About from './About';
import Navbar from './Navbar';
import App from './App';
import Profile from './Profile';

import {
    HashRouter as Router,
    Route
} from 'react-router-dom';

let Screen = () =>
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/users" component={App}/>
            <Route exact path="/users/:username" component={Profile}/>         
        </div>
    </Router>

export default Screen;