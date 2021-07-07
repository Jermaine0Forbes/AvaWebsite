import React, {Component, useEffect} from "react";
import {storeVisit} from "./global";


export default class Login extends Component{

  componentDidMount(){
    document.title = "Login Page";
    storeVisit();
  }

  render(){
    return (
      <main id="login" className="container wide pad-half padH">
        <div className="jumbotron">
          <h1 className="display-4">Log in to your account</h1>
        </div>
        <section className="d-flex justify-content-center">
          <form className="col-md-8" >
            <div className="form-group">
              <h4>Email</h4>
              <input className="form-control" type="email"  name="email"/>
            </div>
            <div className="form-group">
              <h4>Password</h4>
              <input className="form-control" type="password"  name="password"/>
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit"  value="submit"/>
            </div>
          </form>
        </section>
      </main>
    );
  }
}
