import React, { Component } from 'react';
import {
	withRouter
} from "react-router-dom";
import axios from 'axios';

class CreateCashManagment extends Component{
	constructor(){
		super()
		this.state = {
			initial_cash: '',
			cash_in: '',
			revenues: '',
			equity: '',
			convertibe_note: '', 
			bank_debt: '',
			cashin_others: '',
			cash_out: '', 
			cogs: '',
			employees: '',
			services: '',
			operation_expenses: '',
			investments: '',
			cashout_others: '',
			end_cash_balance: '',
			error: false,
			error_messages: []
		}
	}


	companyDataChange(ev){
		this.setState({
			[ev.target.name]: ev.target.value
		}
		)
	}

	PostCashData(ev){
		ev.preventDefault();
		const {history} = this.props;
		const {match} = this.props;
		debugger
			axios.post(`https://29c84ea1be32.ngrok.io/companies/${match.params.id}/cash_mangments`, {
		 		cash_managment: {
            initial_cash: this.state.initial_cash,
            cash_in: parseInt(this.state.revenues) + parseInt(this.state.equity) + parseInt(this.state.convertibe_note) + parseInt(this.state.bank_debt) + parseInt(this.state.cashin_others),
            revenues: this.state.revenues,
            equity: this.state.equity,
            convertibe_note: this.state.convertibe_note,
            bank_debt: this.state.bank_debt,
            cashin_others: this.state.cashin_others,
            cash_out: parseInt(this.state.cogs) + parseInt(this.state.employees) + parseInt(this.state.services) + parseInt(this.state.operation_expenses) + parseInt(this.state.investments) + parseInt(this.state.cashout_others),
            cogs: this.state.cogs,
            employees: this.state.employees,
            services: this.state.services,
            operation_expenses: this.state.operation_expenses,
            investments: this.state.investments,
            cashout_others: this.state.cashout_others,
            end_cash_balance: (parseInt(this.state.initial_cash) - (parseInt(this.state.cogs) + parseInt(this.state.employees) + parseInt(this.state.services) + parseInt(this.state.operation_expenses) + parseInt(this.state.investments) + parseInt(this.state.cashout_others)) + (parseInt(this.state.revenues) + parseInt(this.state.equity) + parseInt(this.state.convertibe_note) + parseInt(this.state.bank_debt) + parseInt(this.state.cashin_others)))
            } 
			}, {
    headers: {
    	Authorization: localStorage.getItem("Authorization"),
    'Content-Type': 'application/json'
    }})
			.then((response) => {
				if (response.data.success) {
					history.push(`/companies/${match.params.id}/cash_mangments`);
				}else{
					this.setState({
						error: true,
					error_messages: response.data.errors
					})
				}
			}, (error) => {
			  console.log(error);
		});
	}

