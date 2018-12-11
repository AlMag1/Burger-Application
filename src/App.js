import React, { Component } from 'react';

import classes from './App.css';
import { Route } from 'react-router-dom';
import Employee from './components/Employees/Employee';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Static/Home';
import LoginForm from './components/Login/LoginForm';
import Footer from './components/Static/Footer';
import Customer from './components/Customers/Customer';
import Admin from './components/Admins/Admin';
import EditCustomers from './components/Edit-Customers/EditCustomers';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Order from './components/Order/Order';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <div className={classes.header}>
            <div className={classes.title}>
              <p>BURGER<br />HUB</p>
              {/* <p><br /><br /><br /></p> */}
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
          <Route path="/order" component={Order} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
