import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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
        console.log( this.state.company.offices);
        
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/company/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
  //  console.log(this.state.company.offices.length > 0);
  //  if (this.state.company !== {}){
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.company.name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>   Companies List</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.company.name}</dd>
              <dt>Description:</dt>
              <dd>{this.state.company.description}</dd>
              <dt>founded Year:</dt>
              <dd>{this.state.company.founded_year}</dd>
              <dt>Number Of Employees:</dt>
              <dd>{this.state.company.number_of_employee}</dd>
              <dt>Home Page Url:</dt>
              <dd>{this.state.company.homepage_url}</dd>
              <dt>Category:</dt>
              <dd>{this.state.company.category_code}</dd>
              <dt>Overview:</dt>
              <dd>{this.state.company.overview}</dd>
              <dt>Total Money Raised:</dt>
              <dd>{this.state.company.total_money_raised}</dd>
            </dl>
            <Link to={`/edit/${this.state.company._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.company._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
