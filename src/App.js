import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Burger from './burger.jpg';
import Burger2 from './burger2.jpg';
import Burger3 from './burger3.jpg';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <form method="POST" >
          <div className={classes.header}>
            <div className={classes.title}>
              <p>BURGER<br />HUB</p>
            </div>
            <div>
              <input type="text" name="username" placeholder="Username" className={classes.credentials}></input>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" className={classes.credentials}></input>
            </div>
            <div>
              <input type="submit" className={classes.sign} value="Sign in" />
              <button className={classes.sign}>Sign up</button>
            </div>
          </div>
          <div>
            <img src={Burger} alt="A burger"></img>
            <img src={Burger2} alt="A burger"></img>
            <img src={Burger3} alt="A burger"></img>
            <p className={classes.description}>- BORN TO GRILL - </p>
            <p className={classes.description}>Φρέσκα υλικά, σπιτικές συνταγές, μοναδικές γεύσεις!</p>
          </div>
          <footer className={classes.footer}>
            <p className={classes.contact}>
              <strong>Contact details</strong>
            </p>
            <p>
              <strong>Address:</strong> 25 Nafpliou Str. Vouliagmeni, Greece
          </p>
            <p>
              <strong>Phone:</strong> +30 2102201234
          </p>
            <p>
              <strong>Email:</strong> contact@burgerhub.com
          </p>

          </footer>
        </form>
      </div>
    );
  }
}

export default App;
