import { combineReducers } from 'redux';
import users from "./users"
import projects from "./projects"
import about from "./about"
import contacts from "./contacts"

export default combineReducers({
  users,
  projects,
  about,
  contacts
});
