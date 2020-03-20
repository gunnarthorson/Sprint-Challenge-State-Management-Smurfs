import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext'
import Smurf from './Smurf';

const SmurfList = () => {
    const { smurfs, deleteSmurfs } = useContext(SmurfContext);

    return (
        <div>
            {smurfs && smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} deleteSmurfs={deleteSmurfs} />)}
        </div>
    )
}
export default SmurfList;