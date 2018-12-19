import React from 'react';
import axios from 'axios';
import classes from './OrderList.css';
import {Link} from 'react-router-dom';

class OrderList extends React.Component {
    state = {
        orders: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/cb-group-project/api/orders`)
            .then(res => {
                const orders = res.data;
                this.setState({ orders });
            })
    }

    render() {
        return (
            <div className={classes.outer}>
                <p className={classes.title}><strong>Order History:</strong></p>
                {this.state.orders.map(order =>
                    <div key={'order-' + order.id} className={classes.orders}>
                        <div><strong>ID: </strong>{order.id}</div>
                        <div><strong>Date: </strong>{order.date}</div>
                        <div><strong>Price: </strong>{order.price}</div>
                    </div>

                )}
                <Link to="/admin" className="ant-btn ant-btn-primary ant-btn-sm" style={{ margin: "20px" }}>Back</Link>
            </div>

        )
    }
}

export default OrderList;