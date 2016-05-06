import React, {
  Component
} from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';

class CharacterList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    ajaxHelpers.getCharacters(function(data) {

      if (data) {
        this.setState({data: data})
      } else {
        this.setState({error: true})
      }
    }.bind(this))
  }

  renderData() {
    return this.state.data.map(function(character, index) {
      return (
        <div key={index}>
          <p>Name: {character.name},
          Gender: {character.gender},
          Creator: {character.creator},
          Wins: {character.win},
          Loses: {character.lose}</p>
        </div>
      );
    });
  }

  render() {
    if (this.state.error) {
      return (
        <p>There was an error.</p>
      )
    }

    if (this.state.data) {
      return (
        <div>
          <p>Characters all</p>
          {this.renderData()}
        </div>
      )
    }

    return (
      <p>Loading Characters...</p>
    );
  }
}
export default CharacterList
