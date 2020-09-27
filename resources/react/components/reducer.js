import {GET_RECENT,GET_RECENT_SUCCESS
        ,ADD_ITEM, UPDATE_QUANTITY, UPDATE_PAGE,
        USER_LOGIN, USER_REGISTER,} from "./types";


const initState  = {
  quantity:0,
  cartIcon: null,
  cart : [],
  currentProduct : [],
  message:null,
  page:1,
  lastPage:0,
  total: 0,
  user:null,
  token:null,
  error:null,
  message:null,
  firstName:null
  // origin: window.location.origin
}


export const reducer = (state = initState, action ) => {
  switch (action.type) {
    case GET_RECENT:
        return{
          ...state,
          message:action.payload
        }
      break;
    case GET_RECENT_SUCCESS:
        return{
          ...state,
          recentProducts:action.payload
        }
      break;

    case ADD_ITEM:
        let cart = state.cart;
        let total = [];

        if(cart.some(obj => { return obj.id == action.payload.id && obj.size == action.payload.size })){
          cart = cart.map((obj) =>{
            if(obj.id == action.payload.id ){
              obj.quantity +=action.payload.quantity;

            }
            return obj;
          })
        }else{
          cart.push(action.payload);
        }

       // total += cart.map(e => {
       //      let t = (parseInt(e.quantity * e.price)).toFixed(2)
       //    return t;
       //  })
        cart.map((e) => {
            total.push((e.quantity * e.price).toFixed(2))
          // return t;
        })

        total = total.reduce((acc,cur) => {
           return (Number(acc) + Number(cur)).toFixed(2);
        })

        return{
          ...state,
          cart:cart,
          total: total
        }
      break;
    case UPDATE_QUANTITY:
        return{
          ...state,
          quantity:action.payload
        }
      break;
    case UPDATE_PAGE:
        return{
          ...state,
          page:action.payload.page,
          lastPage: action.payload.last
        }
      break;
    case USER_LOGIN:
    case USER_REGISTER:
        return{
          ...state,
          firstName:action.user,
          token: action.token,
          error: action.error,
          message: action.message
        }
      break;
    default:
      return state;
  }
}
