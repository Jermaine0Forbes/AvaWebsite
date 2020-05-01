import React,{Component, useEffect, useState, useRef} from 'react';
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
// import "loaders.css/loaders.css.js";
// import "loaders.css/loaders.min.css";
import {Fade,Zoom,LightSpeed, Bounce} from 'react-reveal';
import { useInView } from 'react-intersection-observer';
import StarRating from './StarRating';

const SlickDefaultProducts = () => {
  return  (
    <span>
    <div className="row fluid-max-wide-10 center">
        <div className="slick one row no-pad pad-half-all fluid" >
            <Link className="carousel-product" to="/product">
                <img className="img-fluid" src="/img/330-1.png" alt="" />
                <div className="product-name">Name of Product</div>
                <div className="star-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
              </div>
              <div className="product-price">
                  $29.99
              </div>
            </Link>
            <Link className="carousel-product" to="/product">
                <img className="img-fluid" src="/img/330-2.png" alt="" />
                <div className="product-name">Name of Product</div>
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="product-price">
                    $29.99
                </div>
            </Link>
            <Link className="carousel-product" to="/product">
                <img className="img-fluid" src="/img/330-1.png" alt="" />
                <div className="product-name">Name of Product</div>
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="product-price">
                    $29.99
                </div>
            </Link>
            <Link className="carousel-product" to="/product">
                <img className="img-fluid" src="/img/330-2.png" alt="" />
                <div className="product-name">Name of Product</div>
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="product-price">
                    $29.99
                </div>
            </Link>
            <Link className="carousel-product" to="/product">
                <img className="img-fluid" src="/img/330-1.png" alt="" />
                <div className="product-name">Name of Product</div>
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="product-price">
                    $29.99
                </div>
            </Link>
            <Link className="carousel-product" to="/product">
                <img className="img-fluid" src="/img/330-2.png" alt="" />
                <div className="product-name">Name of Product</div>
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="product-price">
                    $29.99
                </div>
            </Link>
            <Link className="carousel-product" to="/product">
                <img className="img-fluid" src="/img/330-1.png" alt="" />
                <div className="product-name">Name of Product</div>
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="product-price">
                    $29.99
                </div>
            </Link>
            <Link className="carousel-product" to="/product">
                <img className="img-fluid" src="/img/330-2.png" alt="" />
                <div className="product-name">Name of Product</div>
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="product-price">
                    $29.99
                </div>
            </Link>

        </div>
    </div>

    </ span>
  )
}

const SlickProduct = ({id,im,name,price, rating}) =>  {
  return (
    <Link className="carousel-product" to={"/product/"+id}>
        <img className="img-fluid" src={"/img/330-"+im+".png"} alt={"image of "+name} />
        <div className="product-name">{name}</div>
        <StarRating rating={rating} key={id}/>
        <div className="product-price">
            ${price}
        </div>
    </Link>
  )
}


const SlickProducts = () => {
  const [products, setProducts] = useState(null)
  useEffect ( () =>{
    let url ="http://localhost:3001/api/recent/products";
    fetch(url)
    .then( res => res.json())
    .then(res => {
      // console.log(res)
      let items = res.map((e,i) => {
         let img = i % 2 ==  0 ? "2" :"1";
        return <SlickProduct key={e["product_id"]} id={e.product_id} name={e.name} im={img} rating={e.rating} price={e.price}/>
      });

      let newProducts =
      (
      <React.Fragment>
        <div className="row fluid-max-wide-10 center">
            <div className="slick one row no-pad pad-half-all fluid" >
              {items}
            </div>
        </div>
    </ React.Fragment>
    );

      setProducts(newProducts);

    })
    .catch(err => console.log(err))
  },[])

  useEffect(() => {
    console.log("somethings updated")

  }, [setProducts])


  return  products == null ? <SlickDefaultProducts /> : (products);
}
const NewProducts = () => {





     const [loaded, setLoaded] = useState(false);
     const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.1,
      })

      const slick  = $('.slick.one');

      const initSlick = () =>{

            slick.not('.slick-initialized').slick({
                infinite:true,
                autoplay:true,
                slidesToShow:4,
                slidesToScroll:2,
                autoplaySpeed:10000,
                prevArrow:"<button class='fa fa-angle-left slick-arrow slick-left'></button>",
                nextArrow:"<button class='fa fa-angle-right slick-arrow slick-right'></button>",
                responsive:[
                    {
                        breakpoint:768,
                        settings:{
                            slidesToShow:3
                        }
                    },
                    {
                        breakpoint:576,
                        settings:{
                            slidesToShow:2
                        }
                    }
                ],
            })
      };

      const onInit = () => {
        slick.on("init", function(){
          setLoaded(true)
          console.log("slick loaded")
        $(this).slideDown(500)
        })

      }

      useEffect(( ) =>{
         // console.log("in view: "+inView)
         // console.log("loaded: "+loaded)
        if(inView && loaded == false){

          onInit();
          initSlick();
        }


      },[inView])

      useEffect(() => {
        slick.hide();
        // console.log(onInit())
      },[])



      const loader = <Loader type="ball-grid-beat" style={{"display":"flex", "height": "100px"}}/>;

    return(
      <div className="new-products" ref={ref}>
          <h3 className="text-center">new products</h3>
          { loaded == false  && loader}
          <SlickProducts />
      </div>
    )

}


export default NewProducts;
