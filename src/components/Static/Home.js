import React, { Component } from 'react';

import Burger from '../../assets/img/burger.jpg'
import Burger2 from '../../assets/img/burger2.jpg';
import Burger3 from '../../assets/img/burger3.jpg';
import classes from '../../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={Burger} alt="A burger" className={classes.img}></img>
                <img src={Burger2} alt="A burger" className={classes.img}></img>
                <img src={Burger3} alt="A burger" className={classes.img}></img>
            </div>
        );
    }
}

export default Home;