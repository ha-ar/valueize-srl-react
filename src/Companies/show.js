import React, { Component } from 'react';
import {
	withRouter
} from "react-router-dom";

import axios from 'axios';
class ShowCompany extends Component{

		constructor(){
			super()
			this.state = {
					company: ''
				}
		}

		  componentDidMount() {
        const { match } = this.props;
    axios.get(`https://29c84ea1be32.ngrok.io/companies/${match.params.id}`)
      .then(res => {
        const company = res.data.data;
        this.setState({ company });
        console.log('res', res.data);
      })
  
  }


	render(){
		return(
			<div className="container">
			<br />
			<div className="row">
				<div className="col-md-1">
				</div>
				<div className="col-md-2">
				</div>
			</div>
  <h2>Company Name:</h2> <p>{this.state.company.name}</p>   
  <br />
  <h2>Country Of Incorporation:</h2> <p>{this.state.company.country_of_incorporation}</p>
  <br />
  <h2>Currency Used:</h2> <p>{this.state.company.currency_used}</p>

  </div>
			)
	}
}

export default withRouter(ShowCompany);
