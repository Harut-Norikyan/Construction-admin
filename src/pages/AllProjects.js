import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProject, getProjects} from "../store/actions/projects";
import Pagination from "react-js-pagination";
import {MdDeleteForever, MdUpdate} from "react-icons/md";

class AllProjects extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state={
      activePage: 1,
    }
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
                    {/*<button className="btn btn-info" onClick={()=>this.toAddNewProjects(item.id)}>Обновить</button>*/}
                    <div className="updateProject">
                      <MdUpdate />
                    </div>
                </a>
                </td>
                <td>
                  <div
                    className="deleteProject"
                    onClick={() => this.props.deleteProject(item.id)}
                  >
                    <MdDeleteForever/>
                  </div>

                </td>
              </tr>
            )) : null}
            </tbody>
          </table>
          <div>
            <Pagination
              activePage={activePage}
              totalItemsCount={projectCount?projectCount:10}
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
