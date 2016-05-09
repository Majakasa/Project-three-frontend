import React from 'react';
import axios from 'axios';
import Delete from '../components/Delete';
import ajaxHelpers from '../utils/ajaxHelpers';

const DeleteContainer = React.createClass({
  getInitialState: function() {
    return {
      searchId: '',
      characterDeleted: ''
    };
  },
  onChangeName: function(e) {
    this.setState({
      searchId: e.target.value
    })
  },
  onDelete: function() {
    const id = this.state.searchId;
    console.log(id);
    ajaxHelpers.deleteCharacter(id)
    .then(function(response){
      console.log(response.data);
      this.setState({
        characterDeleted: "deleted"
      });
      console.log(this.state);
    }.bind(this))
    .catch(function(err){
      console.warn(err,'err');
      return err;
    })
  },

  render: function(){
    return(
      <div className="display">
        <Delete onChangeName={this.onChangeName}
          onDelete={this.onDelete}
        />
      </div>
    )
  }
});

export default DeleteContainer;
