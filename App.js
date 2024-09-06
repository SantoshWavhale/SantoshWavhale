// import React from "react";
import ReactDOM  from "react-dom/client";


const Header =()=>{

  return( 
  <div className="header">
  <div className="logo-container"> 
  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XgTReRh2chXGLJXjhdqTbpUuVjxaPwI3Cw&s"></img>
  </div>
  <div className="Nav-items"></div>
  <ul>
  <li>Home</li>
  <li>About us</li>
  <li>Contact</li>
  <li>Cart</li>
  </ul>
  
  </div>
  
  
  )
  
  }
  
  
  const AppLayout=()=>
  {
  return(
  <div className="App">
  <Header />
  </div>  
  
  
  )
  
  
  }

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);
  