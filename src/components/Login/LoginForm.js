import React, { Component } from 'react';
import classes from './Login.css';
import { Form, Icon, Input, Button, } from 'antd';

class LoginForm extends Component {
    render() {
        return (
            <form className={classes.employee}>
                <div>
                    <input type="text" name="username" placeholder="Username" className={classes.credentials}></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" className={classes.credentials}></input>
                </div>
                <div>
                    <input type="submit" className={classes.orderButton} value="Sign in" />
                </div>
            </form>
        );
    }
}

export default LoginForm;