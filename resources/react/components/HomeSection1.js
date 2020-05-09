import React,{Component, useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import {Fade} from 'react-reveal';
import {PlaceholderImg} from "./Placeholder";

const HBlock1 = () =>{

  let x = (
    <PlaceholderImg src="div.block-item-1 img.img-fluid">
        <Fade  duration={500}>
         <img className="img-fluid" src="/img/1400-2-22.jpg" alt=""/>
         <div className="bg-container">
             <div className="bg">
                 <div className="text teal">
                     <h4 className="hidden-md-down">spring - summer 2017</h4>
                     <h2 >new arrivals</h2>
                     <Link  to="/recent-arrivals" className="btn  btn-secondary">shop now</Link>
                 </div>
             </div>
         </div>
     </Fade>
    </PlaceholderImg>
  )

  return (


        <Fade  duration={500}>
        <PlaceholderImg src="div.block-item-1 img.img-fluid">
          <img id="hsection-1" className="img-fluid" src="/img/1400-2-22.jpg" alt="" />
          </PlaceholderImg>
          <div className="bg-container">
              <div className="bg">
                  <div className="text teal">
                      <h4 className="hidden-md-down">spring - summer 2017</h4>
                      <h2 >new arrivals</h2>
                      <Link  to="/recent-arrivals" className="btn  btn-secondary">shop now</Link>
                  </div>
              </div>
          </div>
        </Fade>




  )
}

export default function HomeSection1(){


  return(

    <React.Fragment>

      <div className="col-12 block-item-1">
          <HBlock1 />
        </div>


        <Fade bottom cascade duration={300}>
          <div className="col-md-6 block-item-2">
            <PlaceholderImg>
              <img id="hsection-1-2" className="img-fluid" src="/img/alt-1.jpg"  alt="" />
            </PlaceholderImg>
              <div className="bg-container">
                  <div className="bg">
                      <div className="text pink">
                          <h4 >two</h4>
                          <h3 >ways to</h3>
                          <h2 className="teal-color">wear</h2>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-6 block-item-3">
              <PlaceholderImg>
              <img id="hsection-1-3" className="img-fluid" src="/img/alt-2.jpg" alt="" />
              </PlaceholderImg>
              <div className="bg-container">
                  <div className="bg">
                      <div className="text pink">
                          <h4>the chic dress</h4>
                          <h3 >collection</h3>
                          <h2 className="teal-color">20% off</h2>
                      </div>
                  </div>
              </div>
          </div>

        </Fade>



        <Fade  duration={500}>
        <div className="col-md-12 block-item-4">
            <PlaceholderImg>
              <img id="hsection-1-4" className="img-fluid" src="/img/1400-2-4.jpg"alt="" />
            </PlaceholderImg>
            <div className="bg-container">
                <div className="bg">
                    <div className="text teal">
                        <h4 className="hidden-md-down"> spring - summer 2017</h4>
                        <h2 >perfect utility</h2>

                        <Link  to="/recent-arrivals" className="btn  btn-secondary">shop now</Link>
                    </div>
                </div>
            </div>
        </div>
      </Fade >
      <Fade bottom cascade duration={500}>
        <div className="col-md-6 block-item-5">
            <PlaceholderImg>
              <img id="hsection-1-5" className="img-fluid" src="/img/alt-3.jpg" alt="" />
            </PlaceholderImg>
            <div className="bg-container">
                <div className="bg">
                    <div className="text pink">
                        <h3>buy 2 items</h3>
                        <h3>get one</h3>
                        <h2 className="teal-color">for free</h2>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
        <div className="col-md-6 block-item-6">
            <div className="row no-pad pad-half-all">
                <div className="col-sm-6 ">
                    <div className="text">
                        <img className="img-fluid" src="/img/blank.png" alt="" />
                        <div className="block-1">
                            <h3>free shipping</h3>
                            <h4>on orders over $99</h4>
                            <p>this offer is only valid on all of our stores</p>
                        </div>
                        <div className="block-2 hover">

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="text">
                        <img className="img-fluid" src="/img/blank.png" alt="" />
                        <div className="block-1">
                            <h4>cod</h4>
                            <h3>cash on delivery</h3>
                        </div>
                        <div className="block-2 hover">

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="text">
                        <img className="img-fluid" src="/img/blank.png" alt="" />
                        <div className="block-1">
                            <h3>order return</h3>
                            <h4>return within 14 days</h4>
                        </div>
                        <div className="block-2 hover">

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="text pinky">
                        <img className="img-fluid" src="/img/blank.png" alt="" />
                        <div className="block-1">
                            <h2>75% off</h2>
                            <h4>shop now</h4>
                        </div>
                        <div className="block-2 hover">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>


  )
}
