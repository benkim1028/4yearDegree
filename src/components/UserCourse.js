import React, { Component } from 'react'
import { Icon, Input } from 'semantic-ui-react'

class UserCourse extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
  		text: ""
  	};
	}

	render() {
		const Input = () => (
		  <div>
		    <Input icon placeholder="Course Code (eg:CPSC)">
		      <input />
		      <Icon name="" />
		    </Input>
		    <br />
		    <br />
		    <Input iconPosition='left' placeholder="Course Number (eg: 110)">
		      <Icon name="" />
		      <input />
		    </Input>
		  </div>
		)

		return 
	}
}

export default Input


  

