import React,{Component, useState, useEffect, useRef} from 'react';



export  function PlaceholderImg ({children,height}){

    const [loaded, setLoaded] = useState(false);
    const h = height || "600px";

    useEffect(()=>{

      let img = document.getElementById(children.props.id);
      if(!img.complete){
        img.onload = () => {
          setLoaded(true);
        }
      }else{
        setLoaded(true);
      }
      return () => img = null;

    },[])

  return (
    <React.Fragment>
      { loaded ? children :
          (
            <span>
              <div className="img-placeholder loads" style={{width:"100%",height:h}}></div>
               <div style={{visibility:"hidden", position:"absolute"}}>
                   {children}
               </div>
            </span>

          )
      }
    </React.Fragment>
  )
}
