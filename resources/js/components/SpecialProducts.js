import React,{Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
// import "loaders.css/loaders.css.js";
// import "loaders.css/loaders.min.css";
import {Fade,Zoom,LightSpeed, Bounce} from 'react-reveal';


 const SpecialProducts = () =>{
    const [loading, SetLoading] = useState(false);

    const initSlick = () => {
      $('.slick.two').not('.slick-initialized').slick({
          infinite:true,
          autoplay:true,
          slidesToShow:4,
          slidesToScroll:2,
          autoplaySpeed:5000,
          prevArrow:"<button class='fa fa-angle-left slick-arrow slick-left'></button>",
          nextArrow:"<button class='fa fa-angle-right slick-arrow slick-right'></button>",
          responsive:[
              {
                  breakpoint:768,
                  settings:{
                      slidesToShow:3
                  }
              },
              {
                  breakpoint:576,
                  settings:{
                      slidesToShow:2
                  }
              }
          ]
      })

    };
     useEffect(( ) =>{
       initSlick();
     },[loading])


    return(

      <div  className="special-products">
          <h3 className="text-center">special products</h3>
          <div className="row fluid-max-wide-10 center">
              <div className="slick two row no-pad pad-half-all fluid">
                  <div className="">
                      <img className="img-fluid" src="/img/330-3.png" alt="" />
                  </div>
                  <div className="">
                      <img className="img-fluid" src="/img/330-4.png" alt="" />
                  </div>
                  <div className="">
                      <img className="img-fluid" src="/img/330-3.png" alt="" />
                  </div>
                  <div className="">
                      <img className="img-fluid" src="/img/330-4.png" alt="" />
                  </div>
                  <div className="">
                      <img className="img-fluid" src="/img/330-3.png" alt="" />
                  </div>
                  <div className="">
                      <img className="img-fluid" src="/img/330-4.png" alt="" />
                  </div>
                  <div className="">
                      <img className="img-fluid" src="/img/330-3.png" alt="" />
                  </div>
                  <div className="">
                      <img className="img-fluid" src="/img/330-4.png" alt="" />
                  </div>
              </div>
          </div>
      </div>
    )


}

export default SpecialProducts;
