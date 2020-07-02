import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addAbout, getAbout, updateAbout} from "../store/actions/about";
import {NotificationContainer, NotificationManager} from "react-notifications";
import {Redirect} from "react-router-dom";
import {addContact, getContact, updateContact} from "../store/actions/contacts";

class Contacts extends Component {
  static propTypes = {};

  state = {
    phone: '',
    address: '',
  }

  async componentDidMount() {
    await this.props.getContact();
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  // handleChangeFile = async (e) => {
  //   let images = e.target?.files[0]
  //   let {arr} = this.state
  //   if (arr.length < 10) {
  //     arr.push(images)
  //     this.setState({
  //       images: ''
  //     })
  //   }
  // };


  handleSubmit = async (ev) => {
    ev.preventDefault()
    let {phone, address} = this.state
    let {contact} = this.props
    if (contact) {
      if (phone !== contact.phone && phone !== "") {
        await this.setState({
          phone
        })
      } else {
        await this.setState({
          phone: contact.phone
        })
      }
      if (address !== contact.address && address !== "") {
        await this.setState({
          address
        })
      } else {
        await this.setState({
          address: contact.address
        })
      }
      await this.setState({
        data: {
          phone: this.state.phone,
          address: this.state.address,
        }
      })
      this.props.updateContact(contact.id, this.state.data)
    } else {
      await this.setState({
        data: {
          phone,
          address,
        }
      })
      this.props.addContact(this.state.data)
      console.log(this.state.data)
    }
  }

  render() {
    if (this.props.status === "contact updated") {
      if (NotificationManager.listNotify.length < 1) {
        NotificationManager.success('Контакт успешно обновлен!', null, 2000, () => {
        });
      }
    }
    if (this.props.status === "fail") {
      if (NotificationManager.listNotify.length < 1) {
        NotificationManager.error('Не удалось обновить контакт!', null, 2000, () => {
        });
      }
    }
    if (
      this.props.status === "contact added" ||
      this.props.status === "contact updated" ||
      this.props.status === "fail"
    ) {
      setTimeout(function () {
        window.location.reload()
      }, 1500)
    }

    let {contact} = this.props
    return (
      <>
        <NotificationContainer/>
        <h2>{!contact ? 'Контакты' : "Обновить данные \"Контакты\""}</h2>
        <form onSubmit={this.handleSubmit} className="form">
          <p>
            <input
              id="phone"
              type="text"
              defaultValue={contact ? contact.phone : ""}
              name="phone"
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="firstName">Phone</label>
          </p>
          <p>
            <input
              id="address"
              type="text"
              defaultValue={contact ? contact.address : ""}
              name="address"
              placeholder="Address"
              onChange={this.handleChange}
            />
            <br/>
            <label htmlFor="firstName">Address</label>
          </p>
          <p>
            {!contact ?
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
  contact: state.contacts.contact,
  status: state.contacts.requestStatus
});

const mapDispatchToProps = {
  addContact,
  getContact,
  updateContact
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contacts);

export default Container;
