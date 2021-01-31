import { GET_ITEM_LIST } from '../actionConstants';
function itemsReducer(state, action) {
    switch (action.type) {
        case GET_ITEM_LIST:
            return { ...state, list:[...action.data] };
        default:
            return state || {};
    }
}

export default itemsReducer;
