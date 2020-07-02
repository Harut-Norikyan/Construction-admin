import {
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL ,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL ,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
} from "../actions/projects"



const initialstate = {
  requestStatus: '',
  projects:[],
  projectById:{},
};
export default function reducer(state = initialstate, action) {
  switch (action.type) {

    case ADD_PROJECT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case ADD_PROJECT_SUCCESS: {
      return {
        ...state,
        requestStatus: "added project"
      }
    }
    case ADD_PROJECT_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
    //
    case GET_PROJECTS_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case GET_PROJECTS_SUCCESS: {
      const{projects}=  action.payload.data
     const {projectCount} = action.payload.data
      return {
        ...state,
        requestStatus: "ok",
        projects:projects,
        projectCount
      }
    }
    case GET_PROJECTS_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
    //
      case GET_PROJECT_BY_ID_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case GET_PROJECT_BY_ID_SUCCESS: {
      const {projectById} =  action.payload.data
      return {
        ...state,
        requestStatus: "ok",
        projectById:projectById
      }
    }
    case GET_PROJECT_BY_ID_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
    //
    case UPDATE_PROJECT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case UPDATE_PROJECT_SUCCESS: {
      return {
        ...state,
        requestStatus: "project updated"
      }
    }
    case UPDATE_PROJECT_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
    //
    case DELETE_PROJECT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case DELETE_PROJECT_SUCCESS: {
      return {
        ...state,
        requestStatus: "project deleted"
      }
    }
    case DELETE_PROJECT_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }

    default: {
      return state
    }
  }

}

