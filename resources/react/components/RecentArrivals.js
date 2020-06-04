import React, {Component, useRef, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
import {updatePage} from "./action";
import {useDispatch, useSelector} from "react-redux";
import {Fade} from 'react-reveal';

export default function RecentArrivals (){

  const [loading, setLoading] = useState(true);
  const [products,setProducts] = useState(null);
  const [firstPage, setFirstPage] = useState(1);
  const [secondPage, setSecondPage] = useState(2);
  const [thirdPage, setThirdPage] = useState(3);
  const [filter, setFilter] = useState({category:null, price:null, sex:null, brand:null});
  const dispatch = useDispatch();
  const page = useSelector(state => state.page);
  const lastPage = useSelector(state => state.lastPage);
  const showNext = lastPage-1 >= page ? true : false;
  const showPrev = page > 1 ? true : false;
  const origin = useSelector(state => state.origin);
  const url = origin+"/api/products/filter/";
  // console.log("firstPage:"+firstPage);
  // console.log("lastPage:"+lastPage);
  // console.log("showNext:"+showNext);
  // console.log("products:"+products);
  // console.log("loading:"+loading);
  const moveAr = (num,text) => {

      Array.from(document.querySelectorAll(".page-link[data-rank]")).forEach((e) =>{
        let r = e.dataset.rank,val;
         switch (r) {
           case "first":
             val = text == "Next"? num : num-2;
             // console.log("first page:"+val);
             setFirstPage(val)
             text == "Next" && e.classList.add("active");
             break;
           case "second":
           // e.innerHTML = text == "Next"? num+1 : num-1;
           val = text == "Next"? num+1 : num-1;
            // console.log("second page:"+val);
           setSecondPage(val);
             break;
           default:
           // e.innerHTML = text == "Next"? num+2 : num;
           val = text == "Next"? num+2 : num;
            // console.log("third page:"+val);
           setThirdPage(val);
           text == "Previous" && e.classList.add("active");
         }

      })
  }
    const handleArrow = (e) => {
      e.preventDefault();
      if(!loading){
          const elem = document.querySelector(".page-link.active");
          const link = parseInt(elem.textContent);
          const text = e.target.textContent.trim();
          let num = text == "Next" ? link+1 : link-1;
          const rank = elem.dataset.rank;
          const item = elem.closest(".page-item");
          // console.log(link)
          // console.log(item)
          if( num <= lastPage && num > 0){
            elem.classList.remove("active")
            console.log("rank:"+rank)
            console.log("arrow:"+text)
            if((rank == "third" && text == "Next") || (rank == "first" && text == "Previous")){
              moveAr(num, text)
            }else{
              let next = text == "Next" ? item.nextSibling.querySelector(".page-link"): item.previousSibling.querySelector(".page-link")
              next.classList.add("active")
            }
             dispatch(updatePage(num,lastPage))
        }
      }//!loading

  }//handleArrow
  const handleClick = (e) => {
    e.preventDefault();
    const elem = e.target;
    const num = parseInt(e.target.textContent.trim());
    const rank = elem.dataset.rank;
    document.querySelector(".page-link.active").classList.remove("active");

    if(num >= lastPage){

      Array.from(document.querySelectorAll(".page-link")).forEach(e => {
        let r = e.dataset.rank, val;
         switch (r) {
           case "first":
             val = lastPage-2;
             setFirstPage(val)
             break;
           case "second":
           // e.innerHTML = lastPage-1;
           val = lastPage-1;
           setSecondPage(val)
             break;
           default:
           // e.innerHTML = lastPage;
           val = lastPage;
           setThirdPage(val)
          e.classList.add("active");
         }

      })
    }else{
        elem.classList.add("active")
    }

     dispatch(updatePage(num,lastPage))
  }//handleClick

  const toggleFilter = (e) => {
     const elem = e.target.classList.contains("fas") ? e.target.parentNode: e.target;
    const list = elem.nextSibling.classList.contains("filter-list")? elem.nextSibling: false;
    const chevron = elem.querySelector(".fas").classList;
    if(list){
      const isClosed = !list.classList.contains("closed");
      list.classList.toggle("closed",isClosed);

    }
    chevron.contains("fa-chevron-up")?
    chevron.replace("fa-chevron-up", "fa-chevron-down"):chevron.replace("fa-chevron-down","fa-chevron-up");

  }//toggleFilter

  const handleFilter = (e) => {
     const val  = e.target.checked ? e.target.value : null;
     const removed = val == null ? e.target.value : "";

    const data = {
      category: filter.category,
      brand: filter.brand,
      price: filter.price,
      sex: filter.sex
    }
    switch (e.target.name) {
      case "category":
        if(removed){
          data.category = data.category.filter(e => e != removed)
        }else if(data.category){
          data.category.push(val)
        }else{
          data.category = [val]
        }
        break;
      case "brand":
      if(removed){
        data.brand = data.brand.filter(e => e != removed)
      }else if(data.brand){
        data.brand.push(val)
      }else{
        data.brand = [val]
      }
        break;
      case "price":
      if(removed){
        data.price = data.price.filter(e => e != removed && e!= removed-50)
      }else if(data.price){
        data.price.push(parseInt(val-50), parseInt(val));
        let max = Math.max(...data.price)  , min = Math.min(...data.price);
        data.price = [ min, max];
      }else{
        data.price = [parseInt(val-50), parseInt(val)]
      }
        break;
      default:
      if(removed){
        data.sex = data.sex.filter(e => e != removed)
      }else if(data.sex){
        data.sex.push(val)
      }else{
        data.sex = [val]
      }
    }

    setFilter(data);
    console.log(data)
    setLoading(true)
    setFirstPage(1);
    setSecondPage(2);
    setThirdPage(3);
    fetch(url+1,{
      method:"POST",
      headers: {
     'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {

      dispatch(updatePage(res.page, res.lastPage));
      setLoading(false);
      setProducts(res.data);
    })
  }//handleFilter

  useEffect(() => {
    console.log("when page changes")
      setLoading(true)
      if(document.querySelectorAll(".page-link.active").length == 0){
        // console.log("first page:"+firstPage);
        // console.log("second page:"+secondPage);
        // console.log("third page:"+thirdPage);
        let selector = page > 1 ? ".page-link[data-rank='third']": ".page-link[data-rank='first']";
        document.querySelector(selector).classList.add("active")
      }else if (document.querySelectorAll(".page-link.active").length > 1){
        // console.log("foo")
        document.querySelector(".page-link.active").classList.remove("active")
      }
    // if( page > 1){
      fetch(url+page,{
        method:"POST",
        headers: {
       'Content-Type': 'application/json'
        },
        body: JSON.stringify(filter)
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        lastPage != res.lastPage && dispatch(updatePage(res.page, res.lastPage));
        setLoading(false);
        setProducts(res.data);
      })
      .catch(err => console.error(err))
    // }

  },[page])



    return(
      <main id="recent-arrivals"  className="container wide pad-half padH">
        <section className="row pad-half-all">
          <img className="img-fluid" src="https://via.placeholder.com/1400x400?text=Recent+Arrivals"/>
        </section>
        <section className="row pad-half-all">
          <aside className="col-md-3 border-right">
            <div className="filter-list-group list-group list-group-flush ">
              <div className="filter-section list-group-item">
                <p className="filter-name" onClick={toggleFilter}>Categories <span className="fas fa-chevron-up"></span></p>
                 <div className="filter-list toggle">
                   <p className="filter-item"> <input type="checkbox" name="category" value="shirt" onChange={handleFilter} /> Shirt</p>
                   <p className="filter-item"> <input type="checkbox" name="category" value="jacket" onChange={handleFilter}/> Jacket</p>
                   <p className="filter-item"> <input type="checkbox" name="category" value="sweater" onChange={handleFilter}/> Sweater</p>
                   <p className="filter-item"> <input type="checkbox" name="category" value="jeans" onChange={handleFilter}/> Jeans</p>
                   <p className="filter-item"> <input type="checkbox" name="category" value="shorts" onChange={handleFilter}/> Shorts</p>
                 </div>
              </div>
              <div className="filter-section list-group-item">
                <p className="filter-name" onClick={toggleFilter}>Brand <span className="fas fa-chevron-up"></span></p>
                <div className="filter-list toggle">
                  <p className="filter-item"> <input type="checkbox" name="brand" value="nike" onChange={handleFilter}/> nike</p>
                  <p className="filter-item"> <input type="checkbox" name="brand" value="gucci" onChange={handleFilter}/> gucci</p>
                  <p className="filter-item"> <input type="checkbox" name="brand" value="louis vuitton" onChange={handleFilter}/> louis vuitton</p>
                  <p className="filter-item"> <input type="checkbox" name="brand" value="tommy hilfiger"onChange={handleFilter}/> tommy hilfiger</p>
                  <p className="filter-item"> <input type="checkbox" name="brand" value="ralph lauren"onChange={handleFilter}/> ralph lauren</p>
                  <p className="filter-item"> <input type="checkbox" name="brand" value="calvin klein"onChange={handleFilter}/> calvin klein</p>
                  <p className="filter-item"> <input type="checkbox" name="brand" value="versace"onChange={handleFilter}/> versace</p>
                </div>
              </div>
              <div className="filter-section list-group-item">
                <p className="filter-name"  onClick={toggleFilter}>Gender <span className="fas fa-chevron-up"></span></p>
                <div className="filter-list toggle">
                  <p className="filter-item"> <input type="checkbox" name="sex" value="any" onChange={handleFilter}/> Any</p>
                  <p className="filter-item"> <input type="checkbox" name="sex" value="male" onChange={handleFilter}/> Men</p>
                  <p className="filter-item"> <input type="checkbox" name="sex" value="female" onChange={handleFilter}/> Women</p>
                </div>
              </div>
              <div className="filter-section list-group-item">
                <p className="filter-name"  onClick={toggleFilter}>Price <span className="fas fa-chevron-up"></span></p>
                  <div className="filter-list toggle">
                    <p className="filter-item"> <input type="checkbox" name="price" value="300" onChange={handleFilter}/> $300 - $250</p>
                    <p className="filter-item"> <input type="checkbox" name="price" value="250" onChange={handleFilter}/> $250 - $200</p>
                    <p className="filter-item"> <input type="checkbox" name="price" value="200"onChange={handleFilter}/> $200 - $150</p>
                    <p className="filter-item"> <input type="checkbox" name="price" value="150" onChange={handleFilter}/> $150 - $100</p>
                    <p className="filter-item"> <input type="checkbox" name="price" value="100" onChange={handleFilter}/> $100 - $50</p>
                    <p className="filter-item"> <input type="checkbox" name="price" value="50" onChange={handleFilter}/> $50 - $0</p>
                  </div>
              </div>
            </div>
          </aside>
          <div className="col-md-9">
            <nav aria-label="Page navigation">
              <ul className="pagination">

                  <li className="page-item"><button className={showPrev ? " page-arrow" :" page-arrow disabled"} onClick={ showPrev ? handleArrow : null}>
                    <span className="fas fa-chevron-left"></span> Previous
                    </button>
                  </li>

                <li className="page-item"><a className={firstPage > lastPage || firstPage < 1 ? "page-link invisible":"page-link active"} data-rank="first" onClick={handleClick} href="#">{firstPage}</a></li>
                <li className="page-item"><a className={secondPage > lastPage || secondPage < 1 ? "page-link invisible":"page-link"} data-rank="second"  onClick={secondPage > lastPage ? null :handleClick} href="#">{secondPage}</a></li>
                <li className="page-item"><a className={  thirdPage > lastPage || thirdPage < 1  ? "page-link invisible" : "page-link"} data-rank="third" onClick={thirdPage > lastPage ? null :handleClick} href="#">{thirdPage}</a></li>

                {lastPage == 0 || page >= lastPage || thirdPage == lastPage || lastPage < 3 || secondPage == lastPage ?
                  null:
                  <React.Fragment>
                    <li className="page-item">...</li>
                      <li className="page-item"><a className="page-link" onClick={handleClick} href="#">{lastPage}</a></li>
                    </React.Fragment>
                  }

                <li className="page-item">
                  <button className={showNext ? "page-arrow" : "page-arrow disabled"} onClick={ showNext ? handleArrow : null}>
                      Next <span className="fas fa-chevron-right"></span>
                  </button>
                </li>
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
  const noProducts = data == null || data.length == 0 || data == undefined ?  <h4 className="text-muted mx-auto">0 results found</h4> : null;

  return (
    <div className="row justify-content-between">
     {loading ? <Loader type="ball-pulse"  style={{textAlign:"center", display:"block", width:"100%"}}/> : products}
     {loading ? null : noProducts}
    </div>
  )
}
