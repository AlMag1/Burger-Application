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
                    <li key={'order-'+order.id}>
                        <div>{order.name}</div>
                        <div>{order.email}</div>
                        <div>id:{order.id}</div>
                    </li>
                )}
            </ul>
        )
    }
}

export default OrderList;