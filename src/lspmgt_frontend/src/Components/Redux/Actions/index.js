import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../../Config/Auth';

export const GET_USER_STATUS = 'GET_USER_STATUS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
Amplify.configure(AmplifyConfig);

export const getUserStatus = () => (dispatch) => {
    Auth.currentSession()
        .then(data => {
            // let status = data.idToken.payload['custom:access_level'] == 'admin' || 'tenant'
            dispatch({ type: GET_USER_STATUS, payload: true });
        })
        .catch(err => console.log('there was an erro -> ', err))
};

export const signInUser = (isAdmin) => (dispatch) => {
    dispatch({ type: SIGN_IN_USER, payload: isAdmin });
};

export const signOUtUser = () => (dispatch) => {
    Auth.signOut().then(() => {
        dispatch({ type: SIGN_OUT_USER, payload: false });
    });
};