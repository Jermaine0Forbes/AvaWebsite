import{ ADD_ITEM, UPDATE_QUANTITY, UPDATE_PAGE,
        USER_LOGIN, USER_REGISTER} from "./types";
import {origin} from "./global";
import axios from "axios";
import jwt_decode from "jwt-decode";



export const userLoginSuccess = (data) => {
  const user = jwt_decode(data.access_token);

  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("name",data.firstName);
  return{
    type:USER_LOGIN,
    firstName:data.firstName,
    token:data.access_token,
    error:data.error,
    message:data.message,
  }
}


export const userLogin = (data) => {
  const url = window.location.origin+"/api/login";
  return dispatch => {
    axios({
        method:"post",
        url: url,
        data:data,
        headers:{"Content-Type" : `multipart/form-data`}
      })
      .then(res => {
         dispatch(userLoginSuccess(res.data))
         console.log(res)
      })
      .catch(err => console.log(err))
    }
}

export const userRegisterSuccess = (data) => {


    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("name", data.firstName());
  return{
    type:USER_REGISTER,
    firstName:data.firstName,
    token:data.access_token,
    error:data.error,
    message:data.message,
  }
}

export const userRegister = (data,form) => {

  return dispatch => {

    const url = window.location.origin+"/api/register";
    // const url = "http://ava.co/api/register";
    // fetch(url,{
    //   method:"post",
    //   headers: {
    //     "Content-Type" : "application/json"
    //   },
    //   body:JSON.stringify(data),
    // })

  axios({
      method:"post",
      url: url,
      data:data,
      headers:{"Content-Type" : `multipart/form-data`}
    })
    .then(res => {
      console.log("success")
      form.reset();
       dispatch(userRegisterSuccess(res.data))
       console.log(res)
    })
    .catch(err => console.log(err))
  }
}

export const updatePage = (page,last) => {
  return {
    type:UPDATE_PAGE,
    payload:{page:page,last:last}
  }
}
export const updateQuantity = (items) => {
  return {
    type:UPDATE_QUANTITY,
    payload:items
  }
}
export const addItem = (item) => {
  return {
    type:ADD_ITEM,
    payload:item,
  }
}
