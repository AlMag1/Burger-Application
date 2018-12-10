import React, { Component } from 'react';
import classes from '../App.css';

class LoginForm extends Component {
    render() {
        return (
            <form method="POST" >
                <div>
                    <input type="text" name="username" placeholder="Username" className={classes.credentials}></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" className={classes.credentials}></input>
                </div>
                <div>
                    <input type="submit" className={classes.sign} value="Sign in" />
                    <button className={classes.sign}>Sign up</button>
                </div>
            </form>
        );
    }
}

export default LoginForm;