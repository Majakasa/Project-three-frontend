import React, {
  Component
} from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import rps from '../components/Battle'
var comMove =''
function computerMove(){
      var comp = Math.random();
      if (comp < 0.33) {
          comMove = "rock";
      } else if (comp > 0.66) {
          comMove = "paper";
      } else {
          comMove = "scissors";
      }
      return comMove
  }

class BattleContainer extends Component{

  constructor(props) {

    super(props);
    this.state = {
      wins: 0,
      loses: 0,
      score:''
    };
    this.onClickRock = this.onClickRock.bind(this);
    this.onClickPaper = this.onClickPaper.bind(this);
    this.onClickScissors = this.onClickScissors.bind(this);
  }
//
// onClickRock(){
//   this.setState({
//     test: 'yo'
//   })
// }
// onClickPaper(){
//   this.setState({
//     paper: true
//   })
// }
// onClickScissors(){
//   this.setState({
//     scissors: true
//   })
// }

      onClickRock(){
        computerMove()
        if(comMove == 'rock'){
          console.log('computer choose', comMove,'it is a tie');
          this.setState({score: "It's a Tie"});
        } else if(comMove == 'paper'){
          console.log('computer choose', comMove,'you lose');
          this.setState({loses: this.state.loses + 1});
          this.setState({score: 'You Lose'});
            if(this.state.loses == 2){
              this.setState({score: 'Defeat!'});
            }
        } else{
          console.log('computer choose', comMove,'you win');
          this.setState({wins: this.state.wins + 1});
          this.setState({score: 'You Win'});
            if(this.state.wins == 2){
              this.setState({score: 'Victory!'});
            }
        }
      }
       onClickPaper(){

        computerMove()
        if(comMove == 'rock'){
          console.log('computer choose', comMove, 'you win');
          this.setState({wins: this.state.wins + 1})
          this.setState({score: 'You Win'});
          if(this.state.wins == 2){
            this.setState({score: 'Victory!'});
          }
        } else if(comMove == 'paper'){
          this.setState({score: "It's a Tie"});
          console.log('computer choose', comMove,'it is a tie');
        } else{
          console.log('computer choose', comMove,'you lose');
          this.setState({loses: this.state.loses + 1})
          this.setState({score: 'You Lose'});
          if(this.state.loses == 2){
            this.setState({score: 'Defeat!'});
          }
        }
      }

        onClickScissors(){
          computerMove()
          if(comMove == 'rock'){
            console.log('computer choose', comMove,' you lose');
            this.setState({loses: this.state.loses + 1})
            this.setState({score: 'You Lose'});
              if(this.state.loses == 2){
                this.setState({score: 'Defeat!'});
              }
          } else if(comMove == 'paper'){
            console.log('computer choose', comMove,' you win');
            this.setState({wins: this.state.wins + 1});
            this.setState({score: 'You Win'});
              if(this.state.wins == 2){
                this.setState({score: 'Victory!'});
              }
          } else{
            this.setState({score: "It's a Tie"});
            console.log('computer choose', comMove,'it is a tie');
          }
        }

  render() {
    return (
        <div className="battle">
            <p>{this.state.score}</p>
            <p>{this.state.wins} {this.state.loses}</p>
            <button type='button' disabled={this.state.wins == 3||this.state.loses == 3}  onClick={this.onClickRock}>Rock</button>
            <button type='button' disabled={this.state.wins == 3||this.state.loses == 3}  onClick={this.onClickPaper}>Paper</button>
            <button type='button' disabled={this.state.wins == 3||this.state.loses == 3}  onClick={this.onClickScissors}>Scissors</button>
          </div>
      );
  }
}

export default BattleContainer
