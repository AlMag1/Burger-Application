import React, { Component } from 'react';
import classes from './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className={classes.footer}>
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
            </div>
        );
    }
}

export default Footer;