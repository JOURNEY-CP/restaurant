import { GET_ORDER_LIST, GET_ORDER_DETAILS , UPDATE_ORDER_STATUS } from '../actionConstants';

function ordersReducer(state, action) {
    let list=[];
    switch (action.type) {
        case GET_ORDER_LIST:
            list=[...state.list,...action.data];
            return { ...state, list };
        case GET_ORDER_DETAILS:
            return { ...state};
        case UPDATE_ORDER_STATUS:
            return { ...state};
        default:
            return state || {list:[
                {
                    id:"sample",
                    table:5,
                    name:"harsha",
                }
            ]};
    }
}

export default ordersReducer;
