import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
// import Signup from './App'
import Button from '@material-ui/core/Button';
import { render } from "react-dom";
// import axios from 'axios'
const axios = require('axios');



function Signup() {

  const[name, setName] = useState('');
  const[password, setPassword] = useState("");
    //  submitHandler =(evt) => {
    //      evt.preventDefault();
    //      Name: evt.value.Name;
    //     Password: evt.value.Password;
    // }
    // console.log("name===>>>", Name);
//     const[Name, SetName] = useState(null);
//     const[Password, setPassword] = useState(null);

//     useEffect(() => {

//             const requestOptions = {

//                     method: "POST",
//                     headers: {
//                            "content-type": "application/json"
//                                 },
//                       body: JSON.stringify({
//                         // title: "Records here"
//                         Name: name,
//                         Password: password
//                       })
//                     };
//                     fetch("localhost:8080/api/notes", requestOptions)
//                     .then(response =>{response.json()
//                         console.log("dataa=>>>", response)}
// )
//                     .then(data => SetName(data.Name))
//                     .then(data => setPassword(data.Password))

//             }, []);

axios.post('/localhost:8080/api/notes', {
    Name: name,
    Password: password,
    

  },

  ).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });



const submitHandler = (e) => {
  e.preventDefault();
  setName(e.target.email.value);
  setPassword(e.target.password.value);
}
return (

<div>
<form onSubmit={(e)=>submitHandler(e)}>
  
  <TextField type="email" name="email" label="email"/>
  <br />

  <TextField type="password" name="password" label="password" />

  <div className="login" >
    <Button type="submit" variant="contained" color="primary">Signup</Button>
  </div>
</form>

</div>

)

}

export default Signup;