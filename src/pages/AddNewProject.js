import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {Field, Form, reduxForm, SubmissionError} from 'redux-form';
import Input from "../components/Input";
import memoizeOne from "memoize-one";
import _ from "lodash";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css'
import {addProject, getProjectById, updateProject} from "../store/actions/projects";
import LeftSideBar from "../components/LeftSideBar";


class AddNewProject extends Component {
  static propTypes = {};
  state = {
    title: '',
    desc: '',
    arr: [],
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleChangeFile = async (e) => {
    let images = e.target?.files[0]
    let {arr} = this.state
    if (arr.length < 10) {
      arr.push(images)
      this.setState({
        images: ''
      })
    }
  };


  handleSubmit = async (ev) => {
    ev.preventDefault()
    let {title, desc, arr} = this.state
    await this.setState({
      data: {
        title,
        desc,
        arr
      }
    })
    // if (this.props.match.params.id) {
    //   let {id} = this.props.match.params
    //   this.props.updateProject(id, this.state.data)
    // } else {
    //   this.props.addProject(this.state.data)
    // }
    console.log(this.state.data)
  }


  async componentDidMount() {
    const {id} = this.props.match.params
    if (id) {
      await this.props.getProjectById(id)
    }
  }


  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/sign-up"/>
    }
    if (this.props.status === "added project") {
      if (NotificationManager.listNotify.length < 1) {
        NotificationManager.success('Проект успешно добавлен!', null, 2000, () => {
        });
      }
      setTimeout(function () {
        window.location.reload()
      },2000)
    }
    if (this.props.status === "fail") {
      if (NotificationManager.listNotify.length < 1) {
        NotificationManager.error('Не удалось добавить проект!', null, 2000, () => {
        });
      }
    }
    if (this.props.statusUpdate === "project updated") {
      if (NotificationManager.listNotify.length < 1) {
        NotificationManager.success('Проект успешно обновлён!', null, 2000, () => {
        });
      }
      return <Redirect to="/all-projects"/>
    }
    if (this.props.match.params.id && this.props.status === "fail") {
      if (NotificationManager.listNotify.length < 1) {
        NotificationManager.error('Не удалось обновить проект!', null, 2000, () => {
        });
      }
    }

    const {projectById} = this.props;
    const {arr} = this.state
    return (
      <>
        {/*<LeftSideBar/>*/}
        <NotificationContainer/>
        <h2>{!this.props.match.params.id ? "Добавить новый проект" : "Обновить проект"}</h2>
        <form onSubmit={this.handleSubmit} className="form">
          {projectById?()=>this.setState({title:projectById.title}):null}
          <p>
            <input
              id="title"
              type="text"
              defaultValue={projectById ? projectById.title : ""}
              name="title"
              placeholder="Title"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="firstName">Title</label>
          </p>
          <p>
            <textarea
              id="desc"
              name="desc"
              defaultValue={projectById ? projectById.desc : ""}
              placeholder="Описание"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="lastName">Описание</label>
          </p>
          <p>
            <input
              required
              multiple
              style={{height: 50, width: 300, float: 'left'}}
              id="img"
              name="img"
              type="file"
              placeholder="Images"
              onChange={this.handleChangeFile}
            />
            <span style={{float: "left"}}>{arr.length ? arr.length : 0}</span>
            <br/>
            <label htmlFor="images">Images</label>
          </p>
          <p>

            <input className="submit" type="submit" value="Add"/>
          </p>
        </form>

      </>
    )
  }
}


const mapStateToProps = (state) => ({
  status: state.projects.requestStatus,
  projectById: state.projects.projectById,
  statusUpdate: state.projects.requestStatus,
});

const mapDispatchToProps = {
  addProject,
  getProjectById,
  updateProject
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNewProject);

export default Container;

