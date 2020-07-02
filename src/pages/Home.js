import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

class Home extends Component {
  static propTypes = {};

  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/sign-up"/>
    }
    return (
      <h1>Home</h1>
    )
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Container;
