import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Logout extends Component {
    logout = () => {
        sessionStorage.removeItem("token")
    }
    render() {
        return (
            <Link to="/login" onClick={this.logout}>Logout</Link>
        )
    }
}