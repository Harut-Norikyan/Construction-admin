import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAIL,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
} from "../actions/contacts"



const initialstate = {
  requestStatus: '',
  contact:{},
};
export default function reducer(state = initialstate, action) {
  switch (action.type) {

    case ADD_CONTACT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case ADD_CONTACT_SUCCESS: {
      return {
        ...state,
        requestStatus: "contact added"
      }
    }
    case ADD_CONTACT_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
    //
    case GET_CONTACT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case GET_CONTACT_SUCCESS: {
      const {contact} = action.payload.data
      return {
        ...state,
        requestStatus: "ok",
        contact:contact
      }
    }
    case GET_CONTACT_FAIL: {
      return {
        ...state,
        requestStatus: "fail"
      }
    }
//
    case UPDATE_CONTACT_REQUEST: {
      return {
        ...state,
        requestStatus: "request"
      }
    }
    case UPDATE_CONTACT_SUCCESS: {
      return {
        ...state,
        requestStatus: "contact updated",
      }
    }
    case UPDATE_CONTACT_FAIL: {
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

