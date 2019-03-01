import React from 'react';
import axios from 'axios';

import {LOGIN_URL} from '../../ROUTES'

import './Login.css';

class Login extends React.Component {
  state = { username: '', password: '' }

  handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post(LOGIN_URL, this.state, { withCredentials: true })
      .then(response => this.props.logIn(response.data))
      .catch(this.showErrorMsg);
  }

  showErrorMsg = () => this.refs.errorMsg.style.display = 'block';
  hideErrorMsg = () => this.refs.errorMsg.style.display = 'none';

  handleUsernameChange = (e) => this.setState({ username: e.target.value });
  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <input onClick={this.hideErrorMsg} onChange={this.handleUsernameChange}
            type="text" id="username" name="username" placeholder="username" />
          <input onClick={this.hideErrorMsg} onChange={this.handlePasswordChange}
            type="password" id="password" name="password" placeholder="password" value={this.state.password} />
          <p ref="errorMsg" style={{ display: 'none' }}>unauthorized</p>
          <button name="login" value="login" type="submit" >login</button>
        </form>
      </div>
    );
  }
}

export default Login;