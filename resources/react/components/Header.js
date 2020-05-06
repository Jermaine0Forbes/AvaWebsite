import React,{Component} from 'react';
import HeaderB2, {HeaderB1 } from "./HeaderBlock";






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
