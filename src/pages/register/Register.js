import React from 'react';
import { Link } from 'react-router-dom';
import { registerAPI } from '../../APIs/auth.apis';
import { UserForm } from '../../common/UserForm';
import { notify } from '../../common/notify/Notify.service';


export class Register extends React.Component {

    handleSubmit = (email, password) => {
        registerAPI({ email, password }).then(response => {
            if (response.data.error) {
                notify.show(response.data.message);
            } else {
                this.props.history.push('/login');
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
                <UserForm type="Register" submit={this.handleSubmit} />
                <span className="center" ><Link to="/login" >Cancel</Link></span>
            </div>
        );
    }
}