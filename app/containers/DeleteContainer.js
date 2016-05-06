import React from 'react';
import axios from 'axios';

import Delete from '../components/Delete';
import ajaxHelpers from '../utils/ajaxHelpers';

const DeleteContainer = React.createClass({
  getInitialState: function() {
    return {
      searchName: '',
      recipeDeleted: ''
    };
  },

  onChangeName: function(e) {
    this.setState({
      searchName: e.target.value
    })
  },

  onDelete: function() {
    const name = this.state.searchName;
    console.log(name);

    ajaxHelpers.deleteCharacter(name)
    .then(function(response){
      console.log(response.data);
      this.setState({
        recipeDeleted: "deleted"
      });
      console.log(this.state);
    }.bind(this))

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
