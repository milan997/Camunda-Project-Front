import React from 'react';
import axios from 'axios';

import { LOGOUT_URL } from '../../ROUTES';

import './Nav.css';

class Nav extends React.Component { 

  handleClick = () => {
    // axios.post(url[, data[, config]])
    axios.post(LOGOUT_URL, {}, { withCredentials: true });
    this.props.logOut();
  } 

  render() {
    const {firstName, lastName} = this.props.loggedInUser;
    return (
      <nav className="Nav">
        <ul>
          <li style={{ float: 'left' }}>
            <a href="#top">
              <img style={{ float: 'left' }} src={"../../logo.png"} alt="logo" />
              <span style={{ float: 'right' }}>camunda tasklist</span>
            </a>
          </li>
          <li style={{ float: 'right' }}>
            <div className="dropdown">
              <a href="#top" >♞{firstName + ' ' + lastName}</a>
              <a className="dropdown-content" href="#top" onClick={this.handleClick} >logout</a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;