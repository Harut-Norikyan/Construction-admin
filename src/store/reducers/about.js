import {
  ADD_ABOUT_REQUEST,
  ADD_ABOUT_SUCCESS,
  ADD_ABOUT_FAIL,
  GET_ABOUT_REQUEST,
  GET_ABOUT_SUCCESS,
  GET_ABOUT_FAIL,
  UPDATE_ABOUT_REQUEST,
  UPDATE_ABOUT_SUCCESS,
  UPDATE_ABOUT_FAIL,
} from "../actions/about"



const initialstate = {
  requestStatus: '',
  about:[],
};
export default function reducer(state = initialstate, action) {
  switch (action.type) {

    case ADD_ABOUT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case ADD_ABOUT_SUCCESS: {
      return {
        ...state,
        requestStatus: "about added"
      }
    }
    case ADD_ABOUT_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
    //
    case GET_ABOUT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case GET_ABOUT_SUCCESS: {
      const{about}=  action.payload.data
      return {
        ...state,
        requestStatus: "ok",
        about: about
      }
    }
    case GET_ABOUT_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
//
    case UPDATE_ABOUT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case UPDATE_ABOUT_SUCCESS: {
      return {
        ...state,
        requestStatus: "about updated",
      }
    }
    case UPDATE_ABOUT_FAIL: {
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

