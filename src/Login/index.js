import React, { Component } from 'react';
import {
	withRouter
} from "react-router-dom";
import axios from 'axios';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: false,
			error_messages: []
		}
	}
	DataChange(ev){
		this.setState({
			[ev.target.name]: ev.target.value
		})
	}

	postData(ev) {
		ev.preventDefault();
		const {history} = this.props;
			axios.post('https://29c84ea1be32.ngrok.io/login', {
		 		user: {
            email: this.state.email,
            password: this.state.password
            }
			})
			.then((response) => {
				if (response.data.success) {
					localStorage.setItem('Authorization', response.headers.authorization)
					history.push('/');
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

	showError() {
		if (this.state.error) {
			return <li style={{color: 'red'}}>{this.state.error_messages}</li>
		}
	}
  render() {
    return (
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-10 col-xl-9 mx-auto">
		        <div className="card card-signin flex-row my-5">
		          <div className="card-img-left d-none d-md-flex">
		          </div>
		          <div className="card-body">
		            <h5 className="card-title text-center">Login</h5>
		              {this.showError()}
		              <br />
		            <form className="form-signin" onSubmit={this.postData.bind(this)}>

		                <label>Email address</label>
		              <div className="form-label-group">
		                <input type="email" id="inputEmail" name="email" value={this.state.email} onChange={this.DataChange.bind(this)} className="form-control" placeholder="Email addressss" required />
		              </div>
		              
		              <hr />

		                <label>Password</label>
		              <div className="form-label-group">
		                <input type="password" id="inputPassword"  name="password" value={this.state.password} onChange={this.DataChange.bind(this)} className="form-control" placeholder="Password" required />
		              </div>
		              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Sign In</button>
		              <hr className="my-4" />
		           
		            </form>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
    );
  }
}

export default withRouter(Login);