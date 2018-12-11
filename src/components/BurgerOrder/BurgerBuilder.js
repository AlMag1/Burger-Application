import React, { Component } from 'react';

import BuildControls from './BuildControls';


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
            cheese: 0,
            newyork: 0,
            cheesebacon: 0,
            tower: 0,
            sweetchili: 0,
            mexican: 0
        },
        totalPrice: 0,
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
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, burgers: updatedBurger });
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
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, burgers: updatedBurger });
        this.updatePurchaseState(updatedBurger);
    }


    render() {
        const disabledInfo = {
            ...this.state.burgers
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        console.log(this.state.totalPrice);  // total price to be posted to backend
        console.log(this.state.burgers); // order details to be posted to backend

        return (
            <div>
                <BuildControls
                    burgerAdded={this.addBurgerHandler}
                    burgerRemoved={this.removeBurgerHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable} />
            </div>
        );
    }
}

export default BurgerBuilder;