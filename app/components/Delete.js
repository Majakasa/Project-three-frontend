import React from 'react';

function Delete(props){
  console.log('1')

  return (
    <div>
      <h2>Delete</h2>
      <input onChange={props.onChangeName} placeholder='Delete by name' type='text' />
      <button onClick={props.onDelete} type='button' >Delete</button>
      <h4>{props.recipeDeleted}</h4>
    </div>
  );
}


export default Delete;
