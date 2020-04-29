import React,{Component, useEffect, useState, useRef} from 'react';
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
// import "loaders.css/loaders.css.js";
// import "loaders.css/loaders.min.css";
import { useInView } from 'react-intersection-observer'


export default function Product() {

  return (
    <main id="product" className="container wide pad-half padH">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Group</a></li>
          <li className="breadcrumb-item active" aria-current="page">Product</li>
        </ol>
        <div className="rating-container">
          <div className="star-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <span className="rating-reviews"> based on <strong>100 reviews</strong></span>
        </div>

      </nav>
      <div className="row justify-content-between">
        <div className="col-md-5">
          <img className="img-fluid" src="https://via.placeholder.com/680x720?text=Name+of+Product"/>
        </div>
        <div className="col-md-6">
          <h2 className="product-name">Product Name</h2>
          <div className="product-price">$24.99</div>

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
              <button><span className="fas fa-minus"></span></button>
              <input type="text" defaultValue="1" />
              <button><span className="fas fa-plus"></span></button>
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
            <div className="star-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="title">Customer Reviews</div>
            <div className="rating">4 stars - based on 100 reviews</div>
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
