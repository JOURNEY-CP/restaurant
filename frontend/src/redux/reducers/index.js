import { combineReducers } from 'redux';
import sampleReducer from './sample';
import itemsReducer from './items';
import authReducer from './auth';
import cartReducer from './cart';
import orderReducer from './orders';

const rootReducer = combineReducers({
    sample: sampleReducer,
    items: itemsReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
});

export default rootReducer;
