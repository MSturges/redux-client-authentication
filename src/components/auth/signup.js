import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit(formProps){
    // call action creator
    this.props.signupUser(formProps)
  }

  renderAlert(){

    // console.log('yo',this.props.errorMessage);

    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
        <strong>Oops!</strong>{this.props.errorMessage}
        </div>
      )

    }
  }

  render(){

    const { handleSubmit, fields: { email, password, passwordConfirm}} = this.props

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        <fieldset className="form-group">
        <label>Email:</label>
        <input {...email} className="form-control" type="text"/>
        </fieldset>
        {email.touched && email.error && <div className="error">{email.error}</div>}

        <fieldset className="form-group">
        <label>Password:</label>
        <input type="password" {...password} className="form-control" type="password"/>
        </fieldset>
        {password.touched && password.error && <div className="error">{password.error}</div>}

        <fieldset className="form-group">
        <label>Password Confirm:</label>
        <input {...passwordConfirm} className="form-control" type="password"/>
        </fieldset>
        {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}

        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>

    )
  }
}

function validate(formProps){
  const errors = {};

  if (!formProps.email) {
    errors.email = "Please Enter a email"
  }
  if (!formProps.password) {
    errors.password = "Please Enter a password"
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "Please Enter a password confirmation"
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match!'
  }

  return errors;
}


function mapStateToProps(state) {
  return {errorMessage: state.auth.error};
}

export default reduxForm({
  form: 'signupForm',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup)
