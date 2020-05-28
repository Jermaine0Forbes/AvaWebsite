import {GET_RECENT,GET_RECENT_SUCCESS
        ,ADD_ITEM, UPDATE_QUANTITY, UPDATE_PAGE} from "./types";


const initState  = {
  quantity:0,
  cartIcon: null,
  cart : [],
  currentProduct : [],
  message:null,
  page:0,
  origin: window.location.origin
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
        if(cart.some(obj => obj.id == action.payload.id)){
          cart = cart.map((obj) =>{
            if(obj.id == action.payload.id ) obj.quantity +=action.payload.quantity;

            return obj;
          })
        }else{
          cart.push(action.payload);
        }
        return{
          ...state,
          cart:cart
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
          page:action.payload
        }
      break;
    default:
      return state;
  }
}
