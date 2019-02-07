import React from 'react';
import Camunda from './components/camunda/Camunda';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //loggedInUser: null,
      loggedInUser: {
        id: 'demo',
        firstName: 'demo',
        lastName: 'demo',
        email: 'demo',
      },
    }
  }

  logIn = (user) => this.setState({loggedInUser:user});
  logOut = () => this.setState({loggedInUser:null});
  
  render() {
    console.log('oooh erneesto');
    const loggedInUser = this.state.loggedInUser;
    // on each render set loggedInUser in sessionStorage, as I'm not using Redux here or...
    // TODO iskoristiti React Context API
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

    const content = loggedInUser ?
            [ 
              <Nav logOut={this.logOut} loggedInUser={loggedInUser} key="Nav"/>,
              <Camunda key="Camunda"/>
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