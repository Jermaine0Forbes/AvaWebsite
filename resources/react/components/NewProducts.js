import React,{Component, useEffect, useState, useRef} from 'react';
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
import {Fade,Zoom,LightSpeed, Bounce} from 'react-reveal';
import { useInView } from 'react-intersection-observer';
import StarRating from './StarRating';
import SlickProducts from './SlickProducts';



const NewProducts = () => {
  const origin = window.location.origin;
  const [visible, setVisible] = useState(false);
  const slick = {
    idSelector : "#slick-new-products",
    id : "slick-new-products",
    class : "slick one",
    selector:".slick.one"
  }
  const [ref, inView, entry] = useInView({
         /* Optional options */
         threshold: 0.5,
       })

       useEffect( () => {
         if(inView){
           setVisible(true);
         }
       },[inView])


    return(
      <div className="new-products"  ref={ref}>
          <h3 className="text-center">new products</h3>
          <SlickProducts url={origin+"/api/recent/products"} slider={slick}   visible={visible} imgArr={["2","1"]} />
      </div>
    )

}


export default NewProducts;
