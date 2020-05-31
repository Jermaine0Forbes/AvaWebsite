import React, {Component, useRef, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
import {updatePage} from "./action";
import {useDispatch, useSelector} from "react-redux";
import {Fade} from 'react-reveal';

export default function RecentArrivals (){

  const [loading, setLoading] = useState(true);
  const [products,setProducts] = useState(null);
  const [filter, setFilter] = useState({category:null, price:null, sex:null, brand:null});
  const dispatch = useDispatch();
  const page = useSelector(state => state.page);
  const lastPage = useSelector(state => state.lastPage);
  const showNext = lastPage-2 >= page ? true : false;
  const showPrev = page > 1 ? true : false;
  const origin = useSelector(state => state.origin);
  const url = origin+"/api/products/filter/";
  // console.log("lastPage:"+lastPage);
  // console.log("showNext:"+showNext);
  // console.log("products:"+products);
  // console.log("loading:"+loading);
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
      if( num < lastPage && num > 0){
        elem.classList.remove("active")
        if(rank == "third" && text == "Next"){
          moveAr(num, text)
        }else if(rank == "first" && text == "Previous" ){
         moveAr(num,text)
        }else{
          let next = text == "Next" ? item.nextSibling.querySelector(".page-link"): item.previousSibling.querySelector(".page-link")
          next.classList.add("active")
        }
         dispatch(updatePage(num,lastPage))
    }

  }//handleArrow
  const handleClick = (e) => {
    e.preventDefault();
    const elem = e.target;
    const num = parseInt(e.target.textContent.trim());
    const rank = elem.dataset.rank;
    document.querySelector(".page-link.active").classList.remove("active");

    if(num >= lastPage){

      Array.from(document.querySelectorAll(".page-link")).forEach(e => {
        let r = e.dataset.rank;
         switch (r) {
           case "first":
             e.innerHTML = lastPage-2;
             break;
           case "second":
           e.innerHTML = lastPage-1;
             break;
           default:
           e.innerHTML = lastPage;
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
    // if( page > 1){
      fetch(url+page)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        dispatch(updatePage(res.page, res.lastPage));
        setLoading(false);
        setProducts(res.data);
      })
      .catch(err => console.error(err))
    // }

  },[page])


  // useEffect(() =>{
  //   setShowNext(true)
  //   setShowPrev(true)
  //   if(page <= 1){
  //     setShowPrev(false)
  //   }
  //   if(page >= lastPage-2 ){
  //     setShowNext(false)
  //   }
  // },[lastPage]);

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
                  <p className="filter-item"> <a href="#"> Any</a></p>
                  <p className="filter-item"> <a href="#"> Men</a></p>
                  <p className="filter-item"> <a href="#"> Women</a></p>
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

                  <li className="page-item"><a   className={showPrev ? "page-arrow" :"page-arrow disabled"} onClick={ showPrev ? handleArrow : null}
                    href="#">
                    <span className="fas fa-chevron-left"></span> Previous
                    </a>
                  </li>

                <li className="page-item"><a className="page-link active" data-rank="first" onClick={handleClick} href="#">1</a></li>
                <li className="page-item"><a className="page-link" data-rank="second"  onClick={handleClick} href="#">2</a></li>
                <li className="page-item"><a className="page-link" data-rank="third" onClick={handleClick} href="#">3</a></li>

                {lastPage == 0 || page >= lastPage-2 ?
                  null:
                  <React.Fragment>
                    <li className="page-item">...</li>
                      <li className="page-item"><a className="page-link" onClick={handleClick} href="#">{lastPage}</a></li>
                    </React.Fragment>
                  }

                <li className="page-item"><a className={showNext ? "page-arrow" : "page-arrow disabled"} onClick={ showNext ? handleArrow : null}
                   href="#">
                  Next <span className="fas fa-chevron-right"></span>
                  </a>
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
    const chevron = elem.querySelector(".fas").classList;
    if(list){
      const isClosed = !list.classList.contains("closed");
      list.classList.toggle("closed",isClosed);

    }
    chevron.contains("fa-chevron-up")?chevron.replace("fa-chevron-up", "fa-chevron-down"):chevron.replace("fa-chevron-down","fa-chevron-up");

    // console.log(e.target.nextSibling);
  }


  return (
    <aside className="col-md-3 border-right">
      <div className="filter-list-group list-group list-group-flush ">
        <div className="filter-section list-group-item">
          <p className="filter-name" onClick={toggleFilter}>Categories <span className="fas fa-chevron-up"></span></p>
           <div className="filter-list toggle">
             <p className="filter-item"> <input type="checkbox" name="category" value="shirt" /> Shirt</p>
             <p className="filter-item"> <input type="checkbox" name="category" value="jacket"/> Jacket</p>
             <p className="filter-item"> <input type="checkbox" name="category" value="sweater"/> Sweater</p>
             <p className="filter-item"> <input type="checkbox" name="category" value="jeans"/> Jeans</p>
             <p className="filter-item"> <input type="checkbox" name="category" value="shorts"/> Shorts</p>
           </div>
        </div>
        <div className="filter-section list-group-item">
          <p className="filter-name" onClick={toggleFilter}>Brand <span className="fas fa-chevron-up"></span></p>
          <div className="filter-list toggle">
            <p className="filter-item"> <input type="checkbox" name="brand" value="nike"/> nike</p>
            <p className="filter-item"> <input type="checkbox" name="brand" value="gucci"/> gucci</p>
            <p className="filter-item"> <input type="checkbox" name="brand" value="louis vuitton"/> louis vuitton</p>
            <p className="filter-item"> <input type="checkbox" name="brand" value="tommy hilfiger"/> tommy hilfiger</p>
            <p className="filter-item"> <input type="checkbox" name="brand" value="ralph lauren"/> ralph lauren</p>
            <p className="filter-item"> <input type="checkbox" name="brand" value="calvin klein"/> calvin klein</p>
            <p className="filter-item"> <input type="checkbox" name="brand" value="versace"/> versace</p>
          </div>
        </div>
        <div className="filter-section list-group-item">
          <p className="filter-name"  onClick={toggleFilter}>Gender <span className="fas fa-chevron-up"></span></p>
          <div className="filter-list toggle">
            <p className="filter-item"> <a href="#"> Any</a></p>
            <p className="filter-item"> <a href="#"> Men</a></p>
            <p className="filter-item"> <a href="#"> Women</a></p>
          </div>
        </div>
        <div className="filter-section list-group-item">
          <p className="filter-name"  onClick={toggleFilter}>Price <span className="fas fa-chevron-up"></span></p>
            <div className="filter-list toggle">
              <p className="filter-item"> <input type="checkbox" name="price" value="300"/> $300 - $250</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="250"/> $250 - $200</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="200"/> $200 - $150</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="150"/> $150 - $100</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="100"/> $100 - $50</p>
              <p className="filter-item"> <input type="checkbox" name="price" value="50"/> $50 - $0</p>
            </div>
        </div>
      </div>
    </aside>
  )
}
