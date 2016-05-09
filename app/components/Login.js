import auth from '../auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import React, {
  Component
} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

class Login {


  constructor(props) {
    this.state = {
      email: '',
      password: '',
      error: false,
      successMsg: ''
    };
  }

  handleLogin() {
    var callbackAfterLogin = function(success) {
      if (!success) {
        return this.setState({ error: true });
      } else {

        this.setState({successMsg: 'Successfully logged in'});

        const location = this.props.location;
        if (location.state && location.state.nextPathname) {
          this.props.history.push(location.state.nextPathname);
        } else {
          this.props.history.push('/');
        }
      }
    }.bind(this);

    auth.login(this.state.email, this.state.password, callbackAfterLogin);
  }

  handleLogout() {
    var callbackAfterLogout = function(success) {
      if (success) {
        this.setState({successMsg: 'You have successfully logged out'});
      }
    }.bind(this);

    auth.logout(callbackAfterLogout);
  }

  render() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <p>You are logged in</p>
          <button onClick={ () => this.handleLogout() }>Logout</button>
          <p>{this.state.successMsg}</p>
        </div>
      )
    }

    return (
      <div>
        <input placeholder='email' type='email' name='email' onChange={ e => this.setState({email: e.target.value}) } />
        <input placeholder='password' type='password' name='password' onChange={ e => this.setState({password: e.target.value}) } />
        <button onClick={ () => this.handleLogin() }>Submit</button>
        <p><Link to={'/signup'}>Sign Up</Link></p>
        <p>{this.state.successMsg}</p>
      </div>
    );
  }
}
export default Login
