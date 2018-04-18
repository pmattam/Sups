import React from 'react';
import Sup from './Sup';

let Sups = ({ sups }) =>
    <div>
        {
            sups.map(sup =>
            <Sup 
                sup={sup}
            />)
        }
    </div>

export default Sups;








