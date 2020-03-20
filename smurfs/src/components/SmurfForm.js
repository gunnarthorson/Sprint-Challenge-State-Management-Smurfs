import React, { useState, useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import { ButtonToggle  } from 'reactstrap';

const SmurfForm = () => {
    const [addSmurf, setAddSmurf] = useState({
        name: '',
        height: '',
        age: ''
    })

    const { Add } = useContext(SmurfContext)

    const handleSubmit = () => {
        Add(addSmurf);
    }

    const handleChanges = e => {
        setAddSmurf({
            ...addSmurf, [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <h1>Add Smurf</h1>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Insert Name"
            value={addSmurf.name}
            onChange={handleChanges}
            />
            <input
            type='text'
            name='age'
            placeholder='Insert Age'
            value={addSmurf.age}
            onChange={handleChanges}
            />
            <input
            type='text'
            name='height'
            placeholder='Height'
            value={addSmurf.height}
            onChange={handleChanges}
            />
            <ButtonToggle onSubmit={handleSubmit} color="primary" type="submit">Add Smurf</ButtonToggle>
            </form>
        </div>
    )
}
export default SmurfForm;