import React,{Component, useEffect, useState, useRef} from 'react';
import {Link, useParams} from "react-router-dom";
import Loader from  'react-loaders';
import { useInView } from 'react-intersection-observer';
import StarRating from './StarRating';
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {updateQuantity,addItem} from "./action"


export default function Product() {

  const {id} = useParams();
  const origin = window.location.origin;
  const productUrl = origin+"/api/product/"+id;
  const commentUrl = origin+"/api/product/comments/"+id;
  const cartItems = useSelector( state => state.quantity);
  const dispatch = useDispatch();
  const[product,setProduct] = useState(null);
  const[number, setNumber] = useState(1);
  const[size, setSize] = useState(false);
  const[comments, setComments] = useState(false);
  const [ref, inView, entry] = useInView({
         /* Optional options */
         threshold: 0.5,
       })
  const listPrice  = (price, discount) =>{
    if(discount){
      let newPrice = (price - (price * (discount * 0.01))).toFixed(2);
      return (
        <React.Fragment>
          <p><span className="label">original:</span> <del className="small">${price}</del></p>
          <p>
            <span className="label">current:</span>
            <span className="product-price">
               ${newPrice}<span className="pink-color small">({discount}%)</span>
            </span>
          </p>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <p>
          <span className="label">current:</span>
          <span className="product-price">
             ${price}
          </span>
        </p>
      </React.Fragment>
    )
  }


  const breadCrumb = (accessory, sex, type,name) =>{
    let breadItem = [];
    switch (sex) {
      case "male":
        breadItem.push(<Link to="/men">Men</Link>);
        break;
      case "female":
        breadItem.push(<Link to="/women">Women</Link>);
        break;
      default:

    }
    if(accessory) breadItem.push(<Link to="/accessory">Accessory</Link>);

     breadItem.push(<Link to={"/category/"+type}>{_.capitalize(type)}</Link>);

      breadItem.push(name);

     return breadItem.map((item, i, arr) => {
       if(i == (arr.length-1)){
         return <li className="breadcrumb-item active" aria-current="page" key={i}>{item}</li>;
       }
      return  <li className="breadcrumb-item" key={i}>{item}</li>;

    });

  }

// need to finish
  const sizeList = (size) => {
    if(size.includes("Small")){
      // console.log(size.search("Small"))
      return (
        <select name="size" className="form-control" onChange={() => {setSize(true)}}>
          <option default>choose a size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="x-large">X-Large</option>
        </select>
      )
    }else if(size.includes("6")){
      size = _.words(size)
      size.sort();
      return (
        <select name="size" className="form-control" onChange={() => {setSize(true)}}>
          <option default>choose a size</option>
        {  size.map((e,i) => {
            return <option value={e} key={i}>{e}</option>;
          })}
        </select>
      )

    } else if(size.includes("26")){
      size = _.words(size)
      size.sort()

      return (
        <select name="size" className="form-control" onChange={() => {setSize(true)}}>
          <option default>choose a size</option>
        {  size.map((e,i) => {
            return <option value={e} key={i}>{e}</option>;
          })}
        </select>
      )

    }

    return (<span id="no-size"></span>)
  }

  const setQuantity = (num) =>{

     num = number+num;
     // console.log(num)
    if(num <= 0){
      num =1;
    }
    setNumber(num);
  }




  const commentList = (comms) => {

    return comms.map((e,i) =>{
      const fInitial = e.firstName[0];
      const lInitial = e.lastName[0];
      return(<div className="customer-review row border-bottom" key={i}>
            <div className="col-md-4">
              <span className="customer-icon">{fInitial}</span>
                <span className="customer-name">{e.firstName} {lInitial}.</span>
            </div>
            <div className="col-md-8">
              <div className="customer-rating">
                <StarRating rating={e.rating} />
                <span className="date">{e.date}</span>
              </div>

              <div className="customer-title">{e.title}</div>
              <div className="customer-summary">{e.summary}</div>
            </div>
          </div>)
    })
  }

  const addToCart = () =>{
    if(size){

      console.log(number)
      let quantity = cartItems + number;
      let price = product.discount > 0 ? (product.price - (product.price * (product.discount * 0.01))).toFixed(2) : 0;
      let item = {
        price: price,
        name: product.name,
        id: id,
        url: origin+"/product/"+id,
        img: product.image,
        quantity:number
      }
      dispatch(updateQuantity(quantity))
      dispatch(addItem(item))
    }

  }

  useEffect(() => {

    window.scrollTo(1, 0);

    fetch(productUrl)
    .then(res => res.json())
    .then(res => {

      res.listPrice = listPrice(res.price, res.discount);
      res.breadCrumb = breadCrumb(res.accessory, res.sex, res.type, res.name);
      res.sizeList = sizeList(res.size);
      // console.log(res)
      setProduct(res)
      if(document.getElementById("no-size")){
        setSize(true);
      }
    })
    .catch( err => console.error(err))
  },[])


  useEffect(() => {
    if(inView  && !comments){
      fetch(commentUrl)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        const comment = (
          <React.Fragment>
            {commentList(res)}
          </React.Fragment>
        )
        setComments(comment)
      })
      .catch(err => {
        console.log(err)
      })
      // console.log("product-reviews in view")
      // console.log(entry)
    }
  },[inView])

  return (
    <main id="product" className="container wide pad-half padH">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        {
           product ?
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              {product.breadCrumb}
            </ol>
          :
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Group</a></li>
              <li className="breadcrumb-item active" aria-current="page">Product</li>
          </ol>


        }
        <div className="rating-container">
          { product ? <StarRating rating={product.rating}/>:<StarRating rating={4}/>}
          <span className="rating-reviews">
            based on <strong>{ product ? product.reviews :"100"} reviews</strong>
          </span>
        </div>

      </nav>
      <div id="detail" className="row justify-content-between">
        <div className="col-md-5">
          <img className="img-fluid" src={ product ? product.image : "https://via.placeholder.com/680x720?text=Name+of+Product"}/>
        </div>
        <div className="col-md-6">
          <h3 className="product-name">{ product ? product.name : "Product Name"}</h3>
          <div className="product-price-container">
                { product ? product.listPrice  : "$24.99"}

          </div>

          <div className="product-size">
            {
              product ?
              product.sizeList
              :
              <select name="size" className="form-control">
                <option default>choose a size</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            }

          </div>
          <div id="product-quantity">
              <span className="label mr-3">quantity :</span>
              <button className="minus-btn" onClick={ () => {setQuantity(-1)}}><span className="fas fa-minus"></span></button>
              <input id="quantity-item" type="text"  readOnly value={number} />
            <button className="plus-btn" onClick={() => {setQuantity(1)}}><span className="fas fa-plus"></span></button>
          </div>
          <button className={ size ? "btn btn-primary cart-btn": "btn disabled cart-btn"} onClick={ () => addToCart()}>Add to cart</button>
          <div className="product-links">
            <div className="wish-list">
              <a href="#" className="label">wishlist</a>
            </div>
            <div className="share-links">
              <span className="label">share</span>
              <div className="fluid-max-slim-2 social">
                  <a href="/"><span className="fab fa-facebook-f"></span></a>
                  <a href="/"><span className="fab fa-twitter"></span></a>
                  <a href="/"><span className="fab fa-google-plus"></span></a>
                  <a href="/"><span className="fab fa-instagram"></span></a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="product-reviews" ref={ref}>
          <div className="customer-reviews">
            { product ? <StarRating rating={product.rating}/>:<StarRating rating={4}/>}
            <div className="title">Customer Reviews</div>
            <div className="rating">
              { product ? product.rating : "4"} stars - based on { product ? product.reviews :"100"} reviews
            </div>
            <a href="#" className="btn btn-outline-primary">write a review</a>
          </div>

          <div className="review-header">reviews</div>
    {

        comments ?

          comments
        :

      <div className="customer-review row border-bottom">
        <div className="col-md-4">
          <span className="customer-icon">M</span>
            <span className="customer-name">Mary C.</span>
        </div>
        <div className="col-md-8">
          <div className="customer-rating">
            <div className="star-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <span className="date">4/19/20</span>
          </div>
          <div className="customer-title">This is a good product</div>
          <div className="customer-summary">This is a good product</div>
        </div>
      </div>
    }
      </div>
    </main>

  )
}
