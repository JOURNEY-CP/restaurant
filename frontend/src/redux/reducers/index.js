import { combineReducers } from 'redux';
import sampleReducer from './sample';
import itemsReducer from './items';
import cartReducer from './cart';

const rootReducer = combineReducers({
    sample: sampleReducer,
    items: itemsReducer,
    cart: cartReducer
});

export default rootReducer;
