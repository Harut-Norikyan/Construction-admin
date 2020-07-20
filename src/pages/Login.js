import React, {Component} from 'react'
import {connect} from "react-redux";
// import {checkUser} from "../store/actions/users";
import {loginAdmin} from "../store/actions/users";
import {Link, Redirect} from "react-router-dom";

// import {Redirect} from "react-router";
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password :""
        }
    }

    handleChange = (e) => {
       this.setState({
         [e.target.name] : e.target.value
       })
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.loginAdmin(this.state.email,this.state.password)
    };

    render() {
        const {errors,status}=this.props;

        if (status === "ok"){
            return <Redirect to="/"/>
        }
        return (
                <div className='container container-content offset-4 col-md-3'>
                    <div className="page_header text-center">
                        <p className="error">{errors?.error}</p>
                        <h3 className="page_title">Sign In</h3>
                    </div>
                    <form className="form-horizontal" >
                        <div className="control-group">
                            <label className="control-label" htmlFor="firstName">Email</label>
                            <div className="controls">
                                <input  name='email'
                                        onChange={this.handleChange}
                                        className="form-control input-md"
                                        type="email" />
                                <p className="error">{errors?.email}</p>

                            </div>
                        </div>
                        <div className="control-group">
                            <label className="control-label" htmlFor="lastName">Password</label>
                            <div className="controls">
                                <input  name='password'
                                        onChange={this.handleChange}
                                        className="form-control input-md"
                                        type="password" />
                                <p className="error">{errors?.password}</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <div className="controls">
                                <button className="btn btn-success" onClick={this.handleSubmit}>Log in</button>
                            </div>
                        </div>
                                <Link style={{marginTop :50,float : "left"}} className="btn btn-success" to="/sign-up">Go to Registration</Link>
                    </form>
                </div>
        )

    }

}

const mapStateToProps = (state) => ({
    token:state?.user?.token,
    errors:state?.users?.errorLogin,
    status :state?.users?.requestStatus
});
const mapDispatchToProps = {
    loginAdmin
};


const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default Container;
