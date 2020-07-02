import React, {Component} from 'react'
import {connect} from "react-redux";
// import Wrapper from "../components/Wrapper";
// import {addUser,getUser,updateUser} from "../store/actions/users";
import _ from "lodash";
import memoizeOne from "memoize-one";
import {NotificationContainer} from 'react-notifications';
import {addUser, loginAdmin} from "../store/actions/users";
import {Link, Redirect} from "react-router-dom";
class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName : '',
            email : '',
            password:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = async (ev) => {
        ev.preventDefault();
        localStorage.removeItem("token")
        const { firstName, lastName, email , password} = this.state
        await this.setState({
            user : {firstName, lastName, email , password}
        })
        this.props.addUser(this.state.user)
    };



    render() {
        const {status,error} =this.props
        if (status === "ok"){
                return <Redirect to="/"/>
        }
        console.log(error,"error")
        return (
            <>
            <div className='container container-content offset-3 col-md-6'>
                <div className="page_header text-center">
                    <h3 className="page_title">Sign Up</h3>
                </div>

                <form className="form-horizontal" >
                    <div className="control-group">
                        <label className="control-label" htmlFor="firstName">First Name</label>
                        <div className="controls">
                            <input  name='firstName'
                                    // value={user?.firstName}
                                    onChange={this.handleChange}
                                    className="form-control input-md"
                                    type="text" />
                            <p className="error">{error?.firstName}</p>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label" htmlFor="lastName">Last Name</label>
                        <div className="controls">
                            <input  name='lastName'
                                    onChange={this.handleChange}
                                    className="form-control input-md"
                                    type="text" />
                            <p className="error">{error?.lastName}</p>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label" htmlFor="lastName">Email</label>
                        <div className="controls">
                            <input  name='email'
                                    onChange={this.handleChange}
                                    className="form-control input-md"
                                    type="email" />
                            <p className="error">{error?.email}</p>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label" htmlFor="lastName">Password</label>
                        <div className="controls">
                            <input  name='password'
                                    onChange={this.handleChange}
                                    className="form-control input-md"
                                    type="password" />
                            <p className="error">{error?.password}</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <div className="d-flex justify-content-md-center">
                            <button className="btn btn-success" onClick={this.handleSubmit}>Register</button>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="d-flex justify-content-md-center">
                            <Link style={{marginTop :50}} className="btn btn-success" to="/login">Go to Login </Link>
                        </div>
                    </div>
                </form>
                {/*<NotificationContainer/>*/}
            </div>
            </>
        )

    }

}

const mapStateToProps = (state) => ({
    // singleUser:state.user.singleUser,
    error: state?.users?.errorReg,
    status : state?.users?.requestStatus
    // token:state?.user?.token,
});
const mapDispatchToProps = {
    addUser,
    loginAdmin,
};


const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);

export default Container;
