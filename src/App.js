import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import AddNewProject from "./pages/AddNewProject";
import LeftSideBar from "./components/LeftSideBar";
import AllProjects from "./pages/AllProjects";
import About from "./pages/About";
import Contacts from "./pages/Contacts";


class App extends Component {
  render() {
    const token = localStorage.getItem("token")
    return (
      <BrowserRouter>
        {token?<LeftSideBar/>:null}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/sign-up" component={RegistrationForm}/>
          <Route path="/add-new-project/:id" component={AddNewProject}/>
          <Route path="/add-new-project" component={AddNewProject}/>
          <Route path="/all-projects" component={AllProjects}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
