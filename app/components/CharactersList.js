import React from 'react';

  //
  // const Characters = props.characters.map((character) =>{
  //   return <li key={character._id}>
  //     <b>Name:</b> {character.name}<br/>
  //     <b>Gender:</b> {character.gender}<br/>
  //     <b>Creator:</b> {character.creator}<br/>
  //     <b>wins:</b> {character.win}<br/>
  //     <b>loses:</b> {character.loses}<br/>
  //     <hr/>
  //   </li>;
  // });
function Characters(props){
  return (
    <div>
      <h2>Characters/h2>
      <ul>
        {Characters}
      </ul>
    </div>
  );
}

export default Characters
