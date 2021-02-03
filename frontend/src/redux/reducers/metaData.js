import { CUSTOMER_META_DATA } from '../actionConstants';

function metaDataReducer(state, action) {
    switch (action.type) {
        case CUSTOMER_META_DATA:
            console.log(action.data);
            return { ...state, customerMetaData:{...action.data }};
        default:
            return state || {};
    }
}

export default metaDataReducer;
