import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

  handleFormSubmit({email, password}) {
    // Need to do something to log user in
    this.props.signinUser({email, password});
  }

  renderAlert(){
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
        <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );

    }
  }

  render(){

    // Here we are wiring up the input fields with this.props.fields
    // And pulling off the handleSubmit helper
    // {...email} is a helper to do connect them
    const { handleSubmit, fields: {email, password}} = this.props;

    // handleSubmit taks a callback as it's agrument
    // because we're handeling a call back function
    // we need to bind it to this.
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

      <fieldset className=" form-group">
      <label>Email:</label>
      <input {...email}className="form-control"/>
      </fieldset>

      <fieldset className=" form-group">
      <label>Password:</label>
      <input {...password} type="password" className="form-control"/>
      </fieldset>

      {this.renderAlert()}

      <button action="submit" className="btn btn-primary">Sign-in</button>

      </form>

    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error};
}


// required properties for ReduxForm
// 1) form => just needs to be the name of the form
// where reduxFrom will place it in our application state
// 2) Fields => the exact fields we want produced
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);



// This hooks us up to the reduxForm helper
// this.props.fields.email
