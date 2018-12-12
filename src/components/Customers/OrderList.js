import React from 'react';
import axios from 'axios';

class OrderList extends React.Component {
    state = {
        orders: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)   // to be edited with our url
            .then(res => {
                const orders = res.data;
                this.setState({ orders });
            })
    }

    render() {
        return (
            <ul>
                {this.state.orders.map(order =>
                    <li>
                        <div>{order.name}</div>
                        <div>{order.email}</div>
                        <div><span>id:</span>{order.id}</div>
                    </li>
                )}
            </ul>
        )
    }
}

export default OrderList;