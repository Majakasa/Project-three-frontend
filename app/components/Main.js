import React from 'react';
import Home from './Home';

const Main = React.createClass({
  render: function(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
});

export default Main;
