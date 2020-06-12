import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./Main";
import FixedSocial from './FixedSocial';
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk,logger));

function App(){
  return(
    <Provider store={store}>
      <Router>
         <section className="github-block">
           <div className="container wide">
             <a href="https://github.com/Jermaine0Forbes/AvaWebsite">View source on Github <span className="icon fab fa-github"></span></a>
           </div>
         </section>
          <Header/>
          <Main/>
          <Footer />
          <FixedSocial />
          <Modal />
      </Router>
    </Provider>


  )
}

if (document.getElementById('react')) {
    ReactDOM.render(<App/>, document.getElementById('react'));
}
