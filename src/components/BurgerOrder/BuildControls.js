import React, { Component } from 'react';
import classes from './BuildControls.css';
import { Card, Icon, Row, Col, Tooltip, Modal, Button } from 'antd';

const burgers = [
    { label: 'Cheese & Bacon', type: 'cheesebacon', description: "Τυρί Ωρίμανσης Cheddar, Μπέικον, Μαγιονέζα,Tomato Jam, Μαρούλι, Τομάτα" },
    { label: 'Cheeseburger', type: 'cheese', description: "Τυρί Ωρίμανσης Cheddar, Μαγιονέζα, Tomato Jam, Μαρούλι, Τομάτα, Κρεμμύδι" },
    { label: 'Tower Burger', type: 'tower', description: "Ψωμί Brioche, Cheddar, Tomato Jam, Onion Rings, Πίκλες, Smoked Chili Sauce" },
    { label: 'New Yorker', type: 'newyork', description: "Δύο Μπιφτέκια 120gr., American Cheddar, Hub Sauce, Μαρούλι, Τομάτα, Κρεμμύδι" },
    { label: 'Cheese & Bacon Sweet Chili', type: 'sweetchili', description: "Τυρί Ωρίμανσης Cheddar, Μπέικον, Sweet Chili Sauce, Μαγιονέζα, Tomato Jam" },
    { label: 'Mexican Burger', type: 'mexican', description: "Chili Con Carne, American Cheddar, Frizzled Onions,Spicy Mayo Sauce" }
];

class buildControls extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div className={classes.BuildControls}>
                <Row gutter={16} style={{ maxWidth: '850px' }}>
                    {burgers.map((burger, index) => (
                        <Col span={8} key={burger.label}>
                            <Card
                                className={classes.cards}
                                cover={<img alt="example" src={'/img/Menu/' + (index + 1) + '.jpg'} />}
                                actions={[
                                    <Tooltip trigger="click" title="Removed!">
                                        <span onClick={() => {
                                            this.props.burgerRemoved(burger.type)
                                        }}><Icon type="minus-circle" /> Remove</span></Tooltip>,
                                    <Tooltip trigger="click" title="Added!">
                                        <span onClick={() => {
                                            this.props.burgerAdded(burger.type)
                                        }}><Icon type="plus-circle" /> Add</span></Tooltip>
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
                <button onClick={this.showModal} className={classes.OrderButton} disabled={!this.props.purchasable}>ORDER NOW {this.props.price ? this.props.price.toFixed(2) + ' €' : ''}</button>
                <Modal
                    style={{textAlign: "center"}}
                    title="Ευχαριστούμε για την παραγγελία σας!"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={<Button key="submit" type="primary" onClick={this.handleOk}>
                        Εντάξει
                  </Button>}
                >
                    <p>Η παραγγελία σας κοστίζει <strong>{this.props.price}€</strong></p>
                    <p>και θα είναι κοντά σας σε <br /><span style={{fontSize: "40px"}}>30'</span></p>
                </Modal>
            </div>

        );
    }

};

export default buildControls;