import React, {Component} from 'react';


export function AccessoryMenu(){

  return(
    <div className="submenu desktop">
        <div className="row justify-content-center">
            <ul className="col-md-4">
                <li className="dropdown-item header"><a className="pink-color" href="/">features</a></li>
                <li className="dropdown-item"><a href="/">luggage</a></li>
                <li className="dropdown-item"><a href="/">men's footwear</a></li>
                <li className="dropdown-item"><a href="/">women's watches & jewelry</a></li>
                <li className="dropdown-item"><a href="/">TAILORED ACCESSORIES</a></li>
            </ul>
            <ul className="col-md-4">
                <li className="dropdown-item header"><a href="/">women's accessories</a></li>
                <li className="dropdown-item"><a href="/">WOMEN'S NEW ARRIVALS</a></li>
                <li className="dropdown-item"><a href="/">FOOTWEAR</a></li>
                <li className="dropdown-item"><a href="/">HANDBAGS & SMALL GOOD</a></li>
                <li className="dropdown-item"><a href="/">FRAGRANCE</a></li>
                <li className="dropdown-item"><a href="/">INTIMATES & LOUNGE</a></li>
                <li className="dropdown-item"><a href="/">BELTS</a></li>
                <li className="dropdown-item"><a href="/">JEWELRY</a></li>
                <li className="dropdown-item"><a href="/">HATS, GLOVES & SCARVES</a></li>
                <li className="dropdown-item"><a href="/">SUNGLASSES</a></li>
            </ul>
            <ul className="col-md-4">
                <li className="dropdown-item header"><a href="/">men's accessories</a></li>
                <li className="dropdown-item"><a href="/">MEN'S NEW ARRIVALS</a></li>
                <li className="dropdown-item"><a href="/">FOOTWEAR</a></li>
                <li className="dropdown-item"><a href="/">MEN'S WATCHES</a></li>
                <li className="dropdown-item"><a href="/">TIES & POCKET SQUARES</a></li>
                <li className="dropdown-item"><a href="/">UNDERWEAR & LOUNGE</a></li>
                <li className="dropdown-item"><a href="/">HATS, GLOVES & SCARVES</a></li>
                <li className="dropdown-item"><a href="/">SUNGLASSES</a></li>
                <li className="dropdown-item"><a href="/">FRAGRANCE</a></li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-6">
                <img className="img-fluid" src="https://via.placeholder.com/350x150" alt="placeholder"/>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src="https://via.placeholder.com/350x150" alt="placeholder"/>
            </div>
        </div>
    </div>

  );
}

export function MenMenu(){

  return(
    <div className="submenu desktop men">
        <div className="row justify-content-center">
            <ul className="col-6">
                <li className="dropdown-item header"><a href="/">features</a></li>
                <li className="dropdown-item"><a href="/">NEW ARRIVALS</a></li>
                <li className="dropdown-item"><a href="/">TOMMY JEANS</a></li>
                <li className="dropdown-item"><a href="/">TAILORED</a></li>
                <li className="dropdown-item"><a href="/">HILFIGER DENIM</a></li>
            </ul>
            <ul className="col-6">
                <li className="dropdown-item header"><a href="/">general</a></li>
                <li className="dropdown-item"><a href="/">CASUAL SHIRTS</a></li>
                <li className="dropdown-item"><a href="/">DRESS SHIRTS</a></li>
                <li className="dropdown-item"><a href="/">SWEATERS & FLEECE</a></li>
                <li className="dropdown-item"><a href="/">OUTERWEAR</a></li>
            </ul>
        </div>
        <div className="row justify-content-center">
            <div className="col">
                <img className="img-fluid" src="https://via.placeholder.com/600x150" alt="placeholder"/>
            </div>
        </div>
    </div>
  );
}


export function WomenMenu(){

  return(
    <div className="submenu desktop women">
        <div className="row justify-content-center">
            <ul className="col-6">
                <li className="dropdown-item header"><a href="/">features</a></li>
                <li className="dropdown-item"><a href="/">NEW ARRIVALS</a></li>
                <li className="dropdown-item"><a href="/">TOMMY JEANS</a></li>
                <li className="dropdown-item"><a href="/">/TOMMYNOW</a></li>
                <li className="dropdown-item"><a href="/">HILFIGER COLLECTION</a></li>
            </ul>
            <ul className="col-6">
                <li className="dropdown-item header"><a href="/">general</a></li>
                <li className="dropdown-item"><a href="/">BLOUSES & SHIRTS</a></li>
                <li className="dropdown-item"><a href="/">SWEATERS & SWEATSHIRTS</a></li>
                <li className="dropdown-item"><a href="/">OUTERWEAR</a></li>
                <li className="dropdown-item"><a href="/">JEANS</a></li>
                <li className="dropdown-item"><a href="/">PANTS</a></li>
            </ul>
        </div>
        <div className="row justify-content-center">
            <div className="col">
                <img className="img-fluid" src="https://via.placeholder.com/600x150" alt="placeholder"/>
            </div>
        </div>
    </div>
  );
}
