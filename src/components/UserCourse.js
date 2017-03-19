import React, { Component } from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import "./Home.css"
import { Button } from 'semantic-ui-react'
import {browserHistory} from 'react-router';

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
  	this.setState({value: ""});
  }

  handleClick(event) {
  	browserHistory.push('/courses');
  }

  componentWillMount() {
  }

	render() {
		return (
			<div className="DropDownContainer">
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
	      <div className="ButtonGroups">
          <Button className="NextButton" content='Next' icon='right arrow' labelPosition='right' onClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default UserCourse


  

