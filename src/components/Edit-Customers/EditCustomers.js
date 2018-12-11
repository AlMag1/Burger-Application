import React, { Component } from 'react';
import classes from './EditCustomers.css';

class EditCustomers extends Component {
    render() {
        return (
            <div className={classes.employee}>
                <button className={classes.orderButton}>Insert Customer</button>
                <button className={classes.orderButton}>View Customers</button>
                <button className={classes.orderButton}>Delete Customers</button>
            </div>
        );
    }
}

export default EditCustomers;