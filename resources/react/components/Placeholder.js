import React,{Component, useState, useEffect, useRef} from 'react';



export  function PlaceholderImg ({children,height}){

    const [loaded, setLoaded] = useState(false);
    const h = height || "600px";

    useEffect(()=>{

      // console.log(children.props)

        const img = document.getElementById(children.props.id);

      // console.log(img)

      // let img = document.querySelector(src);
      if(!img.complete){
        img.onload = () => {
          console.log("image loaded")
          // console.log(img)
          setLoaded(true);
        }
      }else{
        setLoaded(true);
      }
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
