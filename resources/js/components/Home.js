import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
import "loaders.css/loaders.css.js";
import "loaders.css/loaders.min.css";
import {Fade,Zoom,LightSpeed, Bounce} from 'react-reveal';
import NewProducts from "./NewProducts";
import SpecialProducts from "./SpecialProducts";
// import Spinner from "react-bootstrap/Spinner";
// import {CircularProgress,Grow} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     color: 'purple',
//   },
// });
//
//
// const classes = useStyles();

const HBlock1 = ({state}) =>{

  // console.log(state)
  return (
    <Fade bottom={true}>
       <img className="img-fluid" src="/img/1400-2-22.jpg" alt="" />
       <div className="bg-container">
           <div className="bg">
               <div className="text teal">
                   <h4 className="hidden-md-down">spring - summer 2017</h4>
                   <h2 >new arrivals</h2>
                   <Link  to="/recent-arrivals" className="btn  btn-secondary">shop now</Link>
               </div>
           </div>
       </div>
   </Fade>
  )
}

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state = {loading:true}
  }

  waiting (e) {
    setTimeout(() =>{
      this.setState({loading:false})
    },5000);
  }
  componentDidMount(){
    document.title = "Ava Fashion";

    // this.setState({loading:false})
    // this.waiting();
  }

  render(){

     const {loading}= this.state;

    //const hBlock1 = loading ? <Loader type="ball-grid-beat" style={{display:"block"}} /> : <HBlock1 state={!loading}/>;
    // const hBlock1 = loading ? <Spinner animation="border" variant="primary"><span className="sr-only">Loading...</span></Spinner> : <HBlock1 />;
    return(
      <main id="home" className="container wide pad-half padH">

      <section id="home-block-1" className="row pad-half-all">
        <div className="col-12 block-item-1">
            <HBlock1 state={!loading}/>
          </div>
          <Fade bottom cascade>
            <div className="col-md-6 block-item-2">
                <img className="img-fluid" src="/img/alt-1.jpg"  alt="" />
                <div className="bg-container">
                    <div className="bg">
                        <div className="text pink">
                            <h4 >two</h4>
                            <h3 >ways to</h3>
                            <h2 className="teal-color">wear</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 block-item-3">
                <img className="img-fluid" src="/img/alt-2.jpg" alt="" />
                <div className="bg-container">
                    <div className="bg">
                        <div className="text pink">
                            <h4>the chic dress</h4>
                            <h3 >collection</h3>
                            <h2 className="teal-color">20% off</h2>
                        </div>
                    </div>
                </div>
            </div>

          </Fade>

          <div className="col-md-12 block-item-4">
              <img className="img-fluid" src="/img/1400-2-4.jpg"alt="" />
              <div className="bg-container">
                  <div className="bg">
                      <div className="text teal">
                          <h4 className="hidden-md-down"> spring - summer 2017</h4>
                          <h2 >perfect utility</h2>

                          <Link  to="/recent-arrivals" className="btn  btn-secondary">shop now</Link>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-6 block-item-5">
              <img className="img-fluid" src="/img/alt-3.jpg" alt="" />
              <div className="bg-container">
                  <div className="bg">
                      <div className="text pink">
                          <h3>buy 2 items</h3>
                          <h3>get one</h3>
                          <h2 className="teal-color">for free</h2>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-6 block-item-6">
              <div className="row no-pad pad-half-all">
                  <div className="col-sm-6 ">
                      <div className="text">
                          <img className="img-fluid" src="/img/blank.png" alt="" />
                          <div className="block-1">
                              <h3>free shipping</h3>
                              <h4>on orders over $99</h4>
                              <p>this offer is only valid on all of our stores</p>
                          </div>
                          <div className="block-2 hover">

                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="text">
                          <img className="img-fluid" src="/img/blank.png" alt="" />
                          <div className="block-1">
                              <h4>cod</h4>
                              <h3>cash on delivery</h3>
                          </div>
                          <div className="block-2 hover">

                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="text">
                          <img className="img-fluid" src="/img/blank.png" alt="" />
                          <div className="block-1">
                              <h3>order return</h3>
                              <h4>return within 14 days</h4>
                          </div>
                          <div className="block-2 hover">

                          </div>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="text pinky">
                          <img className="img-fluid" src="/img/blank.png" alt="" />
                          <div className="block-1">
                              <h2>75% off</h2>
                              <h4>shop now</h4>
                          </div>
                          <div className="block-2 hover">

                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </section>

      <section id="home-block-2" className="">
        <NewProducts />
        <SpecialProducts />
      </section>

      <section id="home-block-3" >
          <div className="row  justify-content-center fluid-max-wide-10 center hidden-xs-down">
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
              <div className="col-2 col-sm-3 col-md-1">
                  <img className="img-fluid" src="https://via.placeholder.com/90x90" alt="" />
              </div>
          </div>
      </section>

      <section id="home-block-4" className="row justify-content-center">

          <div className="row fluid-max-wide-10">
              <div className="col-md-6 md-text-center">
                  <div className="row pad-half-all">
                      <div className="col-md-3">
                          <img className="img-fluid" src="/img/126-1.jpg" alt="" />
                      </div>
                      <div className="col-md-9">
                          <p>
                              Guys, you rock! Made a purchase at your store recently. The order has been shipped and delivered on time. The quality is superb! The price is quite reasonable. Told all my friends about your excellent service and the variety of choice. I think I’ll be your loyal customer in future as well. I wish your store many more years of prosperity.
                          </p>
                          <h4>- Victoria</h4>
                      </div>
                  </div>
              </div>
              <div className="col-md-6 md-text-center">
                  <div className="row pad-half-all">
                      <div className="col-md-3">
                          <img className="img-fluid" src="/img/126-2.jpg" alt="" />
                      </div>
                      <div className="col-md-9">
                          <p>
                              Guys, you rock! Made a purchase at your store recently. The order has been shipped and delivered on time. The quality is superb! The price is quite reasonable. Told all my friends about your excellent service and the variety of choice. I think I’ll be your loyal customer in future as well. I wish your store many more years of prosperity.
                          </p>
                          <h4>- Jennifer</h4>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="home-block-5">
          <h3 className="text-center">latest posts</h3>
          <div className="fluid-max-wide-10 row center md-text-center">
              <div className="col-md-6">
                  <div className="row pad-half-all">
                      <div className="col-md-6">
                          <img className="img-fluid" src="/img/576-1.jpg" alt="" />
                      </div>
                      <div className="col-md-6">
                          <div className="date">
                              6.26.17
                          </div>
                          <h4>Title</h4>
                          <p>
                              Thousands of people dream of having their own business and even more so be a successful entrepreneur.
                          </p>
                          <div className="comments">
                              <span className="fa fa-comment-o"></span> 0 comments
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="row pad-half-all">
                      <div className="col-md-6">
                          <img className="img-fluid" src="/img/576-2.jpg" alt="" />
                      </div>
                      <div className="col-md-6">
                          <div className="date">
                              6.26.17
                          </div>
                          <h4>Title</h4>
                          <p>
                              Thousands of people dream of having their own business and even more so be a successful entrepreneur.
                          </p>
                          <div className="comments">
                              <span className="fa fa-comment-o"></span> 0 comments
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="text-center ">
              <Link to="/blog" className="btn btn-secondary">view all posts</Link>
          </div>

      </section>
      </main>
    )
  }


}
