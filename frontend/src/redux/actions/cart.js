import { ADD_ITEM_TO_CART } from '../actionConstants';

const onAddItemToCart = (data)=>({
    type:ADD_ITEM_TO_CART,
    data
})

export {onAddItemToCart};