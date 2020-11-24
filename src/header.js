import React, { Component } from 'react';
import {
  withRouter,
  Link
} from "react-router-dom";
import axios from 'axios';

class Header extends Component{
  constructor(){
      super()
      this.state = {
          name: '',
          image_url: ''
        }
    }

  logoutUser(){
  const { history } = this.props;
      axios.delete('https://29c84ea1be32.ngrok.io/logout', {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    'Content-Type': 'application/json'
    }})
      .then(res => {
        localStorage.removeItem("Authorization");
        history.push('/companies');
      })
  }

    componentDidMount() {
    axios.get('https://29c84ea1be32.ngrok.io//get_user', {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    'Content-Type': 'application/json'
    }})
      .then(res => {
        this.setState({ name: res.data.data.name, image_url: res.data.data.photo   });
      })
  }

 render(){
  const isAuthenticated = () => localStorage.getItem('Authorization');
   return (
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link to="/" className="navbar-brand style-action"> WebSiteName</Link>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/companies">Companies</Link></li>
    </ul>
    {isAuthenticated() ? <ul className="nav navbar-nav navbar-right">
    {this.state.image_url && <li><img src={this.state.image_url} alt="not available" className="rounded-circle" width="50px" /></li>}
      <li className="fontColor">{this.state.name}</li>
      <li className= "fontColor" onClick={()=> this.logoutUser()}><span className="glyphicon glyphicon-log-in"></span> Log Out</li>
      }
    </ul> : <ul className="nav navbar-nav navbar-right">
      <li><Link to="/sign-up"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul> }
    
  </div>
</nav>
    )
 }  
}

export default withRouter(Header);