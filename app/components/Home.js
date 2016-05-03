import React from 'react'
import {Link} from 'react-router';
class App {
  render() {
    return (
      <div>
        <ul className='nav-bar'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default App
