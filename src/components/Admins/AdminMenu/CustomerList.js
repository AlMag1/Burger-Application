import React from 'react';
import axios from 'axios';

class CustomerList extends React.Component {
    state = {
        customers: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)   // to be edited with our url
            .then(res => {
                const customers = res.data;
                this.setState({ customers });
            })
    }

    render() {
        return (
            <ul>
                {this.state.customers.map(customer =>
                    <li key={'customer-'+customer.id}>
                        <div>{customer.name}</div>
                        <div>Email: {customer.email}</div>
                        <div>id: {customer.id}</div>
                    </li>
                )}
            </ul>
        )
    }
}

export default CustomerList;