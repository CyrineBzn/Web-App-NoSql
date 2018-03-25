import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      company: {}
    };
  }

  componentDidMount() {
    axios.get('/api/company/'+this.props.match.params.id)
      .then(res => {
        this.setState({ company: res.data });
        console.log(this.state.company);
      });
  }

  onChange = (e) => {
    const state = this.state.company
    state[e.target.name] = e.target.value;
    this.setState({company:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, description, founded_year, number_of_employee, homepage_url, category_code, overview, total_money_raised } = this.state.company;

    axios.put('/api/company/'+this.props.match.params.id, {  name, description, founded_year, number_of_employee, homepage_url, category_code, overview, total_money_raised } )
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    if (Object.keys(this.state.company).length !== 0 ){
  
      return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit Company
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.company._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Companies List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name"> Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.company.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.company.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="founded_year">Founded Year:</label>
                <input type="number" class="form-control" name="founded_year" value={this.state.company.founded_year} onChange={this.onChange} placeholder="Founed year" />
              </div>
              <div class="form-group">
                <label for="employee">Number Of Employees:</label>
                <input type="number" class="form-control" name="number_of_employee" value={this.state.company.number_of_employee} onChange={this.onChange} placeholder="Number of employees" />
              </div>
              <div class="form-group">
                <label for="url">Home Page Url:</label>
                <input type="text" class="form-control" name="homepage_url" value={this.state.company.homepage_url} onChange={this.onChange} placeholder="Home page url" />
              </div>
              <div class="form-group">
                <label for="category">Category:</label>
                <input type="text" class="form-control" name="category_code" value={this.state.company.category_code} onChange={this.onChange} placeholder="Category" />
              </div>
              <div class="form-group">
                <label for="overview">Overview:</label>
                <input type="text" class="form-control" name="overview" value={this.state.company.overview} onChange={this.onChange} placeholder="Overview" />
              </div>
              <div class="form-group">
                <label for="money">Total Money Raised:</label>
                <input type="text" class="form-control" name="total_money_raised" value={this.state.company.total_money_raised} onChange={this.onChange} placeholder="Total money raised" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  else{
    return null; 
  }
}
}
export default Edit;
