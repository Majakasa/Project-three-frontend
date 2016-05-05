import React from 'react';


const rps = React.createClass({

render: function() {
  return (
      <div className="battle">
          <button type='button' onClick={props.rock}>rock</button>
          <button type='button' onClick={props.rpsBattle}>paper</button>
          <button type='button' onClick={test}>scissors</button>
        </div>
    );
  }
})

export default rps
