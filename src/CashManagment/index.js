import React, { Component } from 'react';
import {
	withRouter,
  Link
} from "react-router-dom";

import axios from 'axios';

class CashManagment extends Component{

		constructor(){
			super()
			this.state = {
					cash_managments: [],
          company_id: ''
				}
		}

		  componentDidMount() {
        const { match } = this.props;
    axios.get(`https://29c84ea1be32.ngrok.io/companies/${match.params.id}/cash_mangments`)
      .then(res => {
        const cash_managments = res.data.data;
        this.setState({ cash_managments, company_id: match.params.id  });
      })
  }

	render(){
		const isAuthenticated = () => localStorage.getItem('Authorization');
		return(
			<div className="container">
			<br />
			<div className="row">
				<div className="col-md-1">
				</div>
				<div className="col-md-2">
				{isAuthenticated() &&
			<Link className="btn btn-facebook btn-block text-uppercase" to={`/companies/${this.state.company_id}/cash_mangments/new`}>Create Cash Managments</Link> }
				</div>
			</div>
  <h2>Company all Cash Managments</h2>            
  <table className="table">
    <thead>
      <tr>
        <th>Initial cash in bank</th>
        <th>Cash In</th>
        <th>Cash Out</th>
        <th>End Cash Balance</th>
      </tr>
    </thead>
     <tbody>
        { this.state.cash_managments.map(cash_managment => (<tr>
          <td>{cash_managment.initial_cash}</td><td>{cash_managment.cash_in}</td>
          <td>{cash_managment.cash_out}</td>
          <td>{cash_managment.end_cash_balance}</td>
          </tr>))}
    </tbody>

  </table>
  </div>
			)
	}
}

export default withRouter(CashManagment)
