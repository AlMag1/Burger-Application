import React, { Component } from 'react';
import classes from './Order.css';
import {Card, Icon} from 'antd';

import Burger1 from '../../assets/img/Menu/1.jpg';
import Burger2 from '../../assets/img/Menu/2.jpg';
import Burger3 from '../../assets/img/Menu/3.jpg';
import Burger4 from '../../assets/img/Menu/4.jpg';
import Burger5 from '../../assets/img/Menu/5.jpg';
import Burger6 from '../../assets/img/Menu/6.jpg';

class Menu extends Component {
    render() {
        return (
            <div className={classes.outer}>
                <div className={classes.burger}>
                    <img src={Burger1} alt="first-burger" />
                    <p>
                        <strong>Cheese & Bacon Burger</strong>
                        <br />
                        </p>
                </div>
                <Card
                    style={{ width: 300 }}
                    cover={<img alt="example" src={Burger1} />}
                    actions={[<span><Icon type="minus-circle" /> Remove</span>, <span><Icon type="plus-circle" /> Add</span>]}
                >
                    <Card.Meta
                    title="Cheese & Bacon Burger"
                    description="Τυρί Ωρίμανσης Cheddar, Μπέικον, Μαγιονέζα,Tomato Jam, Μαρούλι, Τομάτα, Κρεμμύδι"
                    />
                </Card>
                <div className={classes.burger}>
                    <img src={Burger2} alt="first-burger" />
                    <p>
                        <strong>Cheeseburger</strong>
                        <br />
                        Τυρί Ωρίμανσης Cheddar, Μαγιονέζα, <br />
                        Tomato Jam, Μαρούλι, Τομάτα, Κρεμμύδι
                        </p>
                </div>
                <div className={classes.burger}>
                    <img src={Burger3} alt="first-burger" />
                    <p>
                        <strong>Tower Burger</strong>
                        <br />
                        Ψωμί Brioche, American Cheddar, Tomato Jam, <br />
                        Onion Rings, Πίκλες, Smoked Chili Mayo Sauce
                        </p>
                </div>
                <div className={classes.outer}>
                    <div className={classes.burger}>
                        <img src={Burger4} alt="first-burger" />
                        <p>
                            <strong>New Yorker Double Burger</strong>
                            <br />
                            Δύο Μπιφτέκια 120gr., American Cheddar, Hub Sauce, <br />
                            Μαρούλι, Τομάτα, Κρεμμύδι
                        </p>
                    </div>
                    <div className={classes.burger}>
                        <img src={Burger5} alt="first-burger" />
                        <p>
                            <strong>Cheese & Bacon Sweet Chili Chicken Burger</strong>
                            <br />
                            Τυρί Ωρίμανσης Cheddar, Μπέικον, Sweet Chili Sauce, <br />
                            Μαγιονέζα, Tomato Jam, Μαρούλι
                        </p>
                    </div>
                    <div className={classes.burger}>
                        <img src={Burger6} alt="first-burger" />
                        <p>
                            <strong>The Mexican Burger 170gr.</strong>
                            <br />
                            Chili Con Carne, American Cheddar, Frizzled Onions <br />
                            Spicy Mayo Sauce, Ψιλοκομμένη Τομάτα
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Menu;