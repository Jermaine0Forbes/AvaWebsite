import jwt_decode from "jwt-decode";

export const origin = window.location.origin;
export const hostname = window.location.hostname;
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
  .then(res => {
    // console.log(res)
  })
  .catch(err => console.log(err))

}

export const tokenNotExpired = () => {
  const token = localStorage.getItem("access_token");
  if(!token){
    return false;
  }
  const access = jwt_decode(token);
  if(Date.now() >= access.exp*1000){
    // console.log("token expired")
     localStorage.clear();
    //  console.log(access)
    // console.log("now "+Date.now())
    // console.log("exp "+access.exp*1000)
     return false;
  }
  return true;
}
