import React, {Component} from 'react';
import classes from './Admin.css';

class Admin extends Component {
    render() {
        return (
            <div className={classes.employee}>
                <button className={classes.orderButton}>Customers</button>
                <button className={classes.orderButton}>Order History</button>
            </div>
        );
    }
}

export default Admin;