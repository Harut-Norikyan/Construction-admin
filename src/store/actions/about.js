export const ADD_ABOUT_REQUEST = "ADD_ABOUT_REQUEST";
export const ADD_ABOUT_SUCCESS = "ADD_ABOUT_SUCCESS";
export const ADD_ABOUT_FAIL = "ADD_ABOUT_FAIL";
export function addAbout (data) {
  return{
    type: ADD_ABOUT_REQUEST,
    payload: {data}
  }
}
export const UPDATE_ABOUT_REQUEST = "UPDATE_ABOUT_REQUEST";
export const UPDATE_ABOUT_SUCCESS = "UPDATE_ABOUT_SUCCESS";
export const UPDATE_ABOUT_FAIL = "UPDATE_ABOUT_FAIL";
export function updateAbout (id,data) {
  return{
    type: UPDATE_ABOUT_REQUEST,
    payload: {id,data}
  }
}
export const GET_ABOUT_REQUEST = "GET_ABOUT_REQUEST";
export const GET_ABOUT_SUCCESS = "GET_ABOUT_SUCCESS";
export const GET_ABOUT_FAIL = "GET_ABOUT_FAIL";
export function getAbout () {
  return{
    type: GET_ABOUT_REQUEST,
    payload: {}
  }
}
