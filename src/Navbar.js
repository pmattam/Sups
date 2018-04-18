import React from'react';
import { Link } from 'react-router-dom';

let Navbar = () =>
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/prathyusha">prathyusha</Link>
    </div>

export default Navbar;