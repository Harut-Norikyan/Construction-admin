import { all, fork } from 'redux-saga/effects';
import users from "./users";
import projects from "./projects";
import about from "./about";
import contacts from "./contacts";

export default function* watchers() {
  yield all([
    fork(users),
    fork(projects),
    fork(about),
    fork(contacts),
  ])
}
