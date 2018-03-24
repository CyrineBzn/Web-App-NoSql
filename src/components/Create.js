import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      founded_year: '',
      number_of_employee: '',
      homepage_url: '',
      category_code: '',
      overview:'',
      total_money_raised:''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, description, founded_year, number_of_employee, homepage_url, category_code, overview, total_money_raised } = this.state;

    axios.post('/api/company', { name, description, founded_year, number_of_employee, homepage_url, category_code, overview, total_money_raised })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, description, founded_year, number_of_employee, homepage_url, category_code, overview, total_money_raised } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add a company
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Companies List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea  type="text" class="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="year">Founded Year:</label>
                <input type="number" class="form-control" name="founded_year" value={founded_year} onChange={this.onChange} placeholder="Founed Year" />
              </div>
              <div class="form-group">
                <label for="employees">Number Of Employees:</label>
                <input type="number" class="form-control" name="number_of_employee"value={number_of_employee}  onChange={this.onChange} placeholder="Number Of Employees" />
              </div>
              <div class="form-group">
                <label for="url">Home Page Url:</label>
                <input type="text" class="form-control" name="homepage_url" value={homepage_url} onChange={this.onChange} placeholder="Home Page Url" />
              </div>
              <div class="form-group">
                <label for="category">Category:</label>
                <input type="text" class="form-control" name="category_code" value={category_code} onChange={this.onChange} placeholder="category" />
              </div>
              <div class="form-group">
                <label for="overview">Overview:</label>
                <textArea  type="text" class="form-control" name="overview" value={overview} onChange={this.onChange} placeholder="Overview" cols="100" rows="10">{overview}</textArea>
              </div>
              <div class="form-group">
                <label for="money">Total Money Raised:</label>
                <input type="text" class="form-control" name="total_money_raised" value={total_money_raised} onChange={this.onChange} placeholder="Total Money Raised" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
