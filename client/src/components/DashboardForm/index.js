// import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label } from "reactstrap";
// import { FormErrors } from '../FormErrors';
// import { Link } from "react-router-dom";
// import "./style.css"

// class DashboardForm extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         movieGenre: '',
//         cuisineType: '',
//         formErrors: {movieGenre: '', cuisineType: ''},
//         movieGenreValid: false,
//         cuisineTypeValid: false,
//         formValid: false
//       };
//     }
  
//     handleUserInput = (e) => {
//       const name = e.target.name;
//       const value = e.target.value;
//       this.setState({[name]: value},
//       () => { this.validateField(name, value) });
//     }

//     validateField(fieldName, value) {
//       let fieldValidationErrors = this.state.formErrors;
//       let movieGenreValid = this.state.movieGenreValid;
//       let cuisineTypeValid = this.state.cuisineTypeValid;
  
//       switch(fieldName) {
//         case 'movieGenre':
//           movieGenreValid = value.match(!" ");
//           fieldValidationErrors.movieGenre = movieGenreValid ? '' : ' please select one';
//           break;
//         case 'cuisineType':
//           cuisineTypeValid = value.match(!" ");
//           fieldValidationErrors.cuisineType = cuisineTypeValid ? '' : ' please select one';
//           break;
        
//         default:
//           break;
//       }
//       this.setState({formErrors: fieldValidationErrors,
//         movieGenreValid: movieGenreValid,
//         cuisineTypeValid: cuisineTypeValid
//                     }, this.validateForm);
//   }
  
//   validateForm() {
//       this.setState({
//         formValid: 
//         this.state.movieGenreValid &&
//         this.state.cuisineTypeValid
//       });
//   }
  
//   errorClass(error) {
//       return(error.length === 0 ? '' : 'has-error');
//   }
  
//     render() {
//       return (
//         <div>
//           <Form className="form-container">
//             <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.movieGenre)}`}>
//               <Label for="movieGenre">Choose a Genre*</Label>
//                 <select required="required" id="movieGenre" value={this.state.movieGenre} onChange={this.handleUserInput}>
//                   <option value="" selected="true" disabled>Select</option>
//                   <option value="Comedy">Comedy</option>
//                   <option value="Action">Action</option>
//                   <option value="Horror">Horror</option>
//                   <option value="Fantasy">Fantasy</option>
//                   <option value="Documentary">Documentary</option>
//                 </select>
//             </FormGroup>
//             <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.cuisineType)}`}>
//               <Label for="cuisineType">Choose a Cuisine*</Label>
//                 <select required="required" id="cuisineType" value={this.state.cuisineType} onChange={this.handleUserInput}>
//                   <option value="" selected="true" disabled>Select</option>
//                   <option value="American">American</option>
//                   <option value="Chinese">Chinese</option>
//                   <option value="Indian">Indian</option>
//                   <option value="Italian">Italian</option>
//                   <option value="Japanese">Japanese</option>
//                   <option value="Korean">Korean</option>
//                   <option value="Mexican">Mexican</option>
//                 </select>
//             </FormGroup>
//             <div className="panel panel-default">
//               <FormErrors formErrors={this.state.formErrors} />
//             </div>
//             <div className="button-container">
//                 <Link to="/new-reel">
//                     <Button onClick={this.onSubmit} id="create_reel_btn" disabled={!this.state.formValid}>Create Reel</Button>
//                 </Link>
//             </div>
//           </Form>
//         </div>
//       );
//     }
//   }
//   export default DashboardForm;

import React, { Component } from 'react';
import Select from 'react-select';
import { Button, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { FormErrors } from '../FormErrors';
import "./style.css"

class DashboardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      movieGenre: '',
      cuisineType: '',
      formErrors: {movieGenre: '', cuisineType: ''},
      movieGenreValid: false,
      cuisineTypeValid: false,
      formValid: false
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
    () => { this.validateField(name, value) });
    console.log(name, value);
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let movieGenreValid = this.state.movieGenreValid;
    let cuisineTypeValid = this.state.cuisineTypeValid;

    switch(fieldName) {
      case 'movieGenre':
        movieGenreValid = value.match(!null);
        fieldValidationErrors.movieGenre = movieGenreValid ? '' : ' please select one';
        break;
      case 'cuisineType':
        cuisineTypeValid = value.match(!null);
        fieldValidationErrors.cuisineType = cuisineTypeValid ? '' : ' please select one';
        break;
      
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      movieGenreValid: movieGenreValid,
      cuisineTypeValid: cuisineTypeValid
                  }, this.validateForm);
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
  render(){
    var movieGenreOptions = [
      { value: 'Comedy', label: 'Comedy' },
      { value: 'Action', label: 'Action' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Fantasy', label: 'Fantasy' },
      { value: 'Documentary', label: 'Documentary' }
    ];
    var cuisineTypeOptions = [
      { value: 'American', label: 'American' },
      { value: 'Chinese', label: 'Chinese' },
      { value: 'Indian', label: 'Indian' },
      { value: 'Italian', label: 'Italian' },
      { value: 'Japanese', label: 'Japanese' },
      { value: 'Korean', label: 'Korean' },
      { value: 'Mexican', label: 'Mexican' }
    ];
    return(
      <div>
        <Form className="form-container">
          <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.movieGenre)}`}>
            <Label for="movieGenre">Choose a Movie Genre:*</Label>
            <Select
              name="movieGenre"
              id="movieGenre"
              required="required"
              value={this.state.movieGenre}
              options={movieGenreOptions}
              // onChange={this.handleUserInput.bind(this)}
            />
          </FormGroup>
          <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.cuisineType)}`}>
            <Label for="cuisineType">Choose a Cuisine Type:*</Label>
            <Select
              name="cuisineType"
              id="cuisineType"
              required="required"
              value={this.state.cuisineType}
              options={cuisineTypeOptions}
              // onChange={this.handleUserInput.bind(this)}
            />
          </FormGroup>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className="button-container">
            <Link to="/new-reel">
              <Button onClick={this.onSubmit} id="create_reel_btn" disabled={!this.state.formValid}>Create Reel</Button>
            </Link>
          </div> 
        </Form>
      </div>
    )
  }
}

export default DashboardForm;