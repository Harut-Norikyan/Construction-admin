
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from "../actions/users";


const initialstate = {
  requestStatus: '',
  token :'',
  errorLogin:{},
  errorReg :{},
};

export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case ADD_USER_REQUEST:{
      return {
        ...state,
        requestStatus: "request",
      }
    }
    case ADD_USER_SUCCESS:{
      return {
        ...state,
        requestStatus :"OK"
      }
    }
    case ADD_USER_FAIL:{
      const error = action.error
      return {
        ...state,
        requestStatus :"fail",
        errorReg: error
      }
    }
    case LOGIN_USER_REQUEST:{
      return {
        ...state,
        requestStatus: "request",
      }
    }
    case LOGIN_USER_SUCCESS:{
      const {token} = action.payload.data
      if (token){
        localStorage.setItem("token",token)
      }
      return {
        ...state,
        requestStatus :"ok",
        token : token
      }
    }
    case LOGIN_USER_FAIL:{
      const error = action.errors

      return {
        ...state,
        requestStatus :"fail",
        errorLogin: error
      }
    }


    default: {
      return state
    }
  }
}
