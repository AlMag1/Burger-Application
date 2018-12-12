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
import AdminMenu from './components/ViewEditDeleteCustomers/ViewEditDeleteCustomers';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import Order from './components/Order/Order';
import CustomerList from './components/Admins/AdminMenu/CustomerList';
import DeleteCustomer from './components/Admins/AdminMenu/DeleteCustomer';
import AdminOrderList from './components/Admins/AdminMenu/OrderList';
import CustomerOrderList from './components/Customers/OrderList';
import EmployeeOrderList from './components/Employees/OrderList';

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
          <Route path="/adminmenu" component={AdminMenu} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUp} />
          <Route path="/order" component={Order} />
          <Route path="/customerlist" component={CustomerList} />
          <Route path="/deletecustomer" component={DeleteCustomer} /> 
          <Route path="/adminorderlist" component={AdminOrderList} />
          <Route path="/customerorderlist" component={CustomerOrderList} />
          <Route path="/employeeorderlist" component={EmployeeOrderList} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
