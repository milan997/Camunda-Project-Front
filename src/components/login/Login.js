import React from 'react';
import axios from 'axios';

import './Login.css';

const LOGIN_URL = 'http://localhost:8080/api/login';

class Login extends React.Component {
    state = { username: '', password: '' }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post(LOGIN_URL, this.state)
            .then(response => {
                this.props.logIn(response.data);
            })
            .catch(error => this.showErrorMsg());
        // fetch(LOGIN_URL, { 
        //     method: 'POST',
        //     body: JSON.stringify({...this.state}),
        //     headers: { "Content-Type": "application/json" }
        // }).then((res) => {
        //         if (!res.ok)
        //             throw Error('unauthorized');
        //         return res.json();
        // }).then((json) => console.log(JSON.stringify(json)))
        //  .catch((error) => console.log('asda', error));
    }

    showErrorMsg = () => this.refs.errorMsg.style.display = 'block';
    hideErrorMsg = () => this.refs.errorMsg.style.display = 'none';

    handleUsernameChange = (e) => this.setState({username: e.target.value});
    handlePasswordChange = (e) => this.setState({password: e.target.value});

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <input onClick={this.hideErrorMsg} onChange={this.handleUsernameChange}
                        type="text" id="username" name="username" placeholder="username" />
                    <input onClick={this.hideErrorMsg} onChange={this.handlePasswordChange}
                        type="password" id="password" name="password" placeholder="password" value={this.state.password} />
                    <p ref="errorMsg" style={{display:'none'}}>unauthorized</p>
                    <button name="login" value="login" type="submit" >login</button>
                </form>
            </div>
        );
    }
}

export default Login;