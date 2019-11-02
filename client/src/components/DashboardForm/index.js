import React, { Component } from 'react';
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css"

class DashboardForm extends Component {
    
  state = {
      valueMovie: '',
      valueCuisine: ''
    };


  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(
      {[name]: value}
    )
  };

  onSubmit = (event) => {
    event.preventDefault();
    // this is the function for searching for a movie
    this.movieSearch();
    // this is the function for searching for a recipe
    // this.recipeSearch();

  }

  movieSearch = () => {
    API.searchMovie(this.state.valueMovie)
      .then(results => console.log(results.data));
  }

  // recipeSearch = () => {
  //   API.searchRecipe(this.state.valueCuisine)
  //     .then(results => console.log(results.data));
  // }

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
              name="valueMovie">
                {/* Each genre has a specific ID. These will be reflected in the values of each option */}
              <option value="selected">Select one</option>
              <option value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="99">Documentary</option>
              <option value="18">Drama</option>
              <option value="10751">Family</option>
              <option value="14">Fantasy</option>
              <option value="36">History</option>
              <option value="27">Horror</option>
              <option value="10402">Music</option>
              <option value="9648">Mystery</option>
              <option value="10749">Romance</option>
              <option value="878">Science Fiction</option>
              <option value="10770">TV Movie</option>
              <option value="53">Thriller</option>
              <option value="10752">War</option>
              <option value="37">Western</option>

            </select>
          </FormGroup>
          <FormGroup className='form-group'>
            <Label for="cuisineType">Choose a Cuisine Type:*</Label>
            <select
              id="cuisineType"
              value={this.state.valueCuisine}
              onChange={this.handleChange}
              name="valueCuisine">

              <option value="selected">Select one</option>
              <option value="American">American</option>
              <option value="Asian">Asian</option>
              <option value="British">British</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Central Europe">Central Europe</option>
              <option value="Chinese">Chinese</option>
              <option value="Eastern Europe">Eastern Europe</option>
              <option value="French">French</option>
              <option value="French">French</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Kosher">Kosher</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Mexican">Mexican</option>
              <option value="Middle Eastern">Middle Eastern</option>
              <option value="Nordic">Nordic</option>
              <option value="South American">South American</option>
              <option value="South East Asian">South East Asian</option>

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