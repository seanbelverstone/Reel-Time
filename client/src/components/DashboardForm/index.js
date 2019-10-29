import React, { Component } from "react";

class DashboardForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a Genre:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Comedy">Comedy</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default DashboardForm;