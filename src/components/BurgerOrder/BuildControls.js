import React from 'react';
import classes from './BuildControls.css';
import {Card, Icon, Row, Col} from 'antd';

const controls = [
    { label: 'Cheese & Bacon', type: 'cheesebacon', description: "Τυρί Ωρίμανσης Cheddar, Μπέικον, Μαγιονέζα,Tomato Jam, Μαρούλι, Τομάτα, Κρεμμύδι" },
    { label: 'Cheeseburger', type: 'cheese' },
    { label: 'Tower Burger', type: 'tower' },
    { label: 'New Yorker', type: 'newyork' },
    { label: 'Cheese & Bacon Sweet Chili', type: 'sweetchili' },
    { label: 'Mexican Burger', type: 'mexican' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <Row gutter={16} style={{maxWidth: '800px'}}>
        {controls.map((ctrl,index) => (
            <Col span={8} key={ctrl.label}>
                <Card
                    cover={<img alt="example" src={'/img/Menu/' + (index+1) +'.jpg'} />}
                    actions={[
                        <span onClick={() => props.burgerRemoved(ctrl.type)}><Icon type="minus-circle" /> Remove</span>, 
                        <span onClick={() => props.burgerAdded(ctrl.type)}><Icon type="plus-circle" /> Add</span>
                    ]}
                >
                    <Card.Meta
                    title={ctrl.label}
                    description={ctrl.description}
                    />
                </Card>
            </Col>
        ))}
        </Row>
        <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW {props.price ? props.price.toFixed(2) + ' €' : ''}</button>
    </div>
);

export default buildControls;