import React, { Component } from 'react';
import classes from './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div>
                <form method="POST" >
                    <div className={classes.signUp}>
                        <div className={classes.fields}>
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" placeholder="Username" className={classes.credentials} />
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" placeholder="Password" className={classes.credentials} />
                        </div>
                        <div className={classes.fields}>
                            
                        </div>
                        <div className={classes.fields}>
                            <label htmlFor="firstname">Firstname:</label>
                            <input type="text" name="firstname" id="firstname" placeholder="Firstname" className={classes.credentials} />
                            <label htmlFor="lastname">Lastname:</label>
                            <input type="text" name="lastname" id="lastname" placeholder="Lastname" className={classes.credentials} />
                        </div>
                        <div className={classes.fields}>
                            
                        </div>
                        <div className={classes.fields}>
                            <label htmlFor="floor">Floor:</label>
                            <input type="number" name="floor" id="floor" placeholder="Floor" className={classes.credentials} />
                            <label htmlFor="postal-code">Postal Code:</label>
                            <input type="text" name="postal-code" id="postal-code" placeholder="Postal Code" className={classes.credentials} />
                        </div>
                        <div className={classes.fields}>
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" id="address" placeholder="Address" className={classes.credentials} />
                        </div>
                        <div className={classes.fields}>
                            <label htmlFor="telephone">Telephone:</label>
                            <input type="text" name="telephone" id="telephone" placeholder="Telephone" className={classes.credentials} />
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="E-mail" className={classes.credentials} />
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