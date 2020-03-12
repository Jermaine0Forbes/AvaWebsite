import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from './Blog';
import Accessory from './Accessories';
import RecentArrivals from './RecentArrivals';
import Men from "./Men";
import Women from "./Women";
import Login from "./Login";
import Cart from "./Cart";


export default class Main extends Component{

  render(){
     const isLoggedIn = false;
    return(
      <div className="main-container">
        <Route path="/" exact component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/recent-arrivals"  component={RecentArrivals}/>
        <Route path="/blog"  component={Blog}/>
        <Route path="/accessories"  component={Accessory}/>
        <Route path="/men"  component={Men}/>
        <Route path="/women"  component={Women}/>
        <Route exact path="/cart">
          {isLoggedIn ?<Cart/>:  <Redirect to="/login" />}
        </Route>
        <Route path="/login"  component={Login}/>
      </div>
    )
  }
}
