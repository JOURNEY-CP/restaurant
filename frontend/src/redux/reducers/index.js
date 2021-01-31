import { combineReducers } from 'redux';
import sampleReducer from './sample';
import itemsReducer from './items';
import authReducer from './auth';

const rootReducer = combineReducers({
    sample: sampleReducer,
    items: itemsReducer,
    auth: authReducer
});

export default rootReducer;
