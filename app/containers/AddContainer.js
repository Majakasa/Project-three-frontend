import React from 'react';
import axios from 'axios';
import Add from '../components/Add';
import ajaxHelpers from '../utils/ajaxHelpers';

const AddContainer = React.createClass({
  getInitialState: function() {
    return {
      Name: '',
      Gender: '',
      Creator: ''
    };
  },
  onChangeName: function(e) {
    this.setState({
      Name: e.target.value
    })
  },
  onChangeGender: function(e) {
    this.setState({
      Gender: e.target.value
    })
  },
  onChangeCreator: function(e) {
    this.setState({
      Creator: e.target.value
    })
  },
  onSubmitList: function(e) {
    e.preventDefault();
    const character = {
      Name: this.state.Name,
      Gender: this.state.Gender,
      Creator: this.state.Creator,
    }
    ajaxHelpers.AddRecipe(character)
    .then(function(response){
      console.log(response.data);
      this.setState({
        recipeAdded: "added"
      });
    }.bind(this))
    .catch(function(err){
      console.warn('err');
      return err;
    })
  },

    // findCharacterAjaxCall: function() {
    //   console.log('Find this contact:', this.state.name);
    //   const contact = {
    //     name: this.state.name,
    //   };
      // ajaxHelpers.findContact(character)
      // .then(function(response){
      //   console.log("response.data", response.data);
      //   this.setState({
      //     ajaxReturn: response.data
      //   });
      // }.bind(this));
    // },



  render(){
    return(
      <div>
        <Add onChangeName={this.onChangeName}
          onChangeGender={this.onChangeGender}
          onChangeCreator={this.onChangeCreator}
          onSubmitList={this.onSubmitList}
          listAddedMsg={this.state.listAdded} />
      </div>
    )
  }
});
export default AddContainer
