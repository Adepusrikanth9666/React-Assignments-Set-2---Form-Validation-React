import React, { Component, useState } from "react";

import "../styles/App.css";

class Register extends Component {
  constructor(props) {
      super(props);
        this.state = {
          name: null,
          email: null,
          gender:"Male",
          number:null,
          password: null,
          errors: {
            name: '',
            email: '',
            gender:'',
            number:'',
            password: ''

          }
        }
this.handleChange = this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
// this.validateForm=this.validateForm.bind(this);
// this.valid = this.valid.bind(this);
}

 


handleChange=(event)=>{
  // event.preventDefault();
  console.log(event.target);
  const {name,value}=event.target;
  console.log(name,value);
const errors = this.state.errors;
// console.log(error+"er");
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const myRegEx  = /^([a-zA-Z0-9 _-]+)$/;
const myRegExPh= /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;



switch(name){
  case 'name':errors.name = !(myRegEx.test(value))? 'Name is not alphanumeric': '';
                break;

  case 'email': errors.email = validEmailRegex.test(value)? '': 'Email must contain @';
               break;

  case 'password': errors.password = value.length < 6? 'Password must contain atleast 6 letters': '';
                   break;
  
  case 'gender':errors.gender=value?"":"Please identify as male, female or others";
              break;

  case 'number':errors.number=myRegExPh.test(value)?'':'Phone Number must contain only numbers'
                break;

  default:
    break;
}
this.setState({errors, [name]: value}, ()=> {
  console.log(errors,name,value);
  console.log(this.state);
})



} 

 handleSubmit = (event) => {
  event.preventDefault();

  const validateForm = (errors) => {
   let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => {val.length > 0 && (valid = false);
      console.log(val);
      });
      console.log(valid);
    return (valid);
  }

  
  if(validateForm(this.state.errors)) {
    console.info('Valid Form')
  }else{
    console.error('Invalid Form')
  }
}
  






  render() {
    return (
      <div className="form-wraper">
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit} novalidation="true">
          <div className="name-field">
            <label htmlFor="Name">Name</label>
            <input type="text" data-testid="name" name='name' onChange={this.handleChange}  novalidation="true" />
          </div>
          <div className="email-field">
            <label htmlFor="Email">Email</label>
            <input type="email" data-testid="name" name='email' onChange={this.handleChange} novalidation="true"  />
          </div>
          <div className="Gender-field">
            <label htmlFor="Gender">Select Gender</label>
            <select  data-testid="gender" name='gender' onChange={this.handleChange} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="number-field">
            <label htmlFor="Phone Number">Phone Number</label>
            <input type="text" data-testid="phoneNumber"  name='number'onChange={this.handleChange} novalidation="true"  />
          </div>
          <div className="password-field">
            <label htmlFor="Password">Password</label>
            <input data-testid = 'password' type='password'  name='password' onChange={this.handleChange}  novalidation="true" />
          </div>
          <div className='info'>
              <small>Password must be six characters in length.</small>
            </div>

          <div className="submit-field">
            
           <input data-testid = 'submit'  type="submit" />
          </div>
          <div>{this.valid}</div>
          
          
         
        </form>
      </div>
    );
  }
}

export default Register;
