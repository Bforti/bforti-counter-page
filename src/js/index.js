//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter=0
setInterval(()=>{
    let uno=    Math.floor((counter)%10);
    let dos=    Math.floor((counter/10)%10);
    let tres=   Math.floor((counter/100)%10);
    let cuatro= Math.floor((counter/1000)%10);
    let cinco=  Math.floor((counter/1000)%10);
    counter ++;
    ReactDOM.render(<Home uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} />, document.querySelector("#app"));


},1000)

//render your react application
