import{ ADD_ITEM, UPDATE_QUANTITY, UPDATE_PAGE} from "./types";


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
