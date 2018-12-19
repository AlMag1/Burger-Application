import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from './CustomerList.css';

class CustomerList extends React.Component {
    state = {
        customers: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/cb-group-project/api/customers`)
            .then(res => {
                const customers = res.data;
                this.setState({ customers });
            })
    }

    render() {
        return (
            <div className={classes.outer}>
                <p className={classes.title}><strong>Customer List:</strong></p>
                {this.state.customers.map(customer =>
                    <div key={'customer-' + customer.id} className={classes.customers}>
                        <div><strong>ID:</strong> {customer.id}</div>
                        <div><strong>First Name:</strong> {customer.firstName}</div>
                        <div><strong>Last Name:</strong> {customer.lastName}</div>
                        <div><strong>Username:</strong> {customer.username}</div>
                        <div><strong>Address:</strong> {customer.address}</div>
                        <div><strong>Floor:</strong> {customer.floor}</div>
                        <div><strong>Postal Code:</strong> {customer.postalCode}</div>
                        <div><strong>Phone:</strong> {customer.phone}</div>
                        <div><strong>Email:</strong> {customer.email}</div>
                    </div>
                )}
                <Link to="/admin-menu" style={{ margin: "20px" }} className="ant-btn ant-btn-primary ant-btn-sm" >Back</Link>
            </div>

        )
    }
}

export default CustomerList;