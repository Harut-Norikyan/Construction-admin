import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";




class LeftSideBar extends Component {
  static propTypes = {};
  state={
    sideBar:'',
    // sideBarClose:'',
  }
  openSideBar=()=>{
    this.setState({
      sideBar:'open'
    })
  }
  closeSideBar=()=>{
    this.setState({
      sideBar:'close'
    })
  }

  render() {
    let{ sideBar } =this.state
    return(
      <div className="containerLeftSideBar">
        <div id={`${sideBar}`} className="sidenav">
          <span className="closeSideBar" onClick={this.closeSideBar}><IoIosCloseCircleOutline/></span>
          <Link to="/" onClick={this.closeSideBar}>Главная</Link>
          <Link to="/all-projects" onClick={this.closeSideBar}>Все проекты</Link>
          <a href="/add-new-project" onClick={this.closeSideBar}>Добавить новый проект</a>
          <Link to="/about" onClick={this.closeSideBar}>О нас</Link>
          <Link to="/contacts" onClick={this.closeSideBar}>Контакты</Link>
        </div>
        <span className="menu" onClick={this.openSideBar}><IoIosMenu /></span>
      </div>

    )
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeftSideBar);

export default Container;
