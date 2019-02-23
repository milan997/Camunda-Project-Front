import React from 'react';

import Camunda from './camunda/Camunda';
import Login from './login/Login';
import Nav from './nav/Nav';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: JSON.parse(sessionStorage.getItem('loggedInUser')),
      // loggedInUser: {
      //   id: 'demo',
      //   firstName: 'demo',
      //   lastName: 'demo',
      //   email: 'demo',
      // },
    }
  }

  logIn = (user) => {
    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    this.setState({ loggedInUser: user });

  }
  logOut = () => {
    sessionStorage.setItem("loggedInUser", null);
    this.setState({ loggedInUser: null });
  }

  render() {
    console.log('oooh erneesto');
    
    const loggedInUser = this.state.loggedInUser;
    
    const content = loggedInUser ?
          [
            <Nav logOut={this.logOut} loggedInUser={loggedInUser} key="Nav" />,
            <Camunda key="Camunda" />
          ]
          :
          <Login logIn={this.logIn} />;

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
