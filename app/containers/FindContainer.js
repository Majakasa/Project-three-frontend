
  import React from 'react';
  import axios from 'axios';

  import Find from '../components/Find';
  import ajaxHelpers from '../utils/ajaxHelpers';

  const FindContainer = React.createClass({
    getInitialState: function() {
      return {
        ajaxReturn: [],
        searchName: ''
      };
    },

    onChangeName: function(e) {
      this.setState({
        searchName: e.target.value
      })
    },

    onSubmitCharacter: function() {
      const name = this.state.searchName;
      console.log(name);

      ajaxHelpers.findCharacter(name)
      .then(function(response){
        console.log(response.data);
        this.setState({
          ajaxReturn: response.data
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
