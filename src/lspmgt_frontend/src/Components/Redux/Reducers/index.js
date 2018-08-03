
import { GET_USER_STATUS, SIGN_IN_USER, SIGN_OUT_USER } from '../Actions';

const InitialState = { isAdmin: false, isLoggedIn: false }

const rootReducer = (state = InitialState, action) => {
    console.log('this is actions form reducer -> ', action.type, action.payload)
    switch (action.type) {
        case GET_USER_STATUS:
            console.log('REDUCER USER -> ', action, 'state -> ', state)
            return { ...state, isAdmin: action.payload }

        case SIGN_IN_USER:
            console.log('REDUCER USER -> ', action, 'state -> ', state)
            return { ...state, isAdmin: action.payload }

        case SIGN_OUT_USER:
            console.log('REDUCER USER -> ', action, 'state -> ', state)
            return { ...state, isAdmin: action.payload }    

        default:
            console.log('REDUCER USER ', action.payload)
            return state
    }
}

export default rootReducer;

