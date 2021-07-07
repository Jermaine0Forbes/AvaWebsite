import React,{ useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Loader from  'react-loaders';
import {Fade,Zoom,LightSpeed, Bounce} from 'react-reveal';
import StarRating from './StarRating';
import SlickDefaultProducts from './SlickDefaultProducts';



const SlickProduct = ({discount,id,im,name,price, rating}) =>  {
    let newPrice;
    if(discount)  newPrice = (price - (price * (discount * 0.01))).toFixed(2);

  return (
    <Link className="carousel-product" to={"/product/"+id}>
      {
        discount ?
        <div className="slick-img-container">
          <span className="discount">{discount}%</span>
          <img className="img-fluid" src={"/img/330-"+im+".png"} alt={"image of "+name} title={name}/>
        </div>
        :
        <img className="img-fluid" src={"/img/330-"+im+".png"} alt={"image of "+name} title={name} />
      }


        <div className="product-name">{name}</div>
        <StarRating rating={rating} key={id}/>
        {
          discount ?
          <div className="product-price">
              ${newPrice}
          </div>
          :
          <div className="product-price">
              ${price}
          </div>
        }

    </Link>
  )
}


const SlickProducts = ({imgArr, slider, url,visible}) => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true);
  const slick  = $(slider.selector);

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
      setLoading(false)
      // console.log("slick loaded")
      $(slider.idSelector).removeAttr("style")
    })

  }

  useEffect(() =>{
    // console.log("in view: "+inView)
    // console.log("loaded: "+loaded)
    // console.log("visible")
    if(products && loading ){
      onInit();
      initSlick();
      // $(slickContainer).slideDown(300)

    }
  })


  useEffect ( () =>{
    fetch(url)
    .then( res => res.json())
    .then(res => {
      // console.log(res)
      let items = res.map((e,i) => {
         let img = i % 2 ==  0 ? imgArr[0] :imgArr[1];
        return <SlickProduct key={e["product_id"]} id={e.product_id} discount={e.discount} name={e.name} im={img} rating={e.rating} price={e.price}/>
      });

      let newProducts = (
                        <React.Fragment>
                          <div id={slider.id} className="row fluid-max-wide-10 center" style={{visibility:"hidden", position:"absolute"}} >
                              <div className={ slider.class+" row no-pad pad-half-all fluid"}  >
                                {items}
                              </div>
                          </div>
                      </ React.Fragment>
                    );

      setProducts(newProducts);

    })
    .catch(err => console.log(err))
  },[])



  return (
    <React.Fragment>
      { loading && <Loader type="ball-grid-beat" style={{"display":"flex", "height": "100px"}}/> }
      {products}
  </ React.Fragment>
  );
}

export default SlickProducts;
