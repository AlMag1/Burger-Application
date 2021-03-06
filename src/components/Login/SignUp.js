import React, { Component } from 'react';
import classes from './SignUp.css';
import axios from 'axios';
import _ from 'lodash';
import { Input, Modal, Button } from 'antd';

class SignUp extends Component {
    state = {
        user: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            floor: 0,
            postalCode: 0,
            address: '',
            phone: 0,
            email: '',
            role: 'customer'
        },
        visible: false
    }

    inputChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.username = event.target.value;
        this.setState({ user });
    }

    passwordChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.password = event.target.value;
        this.setState({ user });
    }

    firstnameChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.firstName = event.target.value;
        this.setState({ user });
    }

    lastnameChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.lastName = event.target.value;
        this.setState({ user });
    }

    floorChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.floor = event.target.value;
        this.setState({ user });
    }

    postalCodeChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.postalCode = event.target.value;
        this.setState({ user });
    }

    addressChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.address = event.target.value;
        this.setState({ user });
    }

    phoneChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.phone = event.target.value;
        this.setState({ user });
    }

    emailChangeHandler = (event) => {
        let user = { ...this.state.user };
        user.email = event.target.value;
        this.setState({ user });
    }

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

    handleSubmit = event => {
        event.preventDefault();

        const user = _.pick(this.state.user, ['address', 'email', 'firstName', 'floor', 'lastName', 'password', 'phone', 'postalCode', 'role', 'username'])

        axios.post(`http://localhost:8080/cb-group-project/api/customers`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className={classes.outer}>
                <form onSubmit={this.handleSubmit}>
                    <div className={classes.first}>
                        <div className={classes.labels}>
                            <label htmlFor="username">Username:</label>
                            <Input type="text" name="username" id="username" placeholder="Username" className={classes.inputs} onChange={this.inputChangeHandler} />
                        </div>
                        <div className={classes.labels}>
                            <label htmlFor="password">Password:</label>
                            <Input type="password" name="password" id="password" placeholder="Password" className={classes.inputs} onChange={this.passwordChangeHandler} />
                        </div>
                        <div className={classes.labels}>
                            <label htmlFor="email">Email:</label>
                            <Input type="email" name="email" id="email" placeholder="E-mail" className={classes.inputs} onChange={this.emailChangeHandler} />
                        </div>
                    </div>
                    <div className={classes.second}>
                        <div className={classes.labels}>
                            <label htmlFor="firstName">Firstname:</label>
                            <Input type="text" name="firstName" id="firstName" placeholder="Firstname" className={classes.inputs} onChange={this.firstnameChangeHandler} />
                        </div>
                        <div className={classes.labels}>
                            <label htmlFor="lastName">Lastname:</label>
                            <Input type="text" name="lastName" id="lastName" placeholder="Lastname" className={classes.inputs} onChange={this.lastnameChangeHandler} />
                        </div>
                        <div className={classes.labels}>
                            <label htmlFor="phone">Telephone:</label>
                            <Input type="text" name="phone" id="phone" placeholder="Telephone" className={classes.inputs} onChange={this.phoneChangeHandler} />
                        </div>
                    </div>
                    <div className={classes.third}>
                        <div className={classes.labels}>
                            <label htmlFor="floor">Floor:</label>
                            <Input type="number" name="floor" id="floor" placeholder="Floor" className={classes.inputs} onChange={this.floorChangeHandler} />
                        </div>
                        <div className={classes.labels}>
                            <label htmlFor="postal-code">Postal Code:</label>
                            <Input type="text" name="postal-code" id="postal-code" placeholder="Postal Code" className={classes.inputs} onChange={this.postalCodeChangeHandler} />
                        </div>
                        <div className={classes.labels}>
                            <label htmlFor="address">Address:</label>
                            <Input type="text" name="address" id="address" placeholder="Address" className={classes.inputs} onChange={this.addressChangeHandler} />
                        </div>
                    </div>
                    <div className={classes.signUp}>
                        <button type="submit" className={classes.sign} onClick={this.showModal}>Submit</button>
                    </div>
                    <Modal
                        style={{ textAlign: "center" }}
                        title="Επιτυχής καταχώρηση στοιχείων!"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={<Button key="submit" type="primary" onClick={this.handleOk}>
                            Εντάξει
                  </Button>}
                    >
                        <p>Τα στοιχεία σας καταχωρήθηκαν επιτυχώς.</p>
                        <p>Σας ευχαριστούμε πολύ!</p>
                    </Modal>
                </form>
            </div>
        );
    }
}

export default SignUp;