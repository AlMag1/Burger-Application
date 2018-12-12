import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../Login/SignIn';
import classes from '../../App.css';

class Header extends Component {

    render() {
        return (
            <div className={classes.header}>
                <SignIn />
                <div className={classes.title}>
                    <h1>
                        - BORN TO GRILL -
                </h1>
                    <p className={classes.subtitle}>Φρέσκα υλικά, σπιτικές συνταγές, μοναδικές γεύσεις!</p>

                </div>
                {window.location.pathname === '/' ? <Link to="/order" className={"ant-btn ant-btn-primary ant-btn-lg"}>ORDER NOW</Link> : null}

            </div>
        );
    }
}

export default Header;