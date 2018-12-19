import React, { Component } from 'react';
import classes from './ViewEditDeleteCustomers.css';
import { Link } from 'react-router-dom';

class EditCustomers extends Component {
    render() {
        return (
            <div className={classes.customer}>
                <Link to="/signup" className={classes.customerButton}>Insert Customer</Link>
                <Link to="/customer-list" className={classes.customerButton}>View Customers</Link>
                <Link to="/admin" className={classes.customerButton}>Back</Link>
            </div>
        );
    }
}

export default EditCustomers;