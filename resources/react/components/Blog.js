import React, {Component, useEffect} from "react";
import {storeVisit} from "./global";


export default class Blog extends Component{
  componentDidMount(){
    storeVisit();
  }
  render(){
    return(
      <main id="blog" className="container wide pad-half padH">
        <div>
          Blog Page
        </div>
      </main>
    )
  }
}
