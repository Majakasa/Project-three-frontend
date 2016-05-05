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

//   constructor(props) {
//     super(props);
//     this.state = {
//       rock: null,
//       paper: null,
//       scissors: null,
//     };
//   }
//
// onClickRock(){
//   this.setState({
//     rock: true
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
        } else if(comMove == 'paper'){
          console.log('computer choose', comMove,'you lose');
        } else{
          console.log('computer choose', comMove,'you win');
        }
      }
       onClickPaper(){
        computerMove()
        if(comMove == 'rock'){
          console.log('computer choose', comMove, 'you win');
        } else if(comMove == 'paper'){
          console.log('computer choose', comMove,'it is a tie');
        } else{
          console.log('computer choose', comMove,'you lose');
        }
      }
        onClickScissors(){
          computerMove()
          if(comMove == 'rock'){
            console.log('computer choose', comMove,' you lose');
          } else if(comMove == 'paper'){
            console.log('computer choose', comMove,' you win');
          } else{
            console.log('computer choose', comMove,'it is a tie');
          }

        }







  render() {
    return (
        <div className="battle">

            <button type='button'  onClick={this.onClickRock}>Rock</button>
            <button type='button'  onClick={this.onClickPaper}>Paper</button>
            <button type='button'  onClick={this.onClickScissors}>Scissors</button>

          </div>
      );
  }


}

export default BattleContainer
