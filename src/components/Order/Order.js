import React, { Component } from 'react';
import BurgerBuilder from '../BurgerOrder/BurgerBuilder';
import Menu from './Menu';

class Order extends Component {
    render() {
        return (
            <BurgerBuilder />
        );
    }
}

export default Order;