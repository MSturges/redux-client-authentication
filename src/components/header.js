import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks(){
    if (this.props.authentcated) {
      // show signout
      return ( <li className="nav-item">
          <Link to="/signout" className="nav-link" key={3}>Sign Out</Link>
        </li>
      )
    } else{
      // signin or signout
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
      ];
    }
  }

  render(){
    return(
      <nav className="navbar navbar-light">
      <Link className="navbar-brand">Redux Auth</Link>

      <ul className="nav navbar-nav">
        {this.renderLinks()}
      </ul>

      </nav>
    );
  }
}

function mapStateToProps(state){
  return {
    authentcated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
