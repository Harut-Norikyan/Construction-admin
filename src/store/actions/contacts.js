export const ADD_CONTACT_REQUEST = "ADD_CONTACT_REQUEST";
export const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
export const ADD_CONTACT_FAIL = "ADD_CONTACT_FAIL";
export function addContact (data) {
  return{
    type: ADD_CONTACT_REQUEST,
    payload: {data}
  }
}
export const UPDATE_CONTACT_REQUEST = "UPDATE_CONTACT_REQUEST";
export const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";
export const UPDATE_CONTACT_FAIL = "UPDATE_CONTACT_FAIL";
export function updateContact (id,data) {
  return{
    type: UPDATE_CONTACT_REQUEST,
    payload: {id,data}
  }
}
export const GET_CONTACT_REQUEST = "GET_CONTACT_REQUEST";
export const GET_CONTACT_SUCCESS = "GET_CONTACT_SUCCESS";
export const GET_CONTACT_FAIL = "GET_CONTACT_FAIL";
export function getContact () {
  return{
    type: GET_CONTACT_REQUEST,
    payload: {}
  }
}
