import {takeLatest, put, call} from 'redux-saga/effects';
import Api from "../../Api"


import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from "../actions/users";




export default function* watcher() {
  yield takeLatest(ADD_USER_REQUEST, handleAddUser)
  yield takeLatest(LOGIN_USER_REQUEST, handleLoginUser)
}

function* handleAddUser(action) {
  try {
    const data = action.payload
    const user = yield call(Api.createUser, data)
    yield put({
      type : ADD_USER_SUCCESS,
      payload : user
    })
    const admin = yield call(Api.login, data.email, data.password)
    yield put({
      type : LOGIN_USER_SUCCESS,
      payload : admin
    })

  } catch (e) {
    yield put({
      type: ADD_USER_FAIL,
      message: e.message,
      error: e.response.data?.errors,
    })
  }
  }

function* handleLoginUser(action) {
  try {
    const {email,password} = action.payload
    const admin = yield call(Api.login, email, password)
    yield put({
      type : LOGIN_USER_SUCCESS,
      payload : admin
    })
  } catch (e) {
    yield put({
      type: LOGIN_USER_FAIL,
      message: e.message,
      errors: e.response.data?.errors,
    })
  }
}

