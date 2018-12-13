import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from './CustomerList.css';

class CustomerList extends React.Component {
    state = {
        customers: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/cb-group-project/api/customers`)   // to be edited with our url
            .then(res => {
                const customers = res.data;
                this.setState({ customers });
            })
    }

    render() {
        return (
            <div className={classes.div}>
                <p><strong>Customer List:</strong></p>
                {this.state.customers.map(customer =>
                    <div key={'customer-' + customer.id}>
                        <div><strong>First Name:</strong> {customer.firstName}</div>
                        <div><strong>Last Name:</strong> {customer.lastName}</div>
                        <div><strong>id:</strong> {customer.id}</div>
                    </div>
                )}
                <Link to="/admin-menu" style={{ margin: "20px" }} className="ant-btn ant-btn-primary ant-btn-sm" >Back</Link>
            </div>

        )
    }
}

export default CustomerList;