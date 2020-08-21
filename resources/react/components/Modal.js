import React,{useEffect, useRef, useState} from 'react';
import {Fade,Zoom} from 'react-reveal';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function Modal(){
  const [signup, setPage ] = useState(false);

  // useEffect(() => {
  //
  //
  //
  // }, [signup])

  return (
  <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <img id="logo" src="img/logo-mobile.svg" />
        </div>
        <div className="modal-body">
          <h5 className="modal-title text-center" id="loginModalLabel">Login to Ava</h5>
          <form className="form login-form" method="get">
            <div className="form-group">
              <input className="form-control" type="email"  name="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <input className="form-control" type="password"  name="password" placeholder="Password"/>
            </div>
            <div className="form-group">
              <input className="btn  mx-auto" type="submit"  value="Submit"/>
            </div>
              <div className="dropdown-divider"></div>

              <div className="form-group">
                <input className="btn  mx-auto" type="submit"  value="google"/>
              </div>
          </form>
        </div>
        <div className="modal-footer">
          <p className="signup-msg">Don't have an account? <a href="#" onClick={()=> console.log("foo")} className="text-primary text-underline">Register </a></p>
        </div>
      </div>
    </div>
</div>
  );
}

export  function CartModal(){
  const q = useSelector(state => state.quantity)
  const total = useSelector(state => state.total)
  const cartItems = useSelector(state => state.cart);
  const modal = useRef();

  useEffect(() => {
    if(modal.current)
     console.log(modal.current.className)
  })

  const closeMod = () =>{
    const modal = document.getElementById("cart-modal")
    modal.className = "";
  }
  return (
    <Fade right duration={300}>
      <div id="cart-modal" ref={modal} onClick={() => { closeMod()}}>
        <nav className="cart-menu">
          <div className="cart-header">
            <span className="h4">Personal Cart</span>
            <button className="btn"  onClick={() => { closeMod()}}>Close <span className="fa fa-times"></span></button>
          </div>
          <div className="cart-body">
              {
                q > 0 ? cartItems.map((e,i) => {
                   let size =  e.size ? <span className="size">{e.size}</span>:null;
                    return (
                            <div key={i} className="cart-item row">
                              <span className="img col-2"><img  className="img-fluid" src={e.img}/></span>
                              <span className="name col-6">{e.name}</span>
                              <span className="quantity col-2">{e.quantity}x</span>
                              <span className="price col-2">${e.price}</span>
                              {size}
                            </div>
                            )
                      }
                )
                   : <span>Empty Cart</span>
              }
          </div>
          <div className="cart-footer">
            <Link to="/cart" className="cart-btn btn">Go to Checkout <span id="total-price">${total}</span></Link>
          </div>
        </nav>
      </div>
    </Fade>
  );
}
