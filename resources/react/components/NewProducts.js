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
  const [ref, inView, entry] = useInView({
         /* Optional options */
         threshold: 0.5,
       })

       useEffect( () => {
         if(inView) console.log(inView); setVisible(true);
       },[inView])


    return(
      <div className="new-products"  ref={ref}>
          <h3 className="text-center">new products</h3>
          <SlickProducts url={origin+"/api/recent/products"} slickContainer="#slick-new-products"  selector=".slick.one" visible={visible} />
      </div>
    )

}


export default NewProducts;
