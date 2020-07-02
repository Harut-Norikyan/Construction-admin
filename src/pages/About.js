import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addAbout, getAbout, updateAbout} from "../store/actions/about";
import {NotificationContainer, NotificationManager} from "react-notifications";
import {Redirect} from "react-router-dom";

class About extends Component {
  static propTypes = {};

  state = {
    title: '',
    desc: '',
    longDesc:'',
    arr: []
  }

  async componentDidMount() {
    await this.props.getAbout();
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
    let {title, desc,longDesc, arr} = this.state
    let {about} = this.props
    if (about) {
      if (title !== about.title && title !== "") {
        await this.setState({
          title
        })
      } else {
        await this.setState({
          title: about.title
        })
      }
      if (desc !== about.desc && desc !== "") {
        await this.setState({
          desc
        })
      } else {
        await this.setState({
          desc: about.desc
        })
      }
      if (longDesc !== about.longDesc && longDesc !== "") {
        await this.setState({
          longDesc
        })
      } else {
        await this.setState({
          longDesc: about.longDesc
        })
      }
      await this.setState({
        data: {
          title: this.state.title,
          desc: this.state.desc,
          longDesc: this.state.longDesc,
          arr
        }
      })
      this.props.updateAbout(about.id, this.state.data)
      console.log(this.state.data)
    } else {
      await this.setState({
        data: {
          title,
          desc,
          longDesc,
          arr
        }
      })
      this.props.addAbout(this.state.data)
    }
  }

  render() {
    if (this.props.status === "about added"){
      if (NotificationManager.listNotify.length < 1) {
        NotificationManager.success('Проект успешно обновлён!', null, 2000, () => {
        });
      }
    }
    if (this.props.status === "about updated"){
      if (NotificationManager.listNotify.length < 1) {
        NotificationManager.success('Проект успешно обновлён!', null, 2000, () => {
        });
      }
    }
    if (this.props.status === "fail"){
      if (NotificationManager.listNotify.length < 1) {
        NotificationManager.error('Не удалось обновить данные!', null, 2000, () => {
        });
      }
      setTimeout(function () {
        window.location.reload()
      },2000)
    }
    if (
      this.props.status === "about added" ||
      this.props.status === "about updated" ||
      this.props.status === "fail"
    ) {
      setTimeout(function () {
        window.location.reload()
      }, 1500)
    }
    let {arr} = this.state
    let {about} = this.props
    return (
      <>
        <NotificationContainer/>
        <h2>{!about ?'О нас' : "Обновить данные \"О нас\""}</h2>
        <form onSubmit={this.handleSubmit} className="form">
          <p>
            <input
              id="title"
              type="text"
              defaultValue={about ? about.title : ""}
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
              defaultValue={about ? about.desc : ""}
              placeholder="Short Desc"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="lastName">Short Desc</label>
          </p>
          <p>
            <textarea
              id="longDesc"
              name="longDesc"
              defaultValue={about ? about.longDesc : ""}
              placeholder="Long Desc"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="lastName">Long Desc</label>
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
            {!about?
              <input className="submit" type="submit" value="Add"/>
              :
              <input className="submit" type="submit" value="Update"/>
            }
          </p>
        </form>

      </>
    )
  }
}


const mapStateToProps = (state) => ({
  about: state.about.about,
  status: state.about.requestStatus
});

const mapDispatchToProps = {
  addAbout,
  getAbout,
  updateAbout
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);

export default Container;
