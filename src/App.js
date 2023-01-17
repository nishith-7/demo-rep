//import logo from './logo.svg';
import './App.css';
import React from "react";
import User from "./userData.json";

function App() {
  const temp = User.filter(user => user.index === 3);
  // console.log(temp);
  return (
    <div className="container">
    <div className="App">
      
      
        <div className="row">
       <strong> Name: </strong>
       {temp[0].name}
        </div> 
        <br></br>
        <div className="row">
          <strong>Company: </strong>
          {temp[0].company}
        </div>
        <br>
        </br>
        <div ClassName="row">
          <strong>Email: </strong>
          {temp[0].email}
        </div>
        <br></br>
        <div ClassName="row">
          <strong>More Info: </strong>
          {temp[0].about}
        </div>
    </div>
        </div>
   
  );
}

export default App;
