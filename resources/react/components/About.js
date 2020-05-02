import React, {Component} from "react";


export default class About extends Component{

  componentDidMount(){
      document.title = "The About Page";
  }

  render(){
    return(
      <main id="about" className="container wide pad-half padH">
        <div className="jumbotron">
          <h1 className="display-4">About Page</h1>
        </div>
        <section className="row justify-content-center ">
          <h1> I'm baby tbh swag neutra microdosing.</h1>
          <p className="col-md-8">Deep v hell of chicharrones, man bun vaporware hammock 90's aesthetic
          blue bottle poutine forage bitters hot chicken flannel fanny pack.
          Vice edison bulb quinoa kinfolk cred affogato try-hard fanny pack four
          loko prism poke blog four dollar toast cornhole. Narwhal occupy
          fingerstache mlkshk waistcoat flannel. Bespoke vexillologist adaptogen
          blog. Coloring book marfa microdosing asymmetrical echo park lomo,
           chia bicycle rights tattooed 90's vexillologist shoreditch. La croix
           lomo hammock brooklyn 3 wolf moon shaman food truck iceland adaptogen
            chillwave cray locavore flannel paleo. Tumeric readymade sartorial,
            single-origin coffee messenger bag roof party biodiesel echo park
            food truck squid pork belly post-ironic deep v kogi. </p>
        </section>
      </main>
    )
  }
}
