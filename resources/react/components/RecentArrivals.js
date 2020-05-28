import React, {Component, useRef, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
import {updatePage} from "./action";
import {useDispatch, useSelector} from "react-redux";
import {Fade,Zoom,LightSpeed, Bounce} from 'react-reveal';

export default function RecentArrivals (){
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products,setProducts] = useState(null);
  const dispatch = useDispatch();
  const page = useSelector(state => state.page);
  const origin = useSelector(state => state.origin);
  const url = origin+"/api/products/filter/";

  const moveAr = (num,text) => {

      Array.from(document.querySelectorAll(".page-link[data-rank]")).forEach((e) =>{
        let r = e.dataset.rank;
         switch (r) {
           case "first":
             e.innerHTML = text == "Next"? num : num-2;
             text == "Next" && e.classList.add("active");
             break;
           case "second":
           e.innerHTML = text == "Next"? num+1 : num-1;
             break;
           default:
           e.innerHTML = text == "Next"? num+2 : num;
           text == "Previous" && e.classList.add("active");
         }

      })
  }
  const handleArrow = (e) => {
    e.preventDefault();
    const elem = document.querySelector(".page-link.active");
    const link = parseInt(elem.textContent);
    const text = e.target.textContent.trim();
    let num = text == "Next" ? link+1 : link-1;
    // num = (num < 1 || num > 22 )? 1: num;
    // let num = link;
    const rank = elem.dataset.rank;
    const item = elem.closest(".page-item");
    // console.log(link)
    // console.log(item)
    if( num < 22 && num > 0){
      elem.classList.remove("active")
      if(rank == "third" && text == "Next"){
        moveAr(num, text)
      }else if(rank == "first" && text == "Previous" ){
       moveAr(num,text)
      }else{
        let next = text == "Next" ? item.nextSibling.querySelector(".page-link"): item.previousSibling.querySelector(".page-link")
        next.classList.add("active")
      }
       dispatch(updatePage(num))
  }

}//handleArrow
  const handleClick = (e) => {
    e.preventDefault();
    const elem = e.target;
    const num = parseInt(e.target.textContent.trim());
    const rank = elem.dataset.rank;
    document.querySelector(".page-link.active").classList.remove("active");

    if(num >= 22){

      Array.from(document.querySelectorAll(".page-link")).forEach(e => {
        let r = e.dataset.rank;
         switch (r) {
           case "first":
             e.innerHTML = 20;
             break;
           case "second":
           e.innerHTML = 21;
             break;
           default:
           e.innerHTML = 22;
          e.classList.add("active");
         }

      })
    }else{
        elem.classList.add("active")
    }

     dispatch(updatePage(num))
    // activePage(elem);
     // console.log(document.querySelector("a[data-rank='"+rank+"']"))
     // console.log(origin)
     // fetch(url+num)
     // .then(res => res.json())
     // .then(res => {
     //   console.log(res)
       // dispatch(updatePage(res.page))
     // }).catch( err => console.error(err))

  }//handleClick

  useEffect(() => {
    setLoading(true)
    setShowNext(true)
    setShowPrev(true)
    if(page <= 1){
      setShowPrev(false)
    }
    if(page >= 20){
      setShowNext(false)
    }
    fetch(url+page)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setLoading(false);
      setProducts(res.data);

    })
    .catch(err => console.error(err))
  },[page])


  useEffect(() =>{

    fetch(url+1)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setLoading(false);
      setProducts(res.data);
      dispatch(updatePage(res.page));

    })
    .catch(err => console.error(err))
  },[]);

    return(
      <main id="recent-arrivals"  className="container wide pad-half padH">
        <section className="row pad-half-all">
          <img className="img-fluid" src="https://via.placeholder.com/1400x400?text=Recent+Arrivals"/>
        </section>
        <section className="row pad-half-all">
          <FilterAside />
          <div className="col-md-9">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                {
                  showPrev ?
                  <li className="page-item"><a className="page-arrow " onClick={handleArrow} href="#">
                    <span className="fas fa-chevron-left"></span> Previous
                    </a>
                  </li>
                  :
                  null
                }

                <li className="page-item"><a className="page-link active" data-rank="first" onClick={handleClick} href="#">1</a></li>
                <li className="page-item"><a className="page-link" data-rank="second"  onClick={handleClick} href="#">2</a></li>
                <li className="page-item"><a className="page-link" data-rank="third" onClick={handleClick} href="#">3</a></li>
                {
                  showNext ?
                  <React.Fragment>
                    <li className="page-item">...</li>
                      <li className="page-item"><a className="page-link" onClick={handleClick} href="#">22</a></li>
                      <li className="page-item"><a className="page-arrow" onClick={handleArrow} href="#">
                        Next <span className="fas fa-chevron-right"></span>
                        </a>
                      </li>
                  </React.Fragment>
                  :
                  null
                }

              </ul>
            </nav>
            <ProductSelection loading={loading} data={products} />
          </div>

        </section>
      </main>
    )
}



const Product = ({id,img,name,price,url}) => {
  const link = "/product/"+id;
  const [loading , setLoading ] = useState(true);
  const handleLoad = (e) =>{
    const img = e.target;
   if(e.target.complete){
     setLoading(false);
     img.classList.remove("d-none")
   }
  }
  return (
    <React.Fragment>


      <Link className="card col-md-4" to={link}>
        <Fade duration={300} bottom cascade>
        <div>
          {
            loading ?
            <svg className="img-fluid" xmlns="http://www.w3.org/2000/svg" width="400" height="400" >
                <rect width="400" height="400" fill="#262626" />
            </svg>
                    : null

          }
            <img className="card-img-top img-fluid d-none" onLoad={handleLoad} src={img} alt={img} />
          <div className="card-body">
            <h5 className="product-name">{name}</h5>
            <p className="product-price">${price}</p>
          </div>
        </div>
      </Fade>
      </Link>
    </React.Fragment>
  )
}

const ProductSelection = ({loading, data}) => {

  const origin = window.location.origin;
  const url = origin+"/api/products/filter/";

  const dispatch = useDispatch();
  const products = data && data.map((e,i) => {
    const price = e.discount > 0 ?( e.price - e.discount_price).toFixed(2): e.price;
    return <Product key={i} id={e.id} price={price} img={e.image} name={e.name} url={origin}/>
  })


  return (
    <div className="row justify-content-between">
     {loading ? <Loader type="ball-pulse"  style={{textAlign:"center", display:"block", width:"100%"}}/> : products}
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
