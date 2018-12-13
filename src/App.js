import React, { Component } from 'react';

import classes from './App.css';
import Employee from './components/Employees/Employee';
import Home from './components/Static/Home';
import LoginForm from './components/Login/LoginForm';
import Footer from './components/Static/Footer';
import Customer from './components/Customers/Customer';
import Admin from './components/Admins/Admin';
import AdminMenu from './components/ViewEditDeleteCustomers/ViewEditDeleteCustomers';
import SignUp from './components/Login/SignUp';
import Order from './components/Order/Order';
import CustomerList from './components/Admins/AdminMenu/CustomerList';
import DeleteCustomer from './components/Admins/AdminMenu/DeleteCustomer';
import AdminOrderList from './components/Admins/AdminMenu/OrderList';
import CustomerOrderList from './components/Customers/OrderList';
import EmployeeOrderList from './components/Employees/OrderList';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Static/Header';

class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/employee" component={Employee} />
          <Route path="/customer" component={Customer} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin-menu" component={AdminMenu} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUp} />
          <Route path="/order" component={Order} />
          <Route path="/customer-list" component={CustomerList} />
          <Route path="/delete-customer" component={DeleteCustomer} />
          <Route path="/admin-order-list" component={AdminOrderList} />
          <Route path="/customer-order-list" component={CustomerOrderList} />
          <Route path="/employee-order-list" component={EmployeeOrderList} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;