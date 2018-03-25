import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      search:''
    };
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0,40)});
  }
 

  componentDidMount() {
    axios.get('/api/company')
      .then(res => {
        this.setState({ companies: res.data });
        console.log(this.state.companies);
      });
  }

 
  render() {

  if (this.state.companies.length !== 0 ){
    let filteredCompanies= this.state.companies.filter(
      (company)=>{
        return company.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
      }
    );

  
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
            <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search company ! "/>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Founded Year</th>
                  <th>Category</th>
                  <th> Country</th>
                  <th>Home Page Url</th>
                </tr>
              </thead>
              <tbody>
                {filteredCompanies.map(company =>
                  <tr>
                    <td><Link to={`/show/${company._id}`}>{company.name}</Link></td>
                    <td>{company.founded_year}</td>
                    <td>{company.category_code}</td>
                    <td>{company.offices.map(office =>{
                     return (
                            <div key={company.offices}>
                                <dd>{office.country_code}</dd>
                             </div>
                     );
                   }  
             )}</td>
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
  else{
    return null
  }
}
}
export default App;
