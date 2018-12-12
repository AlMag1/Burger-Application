import React, { Component } from 'react';
import classes from './SignUp.css';

class SignUp extends Component {
    state = {
        users: {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            floor: 0,
            postalCode: 0,
            address: '',
            telephone: 0,
            email: ''
        }
    }

    inputChangeHandler = (event) => {
        let users = {...this.state.users};
        users.username = event.target.value;
        this.setState({users});
    }

    passwordChangeHandler = (event) => {
        let users = {...this.state.users};
        users.password = event.target.value;
        this.setState({users});
    }

    firstnameChangeHandler = (event) => {
        let users = {...this.state.users};
        users.firstname = event.target.value;
        this.setState({users});
    }

    lastnameChangeHandler = (event) => {
        let users = {...this.state.users};
        users.lastname = event.target.value;
        this.setState({users});
    }

    floorChangeHandler = (event) => {
        let users = {...this.state.users};
        users.floor = event.target.value;
        this.setState({users});
    }

    postalCodeChangeHandler = (event) => {
        let users = {...this.state.users};
        users.postalCode = event.target.value;
        this.setState({users});
    }

    addressChangeHandler = (event) => {
        let users = {...this.state.users};
        users.address = event.target.value;
        this.setState({users});
    }

    telephoneChangeHandler = (event) => {
        let users = {...this.state.users};
        users.telephone = event.target.value;
        this.setState({users});
    }

    emailChangeHandler = (event) => {
        let users = {...this.state.users};
        users.email = event.target.value;
        this.setState({users});
    }

    render() {
        console.log(this.state.users);
        return (
            <div>
                <form method="POST" >
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
                            <label htmlFor="firstname">Firstname:</label>
                            <input type="text" name="firstname" id="firstname" placeholder="Firstname" className={classes.credentials} onChange={this.firstnameChangeHandler} />
                            <label htmlFor="lastname">Lastname:</label>
                            <input type="text" name="lastname" id="lastname" placeholder="Lastname" className={classes.credentials} onChange={this.lastnameChangeHandler} />
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
                            <label htmlFor="telephone">Telephone:</label>
                            <input type="text" name="telephone" id="telephone" placeholder="Telephone" className={classes.credentials} onChange={this.telephoneChangeHandler} />
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="E-mail" className={classes.credentials} onChange={this.emailChangeHandler} />
                        </div>
                        <div className={classes.fields}>
                            
                        </div>
                        <input type="submit" value="Submit" className={classes.sign}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;