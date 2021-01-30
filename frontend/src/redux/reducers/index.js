import { combineReducers } from 'redux';
import sampleReducer from './sample';
import itemsReducer from './items';

const rootReducer = combineReducers({
    sample: sampleReducer,
    items: itemsReducer,
});

export default rootReducer;
