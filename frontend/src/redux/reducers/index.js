import { combineReducers } from 'redux';
import metaDataReducer from './metaData';
import itemsReducer from './items';
import cartReducer from './cart';

const rootReducer = combineReducers({
    metaData: metaDataReducer,
    items: itemsReducer,
    cart: cartReducer
});

export default rootReducer;
