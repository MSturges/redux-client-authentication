import axios from 'axios'
// communicate information about the url to Router
// Also use it to make changes to the url
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';


const API_URL = 'http://localhost:3090';
// redux-thunk allows us to return a funtion and call dispatch
// dispatch forwards to all of our reducers

export function signinUser({email, password}){

  return function(dispatch){

    //  Submit email/password to the server
    axios.post(`${API_URL}/signin`, {email, password})
    .then(response => {
      //  If request is good...
      // - Update State to indicate user is authenticated
      dispatch({ type: AUTH_USER})
      //  - Save the JWT token
      localStorage.setItem('token', response.data.token);
      //  - Redirect to the route '/feature'
      browserHistory.push('/feature');
    })
    .catch(() => {
      // If request is bad...
      // - Show an error to the user
      dispatch(authError('Bad Login Info'))
    });

  }
}

export function signupUser({email, password}){

  return function(dispatch){
    axios.post(`${API_URL}/signup`, {email, password})
  }
}



export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser(){

  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER,
  }
}
