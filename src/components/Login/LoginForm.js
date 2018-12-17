import React, { Component } from 'react';
import classes from './Login.css';
import axios from 'axios';
import _ from 'lodash';
import { Input } from 'antd';

class LoginForm extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = _.pick(this.state.user, ['username', 'password'])

        axios.post(`https://jsonplaceholder.typicode.com/users`, user)  //  http://localhost:8080/cb-group-project/api/customers
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    usernameChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.username = event.target.value;
        this.setState({ user });
    }

    passwordChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.password = event.target.value;
        this.setState({ user });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={classes.employee}>
                <div>
                    <Input type="text" name="username" id="username" placeholder="Username" className={classes.credentials} onChange={this.usernameChangeHandler} />
                </div>
                <div>
                    <Input type="password" name="password" id="password" placeholder="Password" className={classes.credentials} onChange={this.passwordChangeHandler} />
                </div>
                <div>
                    <input type="submit" className={classes.orderButton} value="Sign in" />
                </div>
            </form>
        );
    }
}

export default LoginForm;