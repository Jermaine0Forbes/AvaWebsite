import React from 'react';


export default function Header(){


  return(
    <header className="container wide">
    <section id="header-block-1" className="row pad hidden-md-down ">
        <div className="fluid-max-4">
            <span>Your Language: english <span className="fa fa-angle-down"></span></span>


            <span className="pad-half padH">Currency: USD <span className="fa fa-angle-down"></span></span>
        </div>
        <div className="flex-right">
            welcome to our online store!
        </div>
    </section>
    <section id="header-block-2" className="row justify-content-center">
        <div className="row fluid pad-half padH">
            <div className="flex-left fluid-max-wide-2 lg-margin-center">
                <h1>
                    <img className="img-fluid hidden-md-down" src="/img/logo.svg" alt="ava logo"/>
                    <img className="img-fluid hidden-lg-up" src="/img/logo-mobile.svg" alt="ava logo"/>
                </h1>
            </div>
            <div className="nav col-md-7 hidden-md-down">
                <nav id="desktop-nav" data-device="desktop" className="navbar hidden-md-down fluid-max-wide-6 ">
                    <ul className="navbar-nav around">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                accessories <span className="fa fa-caret-down"></span>

                            </a>
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

                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                men <span className="fa fa-caret-down"></span>
                            </a>
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
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                women <span className="fa fa-caret-down"></span>
                            </a>
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
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                about us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                contact us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="icons flex-right col-md-2 list-inline spaced hidden-md-down">
                <a href="/"><span className="fa fa-search"></span></a>
                <a href="/"><span className="fa fa-user"></span></a>
                <a href="/"><span className="fa fa-shopping-cart"></span></a>
                <span className="shopping-number">0</span>
            </div>
        </div>

        <nav id="mobile-nav" data-device="mobile" className="col-12 hidden-lg-up navbar navbar-inverse bg-inverse navbar-toggleable-md">
            <ul className="navbar-nav">
                <li className="nav-item dropdown"><p className="nav-link"><span className="fa fa-bars"></span> <span className="hidden-sm-down">menu</span></p>
                    <div className="menu submenu">
                        <a className="dropdown-item" href="/">accessories</a>
                        <a className="dropdown-item" href="/">men</a>
                        <a className="dropdown-item" href="/">women</a>
                        <a className="dropdown-item" href="/">about us</a>
                        <a className="dropdown-item" href="/">contact us</a>
                    </div>
                </li>
                <li className="nav-item"><p className="nav-link"><span className="fa fa-search"></span> <span className="hidden-sm-down">search</span></p>
                    <div className="search submenu">
                        <form className="" method="post">
                            <div className="input-group">
                                <input type="text" name="" value="" placeholder="Search entire store..."/>
                                <button className="btn btn-primary fa fa-search" type="button" name="button"></button>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="nav-item"><p className="nav-link"><span className="fa fa-bars"></span> <span className="hidden-sm-down">account</span></p>
                    <div className="account submenu">
                        <a className="dropdown-item" href="/">your language: english</a>
                        <a className="dropdown-item" href="/">currensy: usd</a>
                        <a className="dropdown-item" href="/">my account</a>
                        <a className="dropdown-item" href="/">my wishlist</a>
                        <a className="dropdown-item" href="/">my cart</a>
                        <a className="dropdown-item" href="/">checkout</a>
                        <a className="dropdown-item" href="/">register</a>
                        <a className="dropdown-item" href="/">log in</a>
                    </div>
                </li>
                <li className="nav-item"><p className="nav-link"><span className="fa fa-shopping-cart"></span> <span className="hidden-sm-down">cart</span></p>
                </li>
            </ul>
        </nav>

    </section>

    </header>
  );

}//header component
