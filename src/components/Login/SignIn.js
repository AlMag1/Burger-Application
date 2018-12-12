import React, { Component } from 'react';
import classes from './SignIn.css';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    render() {
        return (
            <div>
                <div style={{textAlign: "right"}}>
                    <Link to="/login" className={classes.sign}>Sign in</Link>
                    <Link to="/signup" className={classes.sign}>Sign up</Link>
                </div>
            </div>
        );
    }
}

export default SignIn;