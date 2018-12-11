import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
    { label: 'Cheese & Bacon', type: 'cheesebacon' },
    { label: 'Cheeseburger', type: 'cheese' },
    { label: 'Tower Burger', type: 'tower' },
    { label: 'New Yorker', type: 'newyork' },
    { label: 'Cheese & Bacon Sweet Chili', type: 'sweetchili' },
    { label: 'Mexican Burger', type: 'mexican' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.burgerAdded(ctrl.type)}
                removed={() => props.burgerRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;