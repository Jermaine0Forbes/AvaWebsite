import React,{Component} from 'react';
import {HeaderB1, HeaderB2} from "./HeaderBlock";






export default class Header extends Component{

  componentDidMount(){
      $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    })
  }


  render(){
    return(
      <header className="container wide">
        <HeaderB1 />
        <HeaderB2 />
      </header>
    );
  }



}//header component
