import axios from 'axios';

import Amplify, { Auth } from 'aws-amplify';
import AmplifyConfig from '../../../Config/Auth';

export const GET_USER_STATUS = 'GET_USER_STATUS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS';
export const GET_USER_SETTINGS = 'GET_USER_SETTINGS';
Amplify.configure(AmplifyConfig);

const AdminUrl = '/api/admin/';
const TenantUrl = '/api/tenant/';

export const getUserStatus = () => (dispatch) => {
  Auth.currentSession()
    .then((data) => {
      let status = data.idToken.payload['custom:access_level'] === 'admin' ? 'admin' : 'tenant';
      dispatch({ type: GET_USER_STATUS, payload: { isAdmin: status, isLoggedIn: true } });
    })
    .catch((err) => console.log('there was an erro -> ', err));
};

export const signInUser = (user) => (dispatch) => {
  // let status = data.idToken.payload['custom:access_level'] == 'admin' ? 'admin' : 'tenant';
  dispatch({ type: SIGN_IN_USER, payload: { isAdmin: user, isLoggedIn: true } });
};

export const signOUtUser = () => (dispatch) => {
  Auth.signOut().then(() => {
    dispatch({ type: SIGN_OUT_USER, payload: { isAdmin: '', isLoggedIn: false } });
  });
};

// export const

export const getUserSettings = (event) => (dispatch) => {
  // console.log('ACTION GET USER SETTINGS -> ', event);
  const url = event.user === 'admin' ? AdminUrl : TenantUrl;

  axios
    .get(`${url}${event.action}/${event.payload.email}`) // /api/xxxx/getusersettings
    .then((response) => {
      console.log('Response in ACTION AXIOS -->', response.data.data);

      dispatch({ type: GET_USER_SETTINGS, payload: response.data.data });
    })
    .catch((error) => {
      console.log('Error while retrieving adminId -->', error);
    });
};

export const updateUserSettings = (event) => (dispatch) => {
  console.log('ACTION UPDATE USER SETTINGS, my event is -->', event);

  const url = event.user === 'admin' ? AdminUrl : TenantUrl;

  axios
    .patch(`${url}${event.action}/${event.payload.adminId}`, event.payload)
    .then((res) => {
      console.log('Admin settings patched from actions -->', res);

      dispatch({ type: UPDATE_USER_SETTINGS, payload: event.payload });
    })
    .catch((err) => {
      console.log('Error patching admin in ACTION-->', err);
    });
};
