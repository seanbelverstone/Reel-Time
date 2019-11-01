import React, { Component } from 'react';
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { FormErrors } from '../FormErrors';
import API from "../../utils/API";
import "./style.css"

class DashboardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieGenre: '',
      cuisineType: ''
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
    const {name, value} = event.target;
    this.setState(
      {[name]: value}
    )
  }


  validateForm() {
      this.setState({
        formValid: 
        this.state.movieGenreValid &&
        this.state.cuisineTypeValid
      });
  }

  errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
  }


  // updateState(element) {
  //       this.setState({value: element});
  //     }


  onSubmit = event => {
    event.preventDefault();

    console.log("in client/src/components/DashboardForm/index.js");  //deb
    console.log(this.state.movieGenre + " " + this.state.cuisineType);  //deb

    API.getMovieFood(this.state.movieGenre, this.state.cuisineType)
      .then(results => {
        window.location.pathname = "/new-reel";    
      })
      .catch(err => {
        console.log(err);
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
              value={this.state.movieGenre}
              onChange={this.handleChange}
              name="movieGenre">
              <option value="selected">Select one</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Animation">Animation</option>
              <option value="Family">Family</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
              <option value="Documentary">Documentary</option>
            </select>
          </FormGroup>
          <FormGroup className='form-group'>
            <Label for="cuisineType">Choose a Cuisine Type:*</Label>
            <select
              id="cuisineType"
              value={this.state.cuisineType}
              onChange={this.handleChange}
              name="cuisineType">
              <option value="selected">Select one</option>
              <option value="America">American</option>
              <option value="Indian">Indian</option>
            </select>
          </FormGroup>
          <div className="button-container">
            {/* <Link to="/new-reel"> */}
              <Button onClick={this.onSubmit} id="create_reel_btn">Create Reel</Button>
            {/* </Link> */}
          </div> 
        </Form>
      </div>
    )
  }
}

export default DashboardForm;