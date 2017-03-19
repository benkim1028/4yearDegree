import React, { Component } from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import _ from 'lodash'

class UserCourse extends Component {

	constructor(props) {
  	super(props);
  	this.state = {
  		options:[]
  	};

  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
  	event.preventDefault(); 
  	var newArray = this.state.options;
  	newArray.push(this.state.value.toUpperCase());
  	this.setState({arr:newArray});
  	alert('Added ' +  this.state.value);
  }

  componentWillMount() {
  }

	render() {
		return (
			<div>
	      <Segment>
	      	<div>
	      		<form onSubmit={this.handleSubmit}>
	      			<label>
	      				Course Code:
	      				<input
	      				type="text"
	      				value={this.state.value}
	      				onChange={this.handleChange}
	      				/>
	      			</label>
	      			<input 
	      			type="submit"
	      			value="Add"/>
	      		</form>
					</div>
		      <Divider section />
		      <div>
			      <ul>
			      	{this.state.options.map((course, idx) =>
			      		<li>
			      		{course}
			      	</li>
			      		)}
			      	
	          </ul>
		      </div>
	      </Segment>
      </div>
    );
  }
}

export default UserCourse


  

