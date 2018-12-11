import React, { Component } from 'react';

import classes from './Header.css';
import Burger from '../../assets/img/burger.jpg'
import Burger2 from '../../assets/img/burger2.jpg';
import Burger3 from '../../assets/img/burger3.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={Burger} alt="A burger"></img>
                <img src={Burger2} alt="A burger"></img>
                <img src={Burger3} alt="A burger"></img>
                <p className={classes.description}> - BORN TO GRILL - </p>
                <p className={classes.description}>Φρέσκα υλικά, σπιτικές συνταγές, μοναδικές γεύσεις!</p>
            </div>
        );
    }
}

export default Home;