import React, { Component } from 'react';
import { Button, Form, FormGroup, Label } from "reactstrap";
import API from "../../utils/API";
import "./style.css"

var movieResults;
var recipeResults;

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
    this.movieSearch().then(() => {
      document.cookie = `genre = ${this.state.valueMovie}`

        // this is the function for searching for a recipe
      this.recipeSearch().then(() => {
        document.cookie = `cuisineType = ${this.state.valueCuisine}`

        window.location.pathname = '/new-reel'
      });
    });
    

    
  }

  movieSearch = () => {
    return API.searchMovie(this.state.valueMovie)
      .then(results => {

        movieResults = results.data.results;

        // generates a random number
        var randomNumber = Math.floor(Math.random() * 9) +1;

        // grabs a result in a random position, parses it into a string then adds it to local storage.
        // Local storage can only accept strings
        var movieString = JSON.stringify(movieResults[randomNumber]);
        localStorage.setItem("movie", movieString);
      });
  }

  recipeSearch = () => {
    return API.searchRecipe(this.state.valueCuisine)
      .then(results => {

        recipeResults = results.data.hits;

        var randomNumber = Math.floor(Math.random() * 9) +1;

        // grabs a result in a random position, parses it into a string then adds it to local storage.
        // Local storage can only accept strings
        var recipeString = JSON.stringify(recipeResults[randomNumber]);
        localStorage.setItem("recipe", recipeString);
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
              <option value="american">American</option>
              <option value="asian">Asian</option>
              <option value="british">British</option>
              <option value="caribbean">Caribbean</option>
              <option value="central-europe">Central Europe</option>
              <option value="chinese">Chinese</option>
              <option value="eastern-europe">Eastern Europe</option>
              <option value="french">French</option>
              <option value="indian">Indian</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="kosher">Kosher</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="mexican">Mexican</option>
              <option value="middle-eastern">Middle Eastern</option>
              <option value="nordic">Nordic</option>
              <option value="south-american">South American</option>
              <option value="south-east-asian">South East Asian</option>

            </select>
          </FormGroup>
          <div className="button-container">
            <Button onClick={this.onSubmit} id="create_reel_btn">Create Reel</Button>
          </div> 
        </Form>
      </div>
    )
  }
}

export default DashboardForm;