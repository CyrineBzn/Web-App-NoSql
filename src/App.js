import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    axios.get('/api/company')
      .then(res => {
        this.setState({ companies: res.data });
        console.log(this.state.companies);
      });
  }

 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Companies List
            </h3>
           </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add A Company</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Founded Year</th>
                  <th>Category</th>
                  <th>Home Page Url</th>
                </tr>
              </thead>
              <tbody>
                {this.state.companies.map(company =>
                  <tr>
                    <td><Link to={`/show/${company._id}`}>{company.name}</Link></td>
                    <td>{company.founded_year}</td>
                    <td>{company.category_code}</td>
                    <td>{company.homepage_url}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div> 
   );
  }
}

export default App;
