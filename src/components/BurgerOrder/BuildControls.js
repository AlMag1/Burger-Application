import React from 'react';
import classes from './BuildControls.css';
import {Card, Icon, Row, Col} from 'antd';

const burgers = [
    { label: 'Cheese & Bacon', type: 'cheesebacon', description: "Τυρί Ωρίμανσης Cheddar, Μπέικον, Μαγιονέζα,Tomato Jam, Μαρούλι, Τομάτα" },
    { label: 'Cheeseburger', type: 'cheese', description: "Τυρί Ωρίμανσης Cheddar, Μαγιονέζα, Tomato Jam, Μαρούλι, Τομάτα, Κρεμμύδι" },
    { label: 'Tower Burger', type: 'tower', description: "Ψωμί Brioche, Cheddar, Tomato Jam, Onion Rings, Πίκλες, Smoked Chili Sauce" },
    { label: 'New Yorker', type: 'newyork', description: "Δύο Μπιφτέκια 120gr., American Cheddar, Hub Sauce, Μαρούλι, Τομάτα, Κρεμμύδι" },
    { label: 'Cheese & Bacon Sweet Chili', type: 'sweetchili', description: "Τυρί Ωρίμανσης Cheddar, Μπέικον, Sweet Chili Sauce, Μαγιονέζα, Tomato Jam" },
    { label: 'Mexican Burger', type: 'mexican', description: "Chili Con Carne, American Cheddar, Frizzled Onions,Spicy Mayo Sauce" }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <Row gutter={16} style={{maxWidth: '850px'}}>
        {burgers.map((burger,index) => (
            <Col span={8} key={burger.label}>
                <Card
                    className={classes.cards}
                    cover={<img alt="example" src={'/img/Menu/' + (index+1) +'.jpg'} />}
                    actions={[
                        <span onClick={() => props.burgerRemoved(burger.type)}><Icon type="minus-circle" /> Remove</span>, 
                        <span onClick={() => props.burgerAdded(burger.type)}><Icon type="plus-circle" /> Add</span>
                    ]}
                >
                    <Card.Meta
                    title={burger.label}
                    description={burger.description}
                    />
                </Card>
            </Col>
        ))}
        </Row>
        <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW {props.price ? props.price.toFixed(2) + ' €' : ''}</button>
    </div>
);

export default buildControls;