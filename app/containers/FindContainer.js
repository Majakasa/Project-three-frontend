import React from 'react';
import axios from 'axios';
import Find from '../components/Find';
import ajaxHelpers from '../utils/ajaxHelpers';

const FindContainer = React.createClass({
  getInitialState: function() {
    return {
      ajaxReturn: [],
      searchId: '',
    };
  },
  onChangeName: function(e) {
    this.setState({
      searchId: e.target.value
    })
  },
  onSubmitCharacter: function() {
    const id = this.state.searchId;
    console.log(id);
    ajaxHelpers.findCharacter(id)
    .then(function(response){
      console.log(response.data);
      this.setState({
        ajaxReturn: response.data,
      });
    }.bind(this))
    .catch(function(err){
      console.warn(err,'err');
      return err;
    })
  },

  render: function(){
    return(
      <div className="display">
        <Find onChangeName={this.onChangeName}
          onSubmitCharacter={this.onSubmitCharacter}
          character={this.state.ajaxReturn} />
      </div>
    )
  }
});

export default FindContainer;
