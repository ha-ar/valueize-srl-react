import React, { Component } from 'react';
import {
	withRouter,
  Link
} from "react-router-dom";
import axios from 'axios';


class Signup extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			surname: '',
			email: '',
			selectedFile: null,
			loading: false,
			error_messages: []

		}
	}
	DataChange(ev){
		this.setState({
			[ev.target.name]:  ev.target.value
		})
	}

	fileChange(ev){
		this.setState({
		selectedFile: ev.target.files[0]
		})
	}

	postData(ev){
		ev.preventDefault();
		const { history } = this.props;
		this.setState({
			loading: true
		})
		const data = new FormData() 
    data.append('user[name]', this.state.name)
    data.append( 'user[surname]', this.state.surname)
    data.append( 'user[email]', this.state.email)
    data.append( 'user[role]', this.state.role)
    data.append( 'user[photo]', this.state.selectedFile)
    data.append( 'user[password]', this.state.password)
    data.append( 'user[password_confirmation]', this.state.password_confirmation)
		axios.post('https://29c84ea1be32.ngrok.io/signup', data )
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

	loadOrShowMsg() {
		if (this.loading) {
			return <p>Loading...</p>
		}else{
			return <p>{this.state.message}</p>
		}
	}

	showErrorMsg(){
		if (this.state.error) {
		return this.state.error_messages.map(error => (<li style={{color: 'red'}}>{error}</li>))
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
          <p>{this.showErrorMsg()}</p>
            <h5 className="card-title text-center">Register</h5>
            <form className="form-signin" onSubmit={this.postData.bind(this)}>
                <label>Name</label>
              <div className="form-label-group">
                <input type="text" id="inputUserame" name="name" value={this.state.name} onChange={this.DataChange.bind(this)} className="form-control" placeholder="Username"   />
              </div>

                <label>Surrname</label>
              <div className="form-label-group">
                <input type="text" id="inputUserame" name="surname" value={this.state.surname} onChange={this.DataChange.bind(this)} className="form-control" placeholder="Username"  />
              </div>

               <label>Profile Photo</label>
              <div className="form-label-group">
                <input type="file" id="inputUserame" name="photo" onChange={this.fileChange.bind(this)} className="form-control"  />
              </div>

							  <label >Select role:</label>
					    <div className="form-group">
							  <select className="form-control" id="sel1" name="role" value={this.state.role} onChange={this.DataChange.bind(this)}>
							    <option selected disabled className="text-hide">Select Role</option>
							    <option value="student">Student</option>
							    <option value="teacher">Teacher</option>
							  </select>
							</div>

                <label>Email address</label>
              <div className="form-label-group">
                <input type="email" id="inputEmail" name="email" value={this.state.email} onChange={this.DataChange.bind(this)} className="form-control" placeholder="Email address" required />
              </div>
              
              <hr />

                <label>Password</label>
              <div className="form-label-group">
                <input type="password" id="inputPassword" name="password" value={this.state.password} onChange={this.DataChange.bind(this)} className="form-control" placeholder="Password" required />
              </div>
              
                <label>Confirm password</label>
              <div className="form-label-group">
                <input type="password" id="inputConfirmPassword" name="password_confirmation" value={this.state.password_confirmation} onChange={this.DataChange.bind(this)} className="form-control" placeholder="Password" required />
              </div>

              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Register</button>
              <Link className="d-block text-center mt-2 small" to="/login">Sign In</Link>
              <hr className="my-4" />
             
            </form>
            {this.loadOrShowMsg()}
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}


export default withRouter(Signup);