	showErrorMessages() {
		if (this.state.error) {
			return this.state.error_messages.map(error => (<li style={{color: 'red'}}>{error}</li>))
		}
	}
	render(){
		console.log(this.state);
		return(
			<div className="container">
		    <div className="row">
		      <div className="col-lg-10 col-xl-9 mx-auto">
		        <div className="card card-signin flex-row my-5">
		          
		          <div className="card-body">
		            <h5 className="card-title text-center">New Cash Managment</h5>
		            {this.showErrorMessages()}
		            <br />
		            <form className="form-signin" onSubmit={this.PostCashData.bind(this)}>
		            	<label >Initial Cash:</label>
		              <div className="form-label-group">
		                <input type="number" name="initial_cash" id="company_name" value={this.state.initial_cash} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		                
		              </div>
		              <label>Cash In:</label>
		              <div className="form-label-group">
		                <input 
		                type="number" 
		                name="cash_in"
		                id="Incorporation"  
		                className="form-control"
		                placeholder="Company Name" 
		                value={parseInt(this.state.revenues && this.state.revenues || 0) + parseInt(this.state.equity && this.state.equity || 0) + parseInt(this.state.convertibe_note && this.state.convertibe_note || 0) + parseInt(this.state.bank_debt && this.state.bank_debt || 0) + parseInt(this.state.cashin_others && this.state.cashin_others || 0)} 
		                onChange={this.companyDataChange.bind(this)}
		                disabled={true}
		                />		                
		              </div>

		              <label>Revenue:</label>
		              <div className="form-label-group">
		                <input 
		                type="number" 
		                name="revenues" 
		                id="currency" 
		                value={this.state.revenues} 
		                onChange={this.companyDataChange.bind(this)} 
		                className="form-control" 
		                placeholder="Company Name" 
		                required />
		              </div>

		              <label>Equity:</label>
		              <div className="form-label-group">
		                <input type="number" name="equity" id="company_name" value={this.state.equity} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		              </div>

		              <label>Convertible Note:</label>
		              <div className="form-label-group">
		                <input type="number" name="convertibe_note" id="company_name" value={this.state.convertibe_note} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />		                
		              </div>

		              <label>Back Debt:</label>
		              <div className="form-label-group">
		                <input type="number" name="bank_debt" id="company_name" value={this.state.bank_debt} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		              </div>

		              <label>Other (please, specify):</label>
		              <div className="form-label-group">
		                <input type="number" name="cashin_others" id="company_name" value={this.state.cashin_others} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		              </div>

		              <label>Cash Out:</label>
		              <div className="form-label-group">
		                <input 
		                type="number"
		                name="cash_out" 
		                id="company_name" 
		                className="form-control"
		                value={parseInt(this.state.cogs && this.state.cogs || 0) + parseInt(this.state.employees && this.state.employees || 0) + parseInt(this.state.services && this.state.services || 0) + parseInt(this.state.operation_expenses && this.state.operation_expenses || 0) + parseInt(this.state.investments && this.state.investments || 0) + parseInt(this.state.cashout_others && this.state.cashout_others || 0)}
		                onChange={this.companyDataChange.bind(this)}
		                placeholder="Company Name"
		                disabled={true}
		                 />
		                
		              </div>

		              <label>COGS:</label>
		              <div className="form-label-group">
		                <input type="number" name="cogs" id="company_name" value={this.state.cogs} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		              </div>

		              <label>Employees:</label>
		              <div className="form-label-group">
		                <input type="number" name="employees" id="company_name" value={this.state.employees} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		              </div>

		              <label>Services:</label>
		              <div className="form-label-group">
		                <input type="number" name="services" id="company_name" value={this.state.services} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		              </div>

		              <label>Other operating Exepenses:</label>
		              <div className="form-label-group">
		                <input type="number" name="operation_expenses" id="company_name" value={this.state.operation_expenses} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		              </div>

		              <label>Investments:</label>
		              <div className="form-label-group">
		                <input type="number" name="investments" id="company_name" value={this.state.investments} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		              </div>

		              <label>Other (please, specify)</label>
		              <div className="form-label-group">
		                <input type="number" name="cashout_others" id="company_name" value={this.state.cashout_others} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		              </div>

		              <label>End Cash Balance</label>
		              <div className="form-label-group">
		                <input 
		                type="number" 
		                name="end_cash_balance" 
		                id="company_name" 
		                className="form-control" 
		                placeholder="Company Name"
		                value={(parseInt(this.state.initial_cash && this.state.initial_cash || 0) - (parseInt(this.state.cogs && this.state.cogs || 0) + parseInt(this.state.employees && this.state.employees || 0) + parseInt(this.state.services && this.state.services || 0) + parseInt(this.state.operation_expenses && this.state.operation_expenses || 0) + parseInt(this.state.investments && this.state.investments || 0) + parseInt(this.state.cashout_others && this.state.cashout_others || 0)) + (parseInt(this.state.revenues && this.state.revenues || 0) + parseInt(this.state.equity && this.state.equity || 0) + parseInt(this.state.convertibe_note && this.state.convertibe_note || 0) + parseInt(this.state.bank_debt && this.state.bank_debt || 0) + parseInt(this.state.cashin_others && this.state.cashin_others || 0)))}
		                onChange={this.companyDataChange.bind(this)}
		                placeholder="Company Name"
		                disabled={true}
		                 />
		              </div>


		              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Create</button>
		            </form>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
			)
	}
}

export default withRouter(CreateCashManagment);