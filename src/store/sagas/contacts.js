import {takeLatest, put, call} from 'redux-saga/effects';
import Api from "../../Api"

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


export default function* watcher() {
  yield takeLatest(ADD_CONTACT_REQUEST, handleAddContact)
  yield takeLatest(GET_CONTACT_REQUEST, handleGetContact)
  yield takeLatest(UPDATE_CONTACT_REQUEST, handleUpdateContact)
}

function* handleUpdateContact(action) {
  try {
    const {id, data} = action.payload
    const {contact} = yield call(Api.updateContact, id, data)
    yield put({
      type: UPDATE_CONTACT_SUCCESS,
      payload: {contact}
    })
  } catch (e) {
    yield put({
      type: UPDATE_CONTACT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}

function* handleAddContact(action) {
  try {
    const {data} = action.payload
    const contact = yield call(Api.addContact, data)
    yield put({
      type: ADD_CONTACT_SUCCESS,
      payload: contact
    })
  } catch (e) {
    yield put({
      type: ADD_CONTACT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}

function* handleGetContact() {
  try {
    const contact = yield call(Api.getContact)
    yield put({
      type: GET_CONTACT_SUCCESS,
      payload: contact
    })
  } catch (e) {
    yield put({
      type: GET_CONTACT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}
