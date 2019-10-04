import React from 'react';
import { Link } from 'react-router-dom';
import { loginAPI } from '../../APIs/auth.apis';
import { UserForm } from '../../common/UserForm';
import { notify } from '../../common/notify/Notify.service';
import { Notify } from '../../common/notify/Notify';

export class Login extends React.Component {
    handleSubmit = (email, password) => {
        loginAPI({ email, password }).then(response => {
            if (response.data.error) {
                notify.show(response.data.message, 'danger');
            } else {
                // save token to session:
                sessionStorage.setItem("token", response.data.token)
                this.props.history.push('/list');
            }
        })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="wrapper-login">
                <div className="app-heading">Your Task Manager</div>
                <Notify />
                <UserForm type="Login" submit={this.handleSubmit} />
                <span className="center" ><Link to="/register" >Register New Account</Link></span>
            </div>
        );
    }
}