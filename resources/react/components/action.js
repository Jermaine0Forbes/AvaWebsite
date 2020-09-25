import{ ADD_ITEM, UPDATE_QUANTITY, UPDATE_PAGE,
        USER_LOGIN, USER_REGISTER} from "./types";
import {origin} from "./global";
import axios from "axios";

export const userRegisterSuccess = (data) => {
  return{
    type:USER_REGISTER,
    payload:data
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
      headers:{"Content-Type" : `application/json`}
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
