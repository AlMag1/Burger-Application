import React from 'react';
import axios from 'axios';
import CustomerList from './CustomerList';
import { Link } from 'react-router-dom';
import classes from './DeleteCustomer.css';

class DeleteCustomer extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const id = this.state.id;
    console.log("id is " + id);

    axios.get(`localhost:8080/cb-group-project/api/delete-customers/` + id)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <CustomerList />
        <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
          <label>
            Customer ID:
            <input type="text" name="id" onChange={this.handleChange} className={classes.input} placeholder="Customer id" />
          </label>
          <button type="submit" style={{ margin: "20px" }} className="ant-btn ant-btn-primary ant-btn-sm">Delete</button>
          <Link to="/admin-menu" className="ant-btn ant-btn-primary ant-btn-sm" >Back</Link>
        </form>
      </div>
    )
  }
}

export default DeleteCustomer;