import React, {Component} from 'react';
import classes from '../App.css';

class Customer extends Component {
    render() {
        return (
            <div className={classes.employee}>
                <button className={classes.orderButton}>New Order</button>
                <button className={classes.orderButton}>Order History</button>
            </div>
        );
    }
}

export default Customer;