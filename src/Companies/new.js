import React, { Component } from 'react';
import {
	withRouter,
} from "react-router-dom";
import axios from 'axios';

class CreateCompany extends Component{
	constructor(){
		super()
		this.state = {
			name: '',
			country_of_incorporation: '',
			currency_used: '',
			error: false,
			error_messages: []
		}
	}


	companyDataChange(ev){
		this.setState({
			[ev.target.name]: ev.target.value
		})
	}

	PostCompanyData(ev){
		ev.preventDefault();
		const {history} = this.props;
			axios.post('https://29c84ea1be32.ngrok.io/companies', {
		 		company: {
            name: this.state.name,
            country_of_incorporation: this.state.country_of_incorporation,
            currency_used: this.state.currency_used
            } 
			}, {
    headers: {
    	Authorization: localStorage.getItem("Authorization"),
    'Content-Type': 'application/json'
    }})
			.then((response) => {
				if (response.data.success) {
					history.push('/companies');
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
		return(
			<div className="container">
		    <div className="row">
		      <div className="col-lg-10 col-xl-9 mx-auto">
		        <div className="card card-signin flex-row my-5">
		          
		          <div className="card-body">
		            <h5 className="card-title text-center">New Company</h5>
		            {this.showErrorMessages()}
		            <br />
		            <form className="form-signin" onSubmit={this.PostCompanyData.bind(this)}>
		            	<label>Company Name:</label>
		              <div className="form-label-group">
		                <input type="text" name="name" id="company_name" value={this.state.name} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" />
		                
		              </div>
		              
		              <label>Country of Incorporation:</label>
		              <div className="form-label-group">
		                <input type="text" name="country_of_incorporation" id="Incorporation" value={this.state.country_of_incorporation} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" required />
		                
		              </div>

		              	<label>currency_used:</label>
		              <div className="form-label-group">
		                <input type="text" name="currency_used" id="currency" value={this.state.currency_used} onChange={this.companyDataChange.bind(this)} className="form-control" placeholder="Company Name" required />
		                
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

export default withRouter(CreateCompany);