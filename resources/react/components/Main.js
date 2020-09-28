import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch, Redirect} from "react-router-dom";
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
import Checkout from "./Checkout";
import Product from "./Product";
import Category from "./Category";
import {tokenNotExpired} from "./global";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    token: state.token,
    firstName: state.firstName
  }
}


 class Main extends Component{

  componentDidUpdate(prev){

    console.log('triggered')

    // if(this.props.token !== prev.token)

  }

  render(){
     const isLoggedIn = tokenNotExpired();
     console.log(isLoggedIn)
    return(
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/contact"  component={Contact}/>
          <Route path="/recent-arrivals"  component={RecentArrivals}/>
          <Route path="/blog"  component={Blog}/>
          <Route path="/accessories"  component={Accessory}/>
          <Route path="/men"  component={Men}/>
          <Route path="/women"  component={Women}/>
          <Route path={"/product/:id"}   component={Product}/>
          <Route path={"/category/:type"}   component={Category}/>
          <Route exact path="/cart">
            {tokenNotExpired()?<Cart/>:  <Redirect to="/login" />}
          </Route>
          <Route exact path="/checkout">
            {tokenNotExpired()?<Checkout/>:  <Redirect to="/login" />}
          </Route>
          <Route path="/login"  component={Login}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(Main);
