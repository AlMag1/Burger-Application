import React, {Component} from 'react';
import classes from './Admin.css';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

class Admin extends Component {
    
    render() {
        return (
            <div className={classes.employee}>
            <Button type="primary">Aris</Button>
                <Link to="/customer-list" className={classes.orderButton}>Customers</Link>
                <Link to="/admin-order-list" className={classes.orderButton}>Order History</Link>
            </div>
        );
    }
}

export default Admin;