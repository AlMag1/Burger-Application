import React, { Component } from 'react';

import BuildControls from './BuildControls';
import _ from 'lodash';
import axios from 'axios';


const BURGER_PRICES = {
    cheese: 4.5,
    cheesebacon: 3.5,
    tower: 5,
    newyork: 5,
    sweetchili: 4.5,
    mexican: 4
};

class BurgerBuilder extends Component {
    state = {
        burgers: {
            cheesebacon: 0,
            cheese: 0,
            tower: 0,
            newyork: 0,
            sweetchili: 0,
            mexican: 0,
        },
        price: 0,
        purchasable: false
    }


    updatePurchaseState(burgers) {
        const sum = Object.keys(burgers)
            .map(igKey => {
                return burgers[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addBurgerHandler = (type) => {
        const oldCount = this.state.burgers[type];
        const updatedCount = oldCount + 1;
        const updatedBurger = {
            ...this.state.burgers
        };
        updatedBurger[type] = updatedCount;
        const priceAddition = BURGER_PRICES[type];
        const oldPrice = this.state.price;
        const newPrice = oldPrice + priceAddition;
        this.setState({ price: newPrice, burgers: updatedBurger });
        this.updatePurchaseState(updatedBurger);
    }

    removeBurgerHandler = (type) => {
        const oldCount = this.state.burgers[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedBurger = {
            ...this.state.burgers
        };
        updatedBurger[type] = updatedCount;
        const priceDeduction = BURGER_PRICES[type];
        const oldPrice = this.state.price;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ price: newPrice, burgers: updatedBurger });
        this.updatePurchaseState(updatedBurger);
    }

    handleSubmit = event => {
        event.preventDefault();

        const order = _.pickBy(this.state.burgers, item => item !== 0); // remove empty items of the order
        const price = this.state.price;

        axios.post(`http://localhost:8080/cb-group-project/api/orders`, { ...order, price })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        const disabledInfo = {
            ...this.state.burgers
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <BuildControls
                        burgerAdded={this.addBurgerHandler}
                        burgerRemoved={this.removeBurgerHandler}
                        disabled={disabledInfo}
                        price={this.state.price}
                        purchasable={this.state.purchasable}
                    />
                </form>
            </div>
        );
    }
}

export default BurgerBuilder;