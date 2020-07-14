import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
import "loaders.css/loaders.css.js";
import "loaders.css/loaders.min.css";
import {Fade,Zoom,LightSpeed, Bounce} from 'react-reveal';

import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";


export default class Home extends Component{

  constructor(props){
    super(props);
    this.state = {loading:true}
  }
  componentDidMount(){
    document.title = "Ava Fashion";
    const url = window.location.origin+"/api/visit";
    const data = JSON.stringify({
      height: window.innerHeight ,
      width: window.innerWidth,
      path: window.location.pathname
    })
    fetch(url,{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:data
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }

  render(){

     const {loading}= this.state;

    //const hBlock1 = loading ? <Loader type="ball-grid-beat" style={{display:"block"}} /> : <HBlock1 state={!loading}/>;
    // const hBlock1 = loading ? <Spinner animation="border" variant="primary"><span className="sr-only">Loading...</span></Spinner> : <HBlock1 />;
    return(
      <main id="home" className="container wide pad-half padH">
        <section id="home-block-1" className="row pad-half-all">
          <HomeSection1/>
        </section>

      <section id="home-block-2" className="">
          <HomeSection2/>
      </section>

      <section id="home-block-3" >
          <HomeSection3/>
      </section>

      <section id="home-block-4" className="row justify-content-center">

          <div className="row fluid-max-wide-10">
              <div className="col-md-6 md-text-center">
                  <div className="row pad-half-all">
                      <div className="col-md-3">
                          <img className="img-fluid" src="/img/126-1.jpg" alt="" />
                      </div>
                      <div className="col-md-9">
                          <p>
                              Guys, you rock! Made a purchase at your store recently. The order has been shipped and delivered on time. The quality is superb! The price is quite reasonable. Told all my friends about your excellent service and the variety of choice. I think I’ll be your loyal customer in future as well. I wish your store many more years of prosperity.
                          </p>
                          <h4>- Victoria</h4>
                      </div>
                  </div>
              </div>
              <div className="col-md-6 md-text-center">
                  <div className="row pad-half-all">
                      <div className="col-md-3">
                          <img className="img-fluid" src="/img/126-2.jpg" alt="" />
                      </div>
                      <div className="col-md-9">
                          <p>
                              Guys, you rock! Made a purchase at your store recently. The order has been shipped and delivered on time. The quality is superb! The price is quite reasonable. Told all my friends about your excellent service and the variety of choice. I think I’ll be your loyal customer in future as well. I wish your store many more years of prosperity.
                          </p>
                          <h4>- Jennifer</h4>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="home-block-5">
          <h3 className="text-center">latest posts</h3>
          <div className="fluid-max-wide-10 row center md-text-center">
              <div className="col-md-6">
                  <div className="row pad-half-all">
                      <div className="col-md-6">
                          <img className="img-fluid" src="/img/576-1.jpg" alt="" />
                      </div>
                      <div className="col-md-6">
                          <div className="date">
                              6.26.17
                          </div>
                          <h4>Title</h4>
                          <p>
                              Thousands of people dream of having their own business and even more so be a successful entrepreneur.
                          </p>
                          <div className="comments">
                              <span className="fa fa-comment-o"></span> 0 comments
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="row pad-half-all">
                      <div className="col-md-6">
                          <img className="img-fluid" src="/img/576-2.jpg" alt="" />
                      </div>
                      <div className="col-md-6">
                          <div className="date">
                              6.26.17
                          </div>
                          <h4>Title</h4>
                          <p>
                              Thousands of people dream of having their own business and even more so be a successful entrepreneur.
                          </p>
                          <div className="comments">
                              <span className="fa fa-comment-o"></span> 0 comments
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="text-center ">
              <Link to="/blog" className="btn btn-secondary">view all posts</Link>
          </div>

      </section>
      </main>
    )
  }


}
