
import { 
    GET_USER_STATUS, 
    SIGN_IN_USER, 
    SIGN_OUT_USER 
} from '../Actions';

const InitialState = { 
    isAdmin: false, 
    isLoggedIn: false 
}

const rootReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GET_USER_STATUS:
            return { ...state, isAdmin: action.payload }

        case SIGN_IN_USER:
            return { ...state, isAdmin: action.payload }

        case SIGN_OUT_USER:
            return { ...state, isAdmin: action.payload }    

        default:
            return state
    }
}

export default rootReducer;

