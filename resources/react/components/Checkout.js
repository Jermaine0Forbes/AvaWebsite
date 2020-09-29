import React, {Component, useEffect} from "react";
import {storeVisit} from "./global";
import {useSelector, useDispatch} from "react-redux";
import {Elements,CardElement,useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const key = "pk_test_EIWGM9Ma7mf9JEyaSlxqU93b";
const stripePromise = loadStripe(key);

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} =  stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
};
  return(
    <form onSubmit={handleSubmit}>
      <CardElement
        id="stripe-form"
        options={{

          style: {
            base: {
              fontSize: '18px',
              color: '#e6e6e6',
              padding:"px",
              borderRadius:"5px",
              '::placeholder': {
                color: '#e6e6e6',
                // backgroundColor:"#262626",

              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
    <button className="order-btn" type="submit" disabled={!stripe}>
         Place Order
       </button>
    </form>
  )
}


export default function Checkout () {
   const cart = JSON.parse(localStorage.getItem("cart"));
   const subtotal = localStorage.getItem("total");
   const total = Number((subtotal * 1.05) + 4.99).toFixed(2);
  useEffect(() =>{
      document.title = "The Checkout Page";
      storeVisit();
  },[]);

    return(
      <main id="checkout" className="container wide pad-half padH">

        <div className="row justify-content-center">
          <div id="details-container"className="col-md-5">
              <h2 className="checkout-header">Your Items</h2>
            {
              cart.length > 0 ? <CheckoutItems/> :
              <div className="">
                <h3>There are currently no items to checkout</h3>
              </div>
            }

              <h2 className="checkout-header">Billing Address</h2>
              <p class="text-muted">123 Main St., Boca Raton, Fl, 33145</p>

        </div>

          <div id="order-container"className="col-md-5">
            <h2 className="checkout-header">Your Order</h2>
            <p className="subtotal">subtotal: ${subtotal}</p>
            <p className="tax">tax: 5%</p>
            <p className="shipping">shipping fee: $4.99</p>
            <p className="total mb-5">total: ${total}</p>


            <h2 className="checkout-header">Payment Method</h2>

            <Elements stripe={stripePromise}>
              <CheckoutForm/>
            </Elements>
          </div>

        </div>
      </main>
    )
}


const CheckoutItems = () =>{
  const cart = JSON.parse(localStorage.getItem("cart"));

  return(
    <div className="item-container">
      {
        cart.map((e,i) =>{

          return(
            <div className="item-block" key={e.id+"-"+i}>
              <div className="item-header">
                <img className="item-img" src={e.img}/>
                <h4 className="item-name">{e.name}</h4>
              </div>
               <div className="item-details">
                 <span className="price">Price: ${e.price}</span>
                 {
                   e.size? <span className="size">Size: {e.size}</span>: null
                 }

                 <span className="quantity">Quantity: {e.quantity}</span>
               </div>
            </div>
          )
        })
      }

    </div>
  )
}
