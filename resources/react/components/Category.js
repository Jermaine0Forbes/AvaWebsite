import React, {Component, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function Category(){
const {type} = useParams();

  useEffect(() => {
    document.title = "The Category Page";
  },[])

    return(
      <main id="about" className="container wide pad-half padH">
        <div className="jumbotron">
          <h1 className="display-4 text-capitalize">{type} Page</h1>
        </div>
        <section className="row justify-content-center ">
          <h2 className="text-muted text-capitalize">currently working on</h2>
        </section>
      </main>
    )
}
