import React from 'react';
// import {BrowserRouter as Router, Route} from "react-router-dom";
// import Home from "../Pages/Home";
// import About from "../Pages/About";
import {HeaderB1, HeaderB2} from "./components/header";






export default function Header(){


  return(
    <header className="container wide">
      <HeaderB1 />
      <HeaderB2 />
    </header>
  );

}//header component
