import React, {Component,useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {AccessoryMenu, MenMenu, WomenMenu} from "./SubMenu";
import {connect} from 'react-redux';
import {addItem} from "./action";
import {tokenNotExpired} from "./global";
import {useSelector} from "react-redux";

const mapStateToProps = (state) => {
  return {
    quantity:state.quantity,
    cartIcon: state.cartIcon,
    message:state.message,
    cart: state.cart,
    token: state.token,
    firstName: state.firstName
  }
}

const mapDispatchToProps = {
  addItem,
};

export function HeaderB1(){
  const [logged, setLog] = useState(false);
  const token = useSelector(state => state.token);
  const name = useSelector(state => state.firstName) || localStorage.getItem("name");

  useEffect(() => {
    if(tokenNotExpired() && name)
     setLog(true)
  },[token]);

  return(
    <section id="header-block-1" className="hidden-md-down ">
        <div className="fluid-max-4 ">
            <span>Your Language: english <span className="fa fa-angle-down"></span></span>


            <span className="pad-half padH">Currency: USD <span className="fa fa-angle-down"></span></span>
        </div>
        <div className={logged? "flex-right greeting-block ": "flex-right "}>
            { logged ? <div>welcome back {name}!</div>:<span>welcome to our online store!</span>  }
        </div>
    </section>
  )
}

function MobileNav(){
  return(
    <nav id="mobile-nav" data-device="mobile" className="col-12 hidden-lg-up navbar navbar-inverse bg-inverse navbar-toggleable-md">
        <ul className="navbar-nav">
            <li className="nav-item dropdown"><p className="nav-link"><span className="fa fa-bars"></span> <span className="hidden-sm-down">menu</span></p>
                <div className="menu submenu">
                <Link to="/accessories"  className="dropdown-item"></Link>
                <Link to="/men"  className="dropdown-item">men</Link>
                <Link to="/women"  className="dropdown-item">women</Link>
                <Link to="/about"  className="dropdown-item">about us</Link>
                <Link to="/contact"  className="dropdown-item">contact us</Link>

                </div>
            </li>
            <li className="nav-item"><p className="nav-link"><span className="fa fa-search"></span> <span className="hidden-sm-down">search</span></p>
                <div className="search submenu">
                    <form className="" method="post">
                        <div className="input-group">
                            <input type="text" name=""  placeholder="Search entire store..."/>
                            <button className="btn btn-primary fa fa-search" type="button" name="button"></button>
                        </div>
                    </form>
                </div>
            </li>
            <li className="nav-item"><p className="nav-link"><span className="fa fa-bars"></span> <span className="hidden-sm-down">account</span></p>
                <div className="account submenu">
                    <a className="dropdown-item" href="/">your language: english</a>
                    <a className="dropdown-item" href="/">currensy: usd</a>
                    <a className="dropdown-item" href="/">my account</a>
                    <a className="dropdown-item" href="/">my wishlist</a>
                    <a className="dropdown-item" href="/">my cart</a>
                    <a className="dropdown-item" href="/">checkout</a>
                    <a className="dropdown-item" href="/">register</a>
                    <a className="dropdown-item" href="/">log in</a>
                </div>
            </li>
            <li className="nav-item"><p className="nav-link"><span className="fa fa-shopping-cart"></span> <span className="hidden-sm-down">cart</span></p>
            </li>
        </ul>
    </nav>
  )
}


 class HeaderB2 extends Component{

   constructor(){
     super();
   }

  openModal(){
    const checkModal = document.getElementById("cart-modal");
    let items = ``;
    checkModal.classList.add("open-modal");
    //   this.props.cart.map((e) => {
    //   items += `<li><p>Name: ${e.name}, Price: ${e.price}</p></li>`
    // })
    // checkModal.querySelector(".checkout-body ul").innerHTML = items;
    // const container = document.getElementById("react");
    // const div = document.createElement("div");
    // // const cl = document.createAttribute("class");
    // // cl.value = "open-modal";
    // div.setAttribute("class", "open-modal");
    // container.appendChild(div);
    // container.style.marginLeft = "350px";

  }
  render(){
    const {cart,cartIcon,firstName,message, quantity, token} = this.props;
    const link = false;
    let loginBtn;
     console.log(this.props)
    if(tokenNotExpired()){
      loginBtn = (
      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="fa fa-user pink"  title="User"></span>
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <h5 className="dropdown-item header teal">{localStorage.getItem("name")}</h5>
          <button className="dropdown-item" type="button">Account</button>
          <button className="dropdown-item" type="button">Orders</button>
          <button className="dropdown-item" type="button">History</button>
          <button className="dropdown-item" type="button">Logout</button>
        </div>
      </div>

        )
    }else{
      loginBtn = (
      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" >
          <span className="fa fa-user"  title="User"></span>
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button" data-toggle="modal" data-target="#loginModal">Login</button>
          <button className="dropdown-item" type="button" data-toggle="modal" data-target="#loginModal">Sign Up</button>
        </div>
      </div>

        )
    }
    return(
      <section id="header-block-2" className="row justify-content-center">
          <div className="row fluid pad-half padH">
              <div className="flex-left fluid-max-wide-2 lg-margin-center">
                  <Link to="/">
                    <h1>
                        <img className="img-fluid hidden-md-down" src="/img/logo.svg" alt="ava logo"/>
                        <img className="img-fluid hidden-lg-up" src="/img/logo-mobile.svg" alt="ava logo"/>
                    </h1>
                  </Link>
              </div>
              <div className="nav col-md-7 hidden-md-down">
                  <nav id="desktop-nav" data-device="desktop" className="navbar hidden-md-down fluid-max-wide-6 ">
                      <ul className="navbar-nav around">
                          <li className="nav-item">
                             <Link to="/accessories"  className="nav-link"> accessories <span className="fa fa-caret-down"></span> </Link>
                              <AccessoryMenu />
                          </li>
                          <li className="nav-item">
                          <Link to="/men"  className="nav-link">men <span className="fa fa-caret-down"></span></Link>
                            <MenMenu />
                          </li>
                          <li className="nav-item">
                          <Link to="/women"  className="nav-link">women <span className="fa fa-caret-down"></span></Link>
                            <WomenMenu />
                          </li>
                          <li className="nav-item">
                            <Link to="/about" className="nav-link">about us </Link>
                          </li>
                          <li className="nav-item">
                          <Link to="/contact" className="nav-link">
                            contact us
                          </Link>
                          </li>
                      </ul>
                  </nav>
              </div>
              <div className="icons flex-right col-md-2 list-inline spaced hidden-md-down">
                  <a href="/"><span className="fa fa-search"></span></a>
                  {loginBtn}
                  <Link to="/cart"><span className="fa fa-shopping-cart"></span></Link>
                  <span onClick={() => {this.openModal()}} className={ quantity > 0 ? "shopping-number active" :"shopping-number"}>{quantity}</span>
              </div>
          </div>
          <MobileNav />


      </section>

    );

  }

}

export default connect(mapStateToProps)(HeaderB2);
