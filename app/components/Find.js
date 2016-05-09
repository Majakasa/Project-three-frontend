import React from 'react';

function Find(props){

  //
  // const Find = props.character.map((character, index) =>{
  //   return <div key={index}>
  //     <p>Name: {character.name},
  //     Gender: {character.gender},
  //     Creator: {character.creator},
  //     Wins: {character.win},
  //     Loses: {character.lose}</p>
  //   </div>;
  // });

  return (

    <div>
      <h2>Find</h2>
      <input onChange={props.onChangeName} placeholder='Search by id' type='text' />
      <button onClick={props.onSubmitCharacter} type='button' >Search</button>
      <p>{props.character}</p>
      <br/><br/>
      <ul></ul>
    </div>
  );

}


export default Find;
