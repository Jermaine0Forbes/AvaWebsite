import React, {Component, useEffect} from "react";
import {storeVisit} from "./global";


export default class Men extends Component{

  componentDidMount(){
    storeVisit();
  }

  render(){
    return(
      <main id="men" className="container wide pad-half padH">
        <div className="jumbotron">
          <h1 className="display-4">Men's Page</h1>
        </div>
        <section className="row justify-content-center ">
          <h2 className="text-muted text-capitalize">currently working on</h2>
        </section>
      </main>
    )
  }
}
