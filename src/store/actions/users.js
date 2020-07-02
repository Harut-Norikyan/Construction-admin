export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

export function addUser(data) {
  return {
    type: ADD_USER_REQUEST,
    payload: data,
  }
}

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export function loginAdmin(email,password) {
  return {
    type: LOGIN_USER_REQUEST,
    payload: {email, password}
  }
}
