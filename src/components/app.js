import React, { Component } from 'react';
import Header from './header';
export default class App extends Component {

  // this.props.children for our routes
  render() {
    return (
      <div>
      <Header/>

      {this.props.children}

      </div>
    );
  }
}
