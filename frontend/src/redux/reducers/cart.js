import {ADD_ITEM_TO_CART,UPDATE_ITEM_QUANTITY} from '../actionConstants'
function cartReducer(state, action) {
    let order=[];
    let item;
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            // if(state.order)
            //     order=[...state.order]
            order=[...state.order,action.data]
            return { ...state, order };
        case UPDATE_ITEM_QUANTITY:
            console.log(action.data);
            order=[...state.order];
            item = order.find( ({ id }) => id === action.data.id);
            if(item.quantity+action.data.val>=1)
              item.quantity+=action.data.val;
            return {...state,order};

        default:
            return state || {order: []};
    }
}


export default cartReducer;