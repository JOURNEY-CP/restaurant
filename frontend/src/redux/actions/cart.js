import { ADD_ITEM_TO_CART , UPDATE_ITEM_QUANTITY} from '../actionConstants';

const onAddItemToCart = (data)=>({
    type:ADD_ITEM_TO_CART,
    data
})

const onUpdateItemQuantity = (data) =>({
    type:UPDATE_ITEM_QUANTITY,
    data
})

export {onAddItemToCart,onUpdateItemQuantity};