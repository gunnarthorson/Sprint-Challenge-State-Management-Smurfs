import React, { useState, useEffect } from 'react';
import axios from "axios"
import { ButtonToggle  } from 'reactstrap';

function Smurf(props) {

    const [smurf, setSmurf] = useState({});

    useEffect(() => {
        setSmurf(props.smurf);
    }, [props.smurf])

    function deleteSmurf (e) {
        e.preventDefault();
        console.log("deleting");
        axios
            .delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(res => console.log("Smurf Deleted"))
            .catch(err => alert("Error"))
            .finally(() => window.location.reload())
    }

 //   function editSmurf (e) {
 //       e.preventDefault();
//        axios
//        .put(`http://localhost:3333/smurfs/${smurf.id}`)
//        .then(res => console.log("Edit Smurf"))
//        .catch(err => alert("Error"))
 //       .finally(() => window.location.reload())
  //  }

    return (
        <div>
            <p>Name: {smurf.name}</p>
            <p>Height: {props.smurf.height}</p>
            <p>Age: {props.smurf.age}</p>
            <ButtonToggle color="danger" size="lg" onClick={e => {console.log("deleting onClick"); deleteSmurf(e)}}>Delete</ButtonToggle>
     
           
        </div>
    );
}

export default Smurf; 


//<ButtonToggle color="warning" size="lg" onClick={e => {console.log("Editing onClick"); editSmurf(e)}}>Edit</ButtonToggle>