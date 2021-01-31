import { combineReducers } from 'redux';
import sampleReducer from './sample';
import itemsReducer from './items';
import authReducer from './auth';
import cartReducer from './cart';

const rootReducer = combineReducers({
    sample: sampleReducer,
    items: itemsReducer,
    auth: authReducer,
    cart: cartReducer,
});

export default rootReducer;
