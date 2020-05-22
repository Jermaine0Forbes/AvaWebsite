import React, {Component, useRef} from "react";
import {Link} from "react-router-dom";

export default function RecentArrivals (){


    return(
      <main id="recent-arrivals"  className="container wide pad-half padH">
        <section className="row pad-half-all">
          <img className="img-fluid" src="https://via.placeholder.com/1400x400?text=Recent+Arrivals"/>
        </section>
        <section className="row pad-half-all">
          <FilterAside />
          <div className="col-md-9">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
            <ProductSelection />
          </div>

        </section>
      </main>
    )
}

const ProductSelection = () => {

  return (
    <div className="row justify-content-between">
      <Link className="card col-md-4" to="#">
        <div  >
          <img className="card-img-top" src="https://via.placeholder.com/300x300" alt="Card image cap" />
          <div className="card-body">
            <h5 className="product-name">Product Name</h5>
            <p className="product-price">$29.99</p>
          </div>
        </div>
      </Link>
      <Link className="card col-md-4" to="#">
        <div  >
          <img className="card-img-top" src="https://via.placeholder.com/300x300" alt="Card image cap"/>
          <div className="card-body">
          <h5 className="product-name">Product Name</h5>
          <p className="product-price">$29.99</p>
          </div>
        </div>
      </Link>
      <Link className="card col-md-4" to="#">
        <div  >
          <img className="card-img-top" src="https://via.placeholder.com/300x300" alt="Card image cap"/>
          <div className="card-body">
          <h5 className="product-name">Product Name</h5>
          <p className="product-price">$29.99</p>
          </div>
        </div>
      </Link>
    </div>
  )
}


const FilterAside = () => {

  const toggleFilter = (e) => {
     const elem = e.target.classList.contains("fas") ? e.target.parentNode: e.target;
    // console.log(elem);
    const list = elem.nextSibling.classList.contains("filter-list")? elem.nextSibling: false;
    if(list){
      const isClosed = !list.classList.contains("closed");
      list.classList.toggle("closed",isClosed);
    }

    // console.log(e.target.nextSibling);
  }


  return (
    <aside className="col-md-3 border-right">
      <div className="filter-list-group list-group list-group-flush ">
        <div className="filter-section list-group-item">
          <p className="filter-name" onClick={toggleFilter}>Categories <span className="fas fa-chevron-down"></span></p>
           <div className="filter-list toggle">
             <p className="filter-item"> <input type="radio" name="category" value="shirt"/> Shirt</p>
             <p className="filter-item"> <input type="radio" name="category" value="jacket"/> Jacket</p>
             <p className="filter-item"> <input type="radio" name="category" value="sweater"/> Sweater</p>
             <p className="filter-item"> <input type="radio" name="category" value="jeans"/> Jeans</p>
             <p className="filter-item"> <input type="radio" name="category" value="shorts"/> Shorts</p>
           </div>
        </div>
        <div className="filter-section list-group-item">
          <p className="filter-name" onClick={toggleFilter}>Brand <span className="fas fa-chevron-down"></span></p>
          <div className="filter-list toggle">
            <p className="filter-item"> <input type="radio" name="brand" value="nike"/> nike</p>
            <p className="filter-item"> <input type="radio" name="brand" value="gucci"/> gucci</p>
            <p className="filter-item"> <input type="radio" name="brand" value="louis vuitton"/> louis vuitton</p>
            <p className="filter-item"> <input type="radio" name="brand" value="tommy hilfiger"/> tommy hilfiger</p>
            <p className="filter-item"> <input type="radio" name="brand" value="ralph lauren"/> ralph lauren</p>
            <p className="filter-item"> <input type="radio" name="brand" value="calvin klein"/> calvin klein</p>
            <p className="filter-item"> <input type="radio" name="brand" value="versace"/> versace</p>
          </div>
        </div>
        <div className="filter-section list-group-item">
          <p className="filter-name"  onClick={toggleFilter}>Gender <span className="fas fa-chevron-down"></span></p>
          <div className="filter-list toggle">
            <p className="filter-item"> <a href="#"> Any</a></p>
            <p className="filter-item"> <a href="#"> Men</a></p>
            <p className="filter-item"> <a href="#"> Women</a></p>
          </div>
        </div>
        <div className="filter-section list-group-item">
          <p className="filter-name"  onClick={toggleFilter}>Price <span className="fas fa-chevron-down"></span></p>
            <div className="filter-list toggle">
              <p className="filter-item"> <input type="checkbox" name="price" value="nike"/> $300 - $250</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="gucci"/> $250 - $200</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="louis vuitton"/> $200 - $150</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="tommy hilfiger"/> $150 - $100</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="ralph lauren"/> $100 - $50</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="calvin klein"/> $50 - $0</p>
            </div>
        </div>
        <div className="filter-section list-group-item">
          <p className="filter-name"  onClick={toggleFilter}>Vestibulum at eros <span className="fas fa-chevron-down"></span></p>
        </div>
      </div>
    </aside>
  )
}
