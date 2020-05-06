import{ ADD_ITEM, UPDATE_QUANTITY} from "./types";


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
