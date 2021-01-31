import {ADD_ITEM_TO_CART} from '../actionConstants'
function cartReducer(state, action) {
    let order=[];
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            // if(state.order)
            //     order=[...state.order]
            order=[...state.order,action.data]
            return { ...state, order };
        default:
            return state || {order:[]};
    }
}

export default cartReducer;