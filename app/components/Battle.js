import React from 'react';


const rps = React.createClass({

render: function(props) {
  return (
    <div className="battle">
        <button type='button'  onClick={this.onClickRock}>Rock</button>
        <button type='button'  onClick={this.onClickPaper}>Paper</button>
        <button type='button'  onClick={this.onClickScissors}>Scissors</button>
      </div>
    );
  }
})

export default rps
