import React from 'react';
import './Nav.css';

const Nav = (props) => {
  const {firstName, lastName} = props.loggedInUser;
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
            <a href="#top" >♚{firstName + ' ' + lastName}</a>
            <a className="dropdown-content" href="#top" onClick={props.logOut} >logout</a>
          </div>
        </li>
      </ul>
    </nav>
  );

};

export default Nav;