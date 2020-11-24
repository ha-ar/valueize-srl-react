import React, { Component } from 'react';
import {
	withRouter,
  Link
} from "react-router-dom";

import axios from 'axios';
class Company extends Component{

		constructor(){
			super()
			this.state = {
					companies: []
				}
		}

		  componentDidMount() {
    axios.get('https://29c84ea1be32.ngrok.io/companies')
      .then(res => {
        const companies = res.data.data;
        this.setState({ companies });
      })
  }

    deleteCompany(companyId) {
    const { companies } = this.state;
      axios.delete(`https://ef46dd2cfd78.ngrok.io/companies/${companyId}`)
      .then(res => {
      	this.setState({
            companies: companies.filter(company => company.id !== companyId)
          });
        console.log(res);
        console.log(res.data);
      })
  }

	render(){
		const { history } = this.props;
		const isAuthenticated = () => localStorage.getItem('Authorization');
		return(
			<div className="container">
			<br />
			<div className="row">
				<div className="col-md-1">
				</div>
				<div className="col-md-2">
				{isAuthenticated() &&
			<Link className="btn btn-facebook btn-block text-uppercase" to="/companies/new">Create Company</Link> }
				</div>
			</div>
  <h2>All Companies</h2>            
  <table className="table">
    <thead>
      <tr>
        <th>name</th>
        <th>Country Of Incorporation</th>
        <th>Currency used</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      	{ this.state.companies.map(company => (<tr>
      		<td>{company.name}</td><td>{company.country_of_incorporation}</td>
      		<td>{company.currency_used}</td>
      		<td className="style-action" onClick={() => history.push(`/companies/${company.id}`)}>View</td>
      		<td className="style-action" onClick={()=> this.deleteCompany(company.id)}>Destroy</td>
      		<td className="style-action" onClick={() => history.push(`/companies/${company.id}/cash_mangments`)}>Cash management</td>
      		</tr>))}
    </tbody>
  </table>
  </div>
			)
	}
}

export default withRouter(Company);
