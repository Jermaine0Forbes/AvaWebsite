import React,{Component, useEffect, useState, useRef} from 'react';
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
// import "loaders.css/loaders.css.js";
// import "loaders.css/loaders.min.css";
import { useInView } from 'react-intersection-observer'


export default function Product() {

  return (
    <main id="product" className="container wide pad-half padH">
      <div className="row">
        <div className="col-md-4">
          <img className="img-fluid" src="https://via.placeholder.com/680x720.png"/>
        </div>
        <div className="col-md-8"></div>
        Single Product
      </div>
    </main>

  )
}
