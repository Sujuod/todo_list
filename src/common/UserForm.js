import React from 'react';
import { Button } from 'react-bootstrap';
export class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false
        }

    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = () => {
        const { email, password } = this.state;
        this.setState({
            submitted: true
        })
        if (email && password) {
            this.props.submit(email, password);
        }
    }
    render() {
        const { email, password, submitted } = this.state;
        return (
            <div>
                <span className="user-form-title" >{this.props.type}</span>
                < div className="form-container" >
                    <form>
                        <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                            <input type="email" name="email" value={email}
                                className="form-control"
                                placeholder="Email"
                                onChange={this.handleChange} />
                            {submitted && !email &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <input type="password" name="password" value={password}
                                className="form-control"
                                onChange={this.handleChange}
                                placeholder="Password" />
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className="form-group btn-container">
                            <Button variant="warning" onClick={this.onFormSubmit}>{this.props.type}</Button>
                        </div>
                    </form>
                </div >
            </div >
        )
    }
}