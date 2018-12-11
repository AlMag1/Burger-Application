import React, { Component } from 'react';
import classes from '../App.css';

class SignIn extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="submit" className={classes.sign} value="Sign in" />
                    <button className={classes.sign}>Sign up</button>
                </div>
            </div>
        );
    }
}

export default SignIn;