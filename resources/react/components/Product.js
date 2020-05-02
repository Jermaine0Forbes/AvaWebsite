import React,{Component, useEffect, useState, useRef} from 'react';
import {Link, useParams} from "react-router-dom";
import Loader from  'react-loaders';
// import "loaders.css/loaders.css.js";
// import "loaders.css/loaders.min.css";
import { useInView } from 'react-intersection-observer';
import StarRating from './StarRating';
import _ from "lodash";


export default function Product() {

  const {id} = useParams();
  const origin = window.location.origin;
  const url = origin+"/api/product/"+id;
  const[product,setProduct] = useState(null);
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
  }


  const breadCrumb = (accessory, sex, type,name) =>{
    let breadItem = [];
    switch (sex) {
      case "male":
        breadItem.push(<li className="breadcrumb-item"><Link to="/male">Male</Link></li>);
        break;
      case "female":
        breadItem.push(<li className="breadcrumb-item"><Link to="/female">Female</Link></li>);
        break;
      default:

    }
    if(accessory) breadItem.push(<li className="breadcrumb-item"><Link to="/accessory">Accessory</Link></li>);

     breadItem.push(<li className="breadcrumb-item"><Link to={"/"+type}>{_.capitalize(type)}</Link></li>);

      breadItem.push(<li className="breadcrumb-item active" aria-current="page">{name}</li>);

     return breadItem.map(item => item);

  }
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => {

      res.listPrice = listPrice(res.price, res.discount);
      res.breadCrumb = breadCrumb(res.accessory, res.sex, res.type, res.name);
      console.log(res)
      setProduct(res)
    })
    .catch( err => console.error(err))
  },[])

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
      <div className="row justify-content-between">
        <div className="col-md-5">
          <img className="img-fluid" src={ product ? product.image : "https://via.placeholder.com/680x720?text=Name+of+Product"}/>
        </div>
        <div className="col-md-6">
          <h3 className="product-name">{ product ? product.name : "Product Name"}</h3>
          <div className="product-price-container">
                { product ? product.listPrice  : "$24.99"}

          </div>

          <div className="product-size">
            <select className="form-control">
              <option default>choose a size</option>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
          <div className="product-quantity">
              <span className="label mr-3">quantity :</span>
              <button className="quantity-btn"><span className="fas fa-minus"></span></button>
              <input id="quantity-item" type="text" defaultValue="1" />
              <button className="quantity-btn"><span className="fas fa-plus"></span></button>
          </div>
          <button className="btn btn-primary cart-btn">Add to cart</button>
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
      <div className="product-reviews">
          <div className="customer-reviews">
            { product ? <StarRating rating={product.rating}/>:<StarRating rating={4}/>}
            <div className="title">Customer Reviews</div>
            <div className="rating">
              { product ? product.rating : "4"} stars - based on { product ? product.reviews :"100"} reviews
            </div>
            <a href="#" className="btn btn-outline-primary">write a review</a>
          </div>

          <div className="review-header">reviews</div>
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
      </div>
    </main>

  )
}
