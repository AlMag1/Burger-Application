import React, { Component } from 'react';
import classes from '../App.css';

class Footer extends Component {
    render() {
        return (
            <footer className={classes.footer}>
                <p className={classes.contact}>
                    <strong>Contact details</strong>
                </p>
                <p>
                    <strong>Address:</strong> 25 Nafpliou Str. Vouliagmeni, Greece
          </p>
                <p>
                    <strong>Phone:</strong> +30 2102201234
          </p>
                <p>
                    <strong>Email:</strong> contact@burgerhub.com
          </p>
            </footer>
        );
    }
}

export default Footer;