import {takeLatest, put, call} from 'redux-saga/effects';
import Api from "../../Api"
import {
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
} from "../actions/projects"


export default function* watcher() {
  yield takeLatest(ADD_PROJECT_REQUEST, handleAddProject)
  yield takeLatest(GET_PROJECTS_REQUEST, handleGetProjects)
  yield takeLatest(GET_PROJECT_BY_ID_REQUEST, handleGetProjectById)
  yield takeLatest(UPDATE_PROJECT_REQUEST, handleUpdateProject)
  yield takeLatest(DELETE_PROJECT_REQUEST, handleDeleteProject)
}


function* handleDeleteProject(action) {
  try {
    const {id} = action.payload
    const project = yield call(Api.deleteProject, id)
    yield put({
      type: DELETE_PROJECT_SUCCESS,
      payload: project
    })
  } catch (e) {
    yield put({
      type: DELETE_PROJECT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}

function* handleUpdateProject(action) {
  try {
    const {id, data} = action.payload
    const {project} = yield call(Api.updateProject, id, data)
    yield put({
      type: UPDATE_PROJECT_SUCCESS,
      payload: {project}
    })
  } catch (e) {
    yield put({
      type: UPDATE_PROJECT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}

function* handleGetProjectById(action) {
  try {
    const {id} = action.payload
    const projectById = yield call(Api.getProjectById, id)
    yield put({
      type: GET_PROJECT_BY_ID_SUCCESS,
      payload: projectById
    })
  } catch (e) {
    yield put({
      type: GET_PROJECT_BY_ID_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}

function* handleAddProject(action) {
  try {
    const {data} = action.payload
    const {project} = yield call(Api.addProject, data)
    yield put({
      type: ADD_PROJECT_SUCCESS,
      payload: {project}
    })
  } catch (e) {
    yield put({
      type: ADD_PROJECT_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}

function* handleGetProjects(action) {
  try {
    const activePage=action.payload;
    const projects = yield call(Api.getProjects,activePage)
    yield put({
      type: GET_PROJECTS_SUCCESS,
      payload: projects
    })
  } catch (e) {
    yield put({
      type: GET_PROJECTS_FAIL,
      message: e?.message,
      error: e?.response?.data?.errors,
    })
  }
}


