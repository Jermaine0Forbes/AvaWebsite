

export  const storeVisit = () => {
  const url = window.location.origin+"/api/visit";
  const data = JSON.stringify({
    height: window.innerHeight ,
    width: window.innerWidth,
    path: window.location.pathname
  })
  fetch(url,{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:data
  })
  .then(res => res.text())
  .then(res => console.log(res))
  .catch(err => console.log(err))

}
