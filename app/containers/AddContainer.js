import React from 'react';
import axios from 'axios';
import Add from '../components/Add';
import ajaxHelpers from '../utils/ajaxHelpers';

const AddContainer = React.createClass({
  getInitialState: function() {
    return {
      Name: '',
      Gender: '',
      Creator: '',
      status:'',
      win: 1,
      lose: 1
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
    const newCharacter = {
      name: this.state.Name,
      gender: this.state.Gender,
      creator: this.state.Creator,
      win: this.state.win,
      lose: this.state.lose
    }
    ajaxHelpers.addCharacter(newCharacter)
    .then(function(response){
      console.log(response.data);
      this.setState({
        status: "added"
      });
    }.bind(this))
    .catch(function(err){
      console.warn(err,'err');
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
        />
      </div>
    )
  }
});
export default AddContainer
