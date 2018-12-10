import React, { Component } from 'react';
import classes from '../App.css';

class Employee extends Component  {

    render() {
        return(
            <div className={classes.employee}>
                <button className={classes.orderButton}>Current Orders</button>
                <button className={classes.orderButton}>Order History</button>
            </div>
        );
    }
}

export default Employee;