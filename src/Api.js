import axios from 'axios';
import { objectToFormData } from 'object-to-formdata';

// const API_URL ='http://localhost:4000';
const API_URL = 1 ? 'http://localhost:4000' : 'https://online-shop.am';

const api = axios.create({
  baseURL: API_URL,
});

class Api {
  static url = API_URL;

  static createUser(data) {
    return api.post('/users/add', data);
  }

  static login(email,password) {
    return api.post('/users/login', {email, password});
  }

  //

  static addProject(data) {
    const formData = objectToFormData(
      data,
    );
    return api.post('/projects', formData);
  }

  static updateProject(id,data) {
    const formData = objectToFormData(
      data,
    );
    return api.put(`/projects/${id}`, formData);
  }

  static getProjects(activePage) {
    return api.get(`/projects/${activePage}`);
  }

  static getProjectById(id) {
    return api.get(`/projects/projectById/${id}`);
  }

  static deleteProject(id) {
    return api.delete(`/projects/${id}`);
  }

  //

  static addAbout(data) {
    const formData = objectToFormData(
      data,
    );
    return api.post('/about/add', formData);
  }

  static updateAbout(id,data) {
    const formData = objectToFormData(
      data,
    );
    return api.put(`/about/${id}`, formData);
  }

  static getAbout() {
    return api.get('/about');
  }

  //

  static addContact(data){
    return api.post("/contacts/add", data)
  }
  static getContact(){
    return api.get("/contacts")
  }
  static updateContact(id,data) {
    return api.put(`/contacts/${id}`, data);
  }











  // static addPhotos(data) {
  //   const formData = objectToFormData(
  //     data,
  //   );
  //   return api.post('/photos', formData);
  // }
}
export default Api;
