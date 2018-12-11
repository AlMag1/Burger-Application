import React, { Component } from 'react';
import './App.css';
import classes from './App.css';

import { Route } from 'react-router-dom';
import Employee from './components/Employee';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import Customer from './components/Customer';
import Admin from './components/Admin';
import EditCustomers from './components/EditCustomers';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <div className={classes.header}>
            <div className={classes.title}>
              <p>BURGER<br />HUB</p>
              <p><br /><br /><br /></p>
            </div>
            <SignIn />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/employee" component={Employee} />
          <Route path="/customer" component={Customer} />
          <Route path="/admin" component={Admin} />
          <Route path="/edit-customers" component={EditCustomers} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUp} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
