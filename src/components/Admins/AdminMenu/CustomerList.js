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
                {this.state.customers.map(person =>
                    <li>
                        <div>{person.name}</div>
                        <div>{person.email}</div>
                        <div><span>id:</span>{person.id}</div>
                    </li>
                )}
            </ul>
        )
    }
}

export default CustomerList;