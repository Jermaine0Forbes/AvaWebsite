import React,{Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
// import "loaders.css/loaders.css.js";
// import "loaders.css/loaders.min.css";
import {Fade,Zoom,LightSpeed, Bounce} from 'react-reveal';
import SlickProducts from './SlickProducts';
import { useInView } from 'react-intersection-observer';


 const SpecialProducts = () =>{
   const origin = window.location.origin;
   const url = origin+"/api/special/products";
    const [visible, setVisible] = useState(false);
    const slick = {
      idSelector : "#slick-special-products",
      id : "slick-special-products",
      class : "slick two",
      selector:".slick.two"
    }
    const [ref, inView, entry] = useInView({
           /* Optional options */
           threshold: 0.5,
         })
    // const initSlick = () => {
    //   $('.slick.two').not('.slick-initialized').slick({
    //       infinite:true,
    //       autoplay:true,
    //       slidesToShow:4,
    //       slidesToScroll:2,
    //       autoplaySpeed:5000,
    //       prevArrow:"<button class='fa fa-angle-left slick-arrow slick-left'></button>",
    //       nextArrow:"<button class='fa fa-angle-right slick-arrow slick-right'></button>",
    //       responsive:[
    //           {
    //               breakpoint:768,
    //               settings:{
    //                   slidesToShow:3
    //               }
    //           },
    //           {
    //               breakpoint:576,
    //               settings:{
    //                   slidesToShow:2
    //               }
    //           }
    //       ]
    //   })
    //


         useEffect( () => {
           if(inView) console.log(inView); setVisible(true);
         },[inView])


    return(

      <div  className="special-products" ref={ref}>
          <h3 className="text-center">special products</h3>
            <SlickProducts url={url} slider={slick}   visible={visible} imgArr={["3","4"]}/>
      </div>
    )


}

export default SpecialProducts;
