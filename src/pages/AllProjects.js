import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProject, getProjects} from "../store/actions/projects";
import {Link, Redirect} from "react-router-dom";
import Pagination from "react-js-pagination";
import ReactDOM from "react-dom";
// require("bootstrap/less/bootstrap.less");
class AllProjects extends Component {
  static propTypes = {};

  state={
    activePage: 1,
  }

  componentDidMount() {
    this.props.getProjects(this.state.activePage)
  }

  handlePageChange=async (e)=> {
   await this.setState({activePage: parseInt(e)});
    this.props.getProjects(this.state.activePage);
  };


  render() {
    let {projects,projectCount} = this.props
    let{activePage} = this.state
    if (this.props.delete === "project deleted") {
      window.location.reload()
    }
    return (
      <>
        <h1>Все проекты</h1>
        <div className="table-responsive col-xl-9 col-lg-9">
          <table className="table table-striped">
            <thead className="thead-light">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Обновить</th>
              <th>Удалить</th>

            </tr>
            </thead>
            <tbody>
            {projects ? projects.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <a href={`/add-new-project/${item.id}`}>
                    <button className="btn btn-info" onClick={()=>this.toAddNewProjects(item.id)}>Обновить</button>
                </a>
                </td>
                <td>
                  <button className="btn btn-danger"
                          onClick={() => this.props.deleteProject(item.id)}>Удалить
                  </button>
                </td>
              </tr>
            )) : null}
            </tbody>
          </table>
          <div>
            <Pagination
              activePage={activePage}
              totalItemsCount={projectCount}
              onChange={this.handlePageChange}
            />
          </div>
        </div>

      </>
    )
  }
}


const mapStateToProps = (state) => ({
  projects: state.projects.projects,
  delete: state.projects.requestStatus,
  projectCount:state.projects.projectCount
});

const mapDispatchToProps = {
  getProjects,
  deleteProject
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllProjects);

export default Container;
