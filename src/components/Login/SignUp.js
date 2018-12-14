import React, { Component } from 'react';
import classes from './SignUp.css';
import axios from 'axios';
import _ from 'lodash';

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
        }
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

    // roleChangeHandler = (event) => {
    //     let user = { ...this.state.user };
    //     user.role = event.target.value;
    //     this.setState({ user });
    // }

    handleSubmit = event => {
        event.preventDefault();

        const user = _.pick(this.state.user, ['address', 'email', 'firstName', 'floor', 'lastName', 'password', 'phone', 'postalCode' ,'role','username'])

        axios.post(`http://localhost:8080/cb-group-project/api/customers`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className={classes.signUp}>
                        <div className={classes.fields}>
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" placeholder="Username" className={classes.credentials} onChange={this.inputChangeHandler} />
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" placeholder="Password" className={classes.credentials} onChange={this.passwordChangeHandler} />
                        </div>
                        <div className={classes.fields}>

                        </div>
                        <div className={classes.fields}>
                            <label htmlFor="firstName">Firstname:</label>
                            <input type="text" name="firstName" id="firstName" placeholder="Firstname" className={classes.credentials} onChange={this.firstnameChangeHandler} />
                            <label htmlFor="lastName">Lastname:</label>
                            <input type="text" name="lastName" id="lastName" placeholder="Lastname" className={classes.credentials} onChange={this.lastnameChangeHandler} />
                        </div>
                        <div className={classes.fields}>

                        </div>
                        <div className={classes.fields}>
                            <label htmlFor="floor">Floor:</label>
                            <input type="number" name="floor" id="floor" placeholder="Floor" className={classes.credentials} onChange={this.floorChangeHandler} />
                            <label htmlFor="postal-code">Postal Code:</label>
                            <input type="text" name="postal-code" id="postal-code" placeholder="Postal Code" className={classes.credentials} onChange={this.postalCodeChangeHandler} />
                        </div>
                        <div className={classes.fields}>
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" id="address" placeholder="Address" className={classes.credentials} onChange={this.addressChangeHandler} />
                        </div>
                        <div className={classes.fields}>
                            <label htmlFor="phone">Telephone:</label>
                            <input type="text" name="phone" id="phone" placeholder="Telephone" className={classes.credentials} onChange={this.phoneChangeHandler} />
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="E-mail" className={classes.credentials} onChange={this.emailChangeHandler} />
                        </div>
                        <div className={classes.fields}>
                            {/* <label htmlFor="role">Role:</label>
                            <input type="text" name="role" id="role" placeholder="Role" className={classes.credentials} onChange={this.roleChangeHandler} /> */}


                        </div>
                        <button type="submit" className={classes.sign}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;