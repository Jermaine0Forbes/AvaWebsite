import React, {Component, useEffect} from "react";
import {storeVisit} from "./global";


export default class Contact extends Component{

  componentDidMount(){
    document.title = "The Contact Page";
    storeVisit();
  }

  render(){
    return(
      <main id="contact" className="container wide pad-half padH">
        <div className="jumbotron">
          <h1 className="display-4">Contact Page</h1>
        </div>
        <section className="d-flex justify-content-center">
          <form className="col-md-8 " >
            <div className="form-group">
              <h4>Subject</h4>
              <input className="form-control" type="text"  name="subject"/>
            </div>
            <div className="form-group">
              <h4>Email</h4>
              <input className="form-control" type="email"  name="email"/>
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit"  value="submit"/>
            </div>
          </form>
        </section>
      </main>
    )
  }
}
