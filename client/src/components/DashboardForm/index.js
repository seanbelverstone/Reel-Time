import React, { Component } from 'react';
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css"

class DashboardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueMovie: '',
      valueCuisine: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // onSubmit= (e) => {
  //   e.preventDefault;
  //   // this.props.onSubmit({
  //   //   billerName: this.state.billerName,
  //   //   billerDescription: this.state.billerDescription
  //   // });
  // }

  handleChange = (event) => {
    this.setState({
      valueMovie: event.target.valueMovie,
      cuisineType: event.target.cuisineType
    });
  }

  render(){
    return(
      <div>
        <Form className="form-container">
          <FormGroup className='form-group'>
            <Label for="movieGenre">Choose a Movie Genre:*</Label>
            <select
              id="movieGenre"
              value={this.state.valueMovie}
              onChange={this.handleChange}
              name={this.state.name}>
                {/* Each genre has a specific ID. These will be reflected in the values of each option */}
              <option value="selected">Select one</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="documentary">Documentary</option>
              <option value="drama">Drama</option>
              <option value="family">Family</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="music">Music</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="science fiction">Romance</option>
              <option value="tv movie">TV Movie</option>
              <option value="thriller">Thriller</option>
              <option value="war">War</option>
              <option value="western">Western</option>

            </select>
          </FormGroup>
          <FormGroup className='form-group'>
            <Label for="cuisineType">Choose a Cuisine Type:*</Label>
            <select
              id="cuisineType"
              value={this.state.cuisineType}
              onChange={this.handleChange}
              name={this.state.name}>
              <option value="selected">Select one</option>
              <option value="America">American</option>
              <option value="Indian">Indian</option>
            </select>
          </FormGroup>
          <div className="button-container">
            <Link to="/new-reel">
              <Button onClick={this.onSubmit} id="create_reel_btn">Create Reel</Button>
            </Link>
          </div> 
        </Form>
      </div>
    )
  }
}

export default DashboardForm;