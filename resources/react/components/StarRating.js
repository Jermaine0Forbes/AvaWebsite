import React,{Component, useEffect, useState, useRef} from 'react';

const StarRating = ({rating}) => {
   let starRating = "";
   function starLoop(num) {
     let decimal = (Number.isInteger(rating))? 0 : (rating % 1).toFixed(1);
     // console.log(rating+" decimal is "+decimal)
     let remainder = 5-num;
     // console.log("remainder is "+remainder)
     let  starArr = [];
     for (var i = 0; i < num; i++) {
       starArr.push(<i className="fas fa-star"></i>)
    }

    if (remainder){
      for (var i = 0; i < remainder; i++) {

        if(i == 0 && decimal >= 0.3 && decimal <=0.6){
          starArr.push(<i className="fas fa-star-half-alt"></i>)
          continue;
          // stars += <i className="fas fa-star"></i>;
        }
        else if (i == 0 && decimal >= 0.7 ){
          starArr.push(<i className="fas fa-star"></i>)
          continue;
          // stars += <i className="fas fa-star-half-alt"></i>;
        }
        starArr.push(<i className="far fa-star"></i>)
        // stars += <i className="far fa-star"></i>;
     }

    }


     let stars = starArr.map((e,i) => {
        return <span key={i}>{e}</span>;
      })



    return stars;
   }



     if(rating == 5){
      starRating = starLoop(5)
     }else if(rating >= 4){
       starRating =  starLoop(4)
     }
     else if(rating >= 3){
      starRating =   starLoop(3)
     }
     else if(rating >= 2){
      starRating =   starLoop(2)
     }else{
        starRating = starLoop(1)
     }
 // starRating = <i className="far fa-star"></i>;
 // console.log(starRating)

  return (
    <div className="star-rating">
      {starRating}
  </div>
  )
}

export default StarRating;
