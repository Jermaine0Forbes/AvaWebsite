import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Fade} from 'react-reveal';
import NewProducts from "./NewProducts";
import SpecialProducts from "./SpecialProducts";

export default function HomeSection2(){

  return(
    <React.Fragment>
      <NewProducts />
      <SpecialProducts />
    </React.Fragment>
  )
}
