import React, {Component} from "react";


export default class RecentArrivals extends Component{

  render(){
    return(
      <main  className="container wide pad-half padH">
        <section className="row pad-half-all">
          <img className="img-fluid" src="https://via.placeholder.com/1400x400?text=Recent+Arrivals"/>
        </section>
        <section className="row pad-half-all">
          <div className="col-md-3">
            filter
          </div>
          <div className="col-md-9">
            Recent Arrivals Page
          </div>

        </section>
      </main>
    )
  }
}
