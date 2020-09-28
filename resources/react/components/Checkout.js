import React, {Component, useEffect} from "react";
import {storeVisit} from "./global";


export default class Checkout extends Component{

  componentDidMount(){
      document.title = "The Checkout Page";
      storeVisit();
  }

  render(){
    return(
      <main id="checkout" className="container wide pad-half padH">
        <div className="jumbotron">
          <h1 className="display-4">Checkout Page</h1>
        </div>
        <section className="row justify-content-center ">
          <h2 className="text-muted text-capitalize">currently working on</h2>
        </section>
      </main>
    )
  }
}
