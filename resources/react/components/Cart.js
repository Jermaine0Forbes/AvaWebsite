import React, {Component, useState, useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

 class Cart extends Component{

  constructor(){
    super();
  }


  render(){
     let {cart} = this.props ;
     // cart = cart == null && localStorage.getItem("cart")
     cart =  localStorage.getItem("cart");
    return(
      <main id="cart" className="container wide pad-half padH">
        <div className="shopping-cart-container">

          <h1 className="h3">Shopping Cart</h1>
          {
            cart.length > 0 ?
            <CartTable/>
            :
            <div>
              Your shopping cart is empty
            </div>
          }

        </div>


      </main>
    )
  }
}

const CartTable = () => {
  // const cart = useSelector(state => state.cart).length || JSON.parse(localStorage.getItem("cart"));
  const cart =  JSON.parse(localStorage.getItem("cart"));
  const total = localStorage.getItem("total");
  return(
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((e,i) => {
              return (
                <tr key={e.id+"-"+i}>
                  <td>{e.name}</td>
                  <td>{e.size}</td>
                  <td>{e.quantity}</td>
                  <td>{e.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="subtotal-container">
        <span className="subtotal-block">Subtotal: <strong>${total}</strong></span>
        <Link to="checkout" className="checkout-btn"> Proceed to checkout</Link>
      </div>
    </React.Fragment>

  )
}


export default connect(mapStateToProps)(Cart);
