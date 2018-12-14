import React, {Component} from 'react';
import classes from './Customer.css';
import {Link} from 'react-router-dom';

class Customer extends Component {
    render() {
        return (
            <div className={classes.employee}>
                <Link to="/order" className={classes.orderButton}>New Order</Link>
                <Link to="/customer-order-list" className={classes.orderButton}>Order History</Link>
            </div>
        );
    }
}

export default Customer;