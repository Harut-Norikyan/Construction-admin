export const ADD_PROJECT_REQUEST = "ADD_PROJECT_REQUEST";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAIL = "ADD_PROJECT_FAIL";
 export function addProject (data) {
  return{
    type: ADD_PROJECT_REQUEST,
    payload: {data}
  }
 }

export const GET_PROJECTS_REQUEST = "GET_PROJECTS_REQUEST";
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";
export const GET_PROJECTS_FAIL = "GET_PROJECTS_FAIL";
 export function getProjects (activePage) {
  return{
    type: GET_PROJECTS_REQUEST,
    payload: activePage
  }
 }

export const GET_PROJECT_BY_ID_REQUEST = "GET_PROJECT_BY_ID_REQUEST";
export const GET_PROJECT_BY_ID_SUCCESS = "GET_PROJECT_BY_ID_SUCCESS";
export const GET_PROJECT_BY_ID_FAIL = "GET_PROJECT_BY_ID_FAIL";
 export function getProjectById (id) {
  return{
    type: GET_PROJECT_BY_ID_REQUEST,
    payload: {id}
  }
 }
export const UPDATE_PROJECT_REQUEST = "UPDATE_PROJECT_REQUEST";
export const UPDATE_PROJECT_SUCCESS = "UPDATE_PROJECT_SUCCESS";
export const UPDATE_PROJECT_FAIL = "UPDATE_PROJECT_FAIL";
export function updateProject (id,data) {
  return{
    type: UPDATE_PROJECT_REQUEST,
    payload: {id,data}
  }
}
export const DELETE_PROJECT_REQUEST = "DELETE_PROJECT_REQUEST";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_FAIL = "DELETE_PROJECT_FAIL";
export function deleteProject (id) {
  return{
    type: DELETE_PROJECT_REQUEST,
    payload: {id}
  }
}
