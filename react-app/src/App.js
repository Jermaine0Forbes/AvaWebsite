import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FixedSocial from './Components/FixedSocial';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Accessory from "./Pages/Accessories";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import RecentArrivals from "./Pages/RecentArrivals";
import Login from "./Pages/Login";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        < Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/accessories" component={Accessory} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/recent-arrivals" component={RecentArrivals} />
        <Route path="/login" component={Login} />
        < Footer />
        < FixedSocial />

      </div>
    </Router>


  );
}

export default App;
