import React, {
  Component
} from 'react';
import {Link} from 'react-router';


class App extends Component {
  render() {
    return (
      <div>
        <ul className='nav-bar'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/charactersList'}>Characters</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/add'}>add</Link></li>
          <li><Link to={'/battle'}>battle</Link></li>
          <li><Link to={'/delete'}>Delete</Link></li>
          <li><Link to={'/find'}>find</Link></li>
          <li><Link to={'/login'}>login</Link></li>



        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default App
