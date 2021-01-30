import { MY_SAMPLE } from '../actionConstants';

function sampleReducer(state, action) {
    switch (action.type) {
        case MY_SAMPLE:
            return { ...state, ...action.data };
        default:
            return state || {};
    }
}

export default sampleReducer;
