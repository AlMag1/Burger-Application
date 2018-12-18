import React from 'react';
import axios from 'axios';
import classes from './OrderList.css';

class OrderList extends React.Component {
    state = {
        orders: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/cb-group-project/api/orders`)   // to be edited with our url
            .then(res => {
                const orders = res.data;
                this.setState({ orders });
            })
    }

    render() {
        return (
            <div className={classes.outer}>
                {this.state.orders.map(order =>
                    <div key={'order-'+order.id} className={classes.orders}>
                        <div><strong>ID: </strong>{order.id}</div>
                        <div><strong>Quantity: </strong>{order.quantity}</div>
                        <div><strong>Date: </strong>{order.date}</div>
                        <div><strong>Price: </strong>{order.price}</div>
                    </div>
                )}
            </div>
        )
    }
}

export default OrderList;