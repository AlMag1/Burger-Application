import React, { Component } from 'react';
import classes from './ViewEditDeleteCustomers.css';
import { Link } from 'react-router-dom';

class EditCustomers extends Component {
    render() {
        return (
            <div className={classes.employee}>
                <button className={classes.orderButton}>Insert Customer</button>
                <Link to="/customer-list" className={classes.orderButton}>View Customers</Link>
                <Link to="delete-customer" className={classes.orderButton}>Delete Customers</Link>
            </div>
        );
    }
}

export default EditCustomers;