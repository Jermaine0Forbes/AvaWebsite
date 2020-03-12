import React from 'react';

export default function Footer(){

  const date = new Date();

  return(
    <footer className="container wide pad-half padH">
    <section id ="footer-block-1" className="row justify-content-center" >
        <div className="fluid-max-wide-10 row pad-all">
            <div className="col-md-3  block-item-1 logo">
                <h2 className="fluid-max-3 md-margin-center">
                    <img className="img-fluid hidden-sm-down" src="/img/logo.svg" alt="logo" />
                    <img className="img-fluid hidden-md-up " src="/img/logo-mobile.svg" alt="logo"/>
                </h2>
                <p>
                    The variety of products available at our store at the moment is vast, but we still continue to widen our assortment. We monitor the relevant market niche on regular basis to keep our prices competitive. Buying form us you can be sure that you’ll get the product you have offered quickly and hassle-free. We value our reputation of the trustworthy merchant and never upset our clients.
                </p>
            </div>
            <div className="col-md-6 block-item-2 links">
                <div className="row">
                    <div className=" col-sm-4">
                        <h4>information</h4>
                        <ul>
                            <li><a href="/">about us</a></li>
                            <li><a href="/">customer service</a></li>
                            <li><a href="/">template settings</a></li>
                            <li ><a href="/" title="Site Map" >Site Map</a></li>
                            <li ><a href="/" title="Search Terms" >Search Terms</a></li>
                            <li ><a href="/" title="Advanced Search" >Advanced Search</a></li>
                            <li ><a href="/" title="Orders and Returns" >Orders and Returns</a></li>
                            <li  ><a href="/" title="Contact Us" >Contact Us</a></li>

                        </ul>
                    </div>
                    <div className=" col-sm-4">
                        <h4>why buy from us</h4>
                        <ul>
                             <li><a href="/">Shipping & Returns</a></li>
                           <li><a href="/">Secure Shopping</a></li>
                           <li><a href="/">International Shipping</a></li>
                           <li><a href="/">Affiliates</a></li>
                           <li><a href="/">Group Sales</a></li>
                        </ul>
                    </div>
                    <div className=" col-sm-4">
                        <h4>my account</h4>
                        <ul>
                             <li><a href="/">Sign In</a></li>
                           <li><a href="/">View Cart</a></li>
                           <li><a href="/">My Wishlist</a></li>
                           <li><a href="/">Track My Order</a></li>
                           <li><a href="/">Help</a></li>

                        </ul>
                    </div>
                </div>

            </div>
            <div className="col-md-3  block-item-3 newsletter">
                <h4>newsletter</h4>
                <form className="form"  method="post">
                    <div className="input-group">
                        <input className="col-md-8" type="text" name="email" />
                        <button className="fa fa-search btn" type="button" name="button"></button>
                    </div>
                </form>
                <div className="fluid-max-slim-2 social">
                    <a href="/"><span className="fa fa-facebook"></span></a>
                    <a href="/"><span className="fa fa-twitter"></span></a>
                    <a href="/"><span className="fa fa-google-plus"></span></a>
                    <a href="/"><span className="fa fa-instagram"></span></a>
                </div>
            </div>
        </div>
    </section>

    <section id="footer-block-2" className="row justify-content-center ">
        <div className="fluid-max-wide-10 row">
            <span className="copyright mobile-margin-center"> <a href="http://jermaineforbes.com/">Jermaine Forbes</a> © {date.getFullYear()} All Rights Reserved</span>
        </div>
    </section>

    </footer>
  )
}
