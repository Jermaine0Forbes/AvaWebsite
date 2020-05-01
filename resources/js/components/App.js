import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./Main";
import FixedSocial from './FixedSocial';
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
function App(){
  return(
    <Router>
        <Header/>
        <Main/>
        <Footer />
        <FixedSocial />
        <Modal />
    </Router>

  )
}

if (document.getElementById('react')) {
    ReactDOM.render(<App/>, document.getElementById('react'));
}
