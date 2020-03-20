import React, {useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList'

const App = () => {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      setSmurfs(res.data);
    });
  }, []);

const Add = smurf => {
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    setSmurfs(res.data);
  });
};


return (
  <SmurfContext.Provider value={{ smurfs, setSmurfs, Add }}>
  <div classname="App">
    <h1>Smurftopia</h1><br></br><br></br><br></br>
    <SmurfList />
    <SmurfForm />
  </div>
   </SmurfContext.Provider>
   );
  };
export default App;