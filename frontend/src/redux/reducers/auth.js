import { ON_LOGIN } from '../actionConstants';

function authReducer(state, action) {
    switch (action.type) {
        case ON_LOGIN:
            return { ...state, status:true };
        default:
            return state || {status:false};
    }
}

export default authReducer;
