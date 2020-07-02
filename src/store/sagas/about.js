import {takeLatest, put, call} from 'redux-saga/effects';
import Api from "../../Api"

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


export default function* watcher() {
  yield takeLatest(ADD_ABOUT_REQUEST, handleAddAbout)
  yield takeLatest(GET_ABOUT_REQUEST, handleGetAbout)
  yield takeLatest(UPDATE_ABOUT_REQUEST, handleUpdateAbout)
}
function* handleUpdateAbout(action) {
  try {
    const {id,data} = action.payload
    const {about} = yield call(Api.updateAbout, id,data)
    yield put({
      type: UPDATE_ABOUT_SUCCESS,
      payload: {about}
    })
  } catch (e) {
    yield put({
      type: UPDATE_ABOUT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}

function* handleAddAbout(action) {
  try {
    const {data} = action.payload
    const about = yield call(Api.addAbout, data)
    yield put({
      type: ADD_ABOUT_SUCCESS,
      payload: about
    })
  } catch (e) {
    yield put({
      type: ADD_ABOUT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}

function* handleGetAbout() {
  try {
    const about = yield call(Api.getAbout)
    yield put({
      type: GET_ABOUT_SUCCESS,
      payload: about
    })
  } catch (e) {
    yield put({
      type: GET_ABOUT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}
