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
      <React.Fragment>
        <section className="github-container">
          <div className="github-block">
            <a href="https://github.com/Jermaine0Forbes/AvaWebsite">View source on Github <span className="icon fab fa-github"></span></a>
          </div>
        </section>
        <header className="container wide">
          <HeaderB1 />
          <HeaderB2 />
        </header>
      </React.Fragment>
      );


  }



}//header component
